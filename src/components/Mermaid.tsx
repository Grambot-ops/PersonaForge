import React, { useEffect, useRef, useState, useCallback } from "react";
import mermaid from "mermaid";
import { motion, AnimatePresence } from "framer-motion";

// Initialize mermaid with reliable defaults
mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  securityLevel: "loose",
  fontFamily: "monospace",
  logLevel: 5,
  flowchart: {
    htmlLabels: true,
    useMaxWidth: true,
    curve: "basis",
  },
  themeVariables: {
    fontFamily: "monospace",
    fontSize: "14px",
    primaryColor: "#00ff41",
    primaryTextColor: "#fff",
    primaryBorderColor: "#00ff41",
    lineColor: "#666",
    secondaryColor: "#111",
    tertiaryColor: "#222",
  },
});

interface MermaidProps {
  chart: string;
  responsive?: boolean;
  interactive?: boolean;
}

const Mermaid: React.FC<MermaidProps> = ({ chart, responsive = true, interactive = false }) => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTheme, setCurrentTheme] = useState(
    document.documentElement.classList.contains("dark") ? "dark" : "default",
  );

  // Zoom and Pan state
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [svgHtml, setSvgHtml] = useState<string>("");
  const [svgSize, setSvgSize] = useState({ width: 800, height: 600 });
  const [viewportSize, setViewportSize] = useState({ width: 800, height: 600 });

  // Store latest zoom/pan in a ref to prevent recreation of wheel listeners
  const stateRef = useRef({ pan: { x: 0, y: 0 }, zoom: 1 });
  useEffect(() => {
    stateRef.current = { pan, zoom };
  }, [pan, zoom]);

  // Reset pan/zoom on chart change
  useEffect(() => {
    if (interactive) {
      setPan({ x: 0, y: 0 });
      setZoom(1);
      setSvgHtml("");
    }
  }, [chart, interactive]);

  const fitToScreen = useCallback(() => {
    if (!containerRef.current || !viewportRef.current) return;
    const svgElement = containerRef.current.querySelector("svg");
    if (!svgElement) return;

    const viewBoxAttr = svgElement.getAttribute("viewBox");
    let svgW = 800;
    let svgH = 600;
    if (viewBoxAttr) {
      const parts = viewBoxAttr.split(" ").map(Number);
      if (parts.length === 4) {
        svgW = parts[2];
        svgH = parts[3];
      }
    } else {
      const rect = svgElement.getBoundingClientRect();
      svgW = rect.width || 800;
      svgH = rect.height || 600;
    }

    const viewportRect = viewportRef.current.getBoundingClientRect();
    const vW = viewportRect.width || 800;
    const vH = viewportRect.height || 600;

    const padding = 0.9;
    const scaleX = vW / svgW;
    const scaleY = vH / svgH;
    const nextZoom = Math.min(scaleX, scaleY) * padding;

    const nextPanX = (vW - svgW * nextZoom) / 2;
    const nextPanY = (vH - svgH * nextZoom) / 2;

    const clampedZoom = Math.min(Math.max(nextZoom, 0.15), 6);
    setZoom(clampedZoom);
    setPan({ x: nextPanX, y: nextPanY });
    setSvgSize({ width: svgW, height: svgH });
    setViewportSize({ width: vW, height: vH });
  }, [interactive]);

  // Mouse pan event handlers
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!interactive || isLoading) return;
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX - pan.x,
      y: e.clientY - pan.y,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !interactive || isLoading) return;
    setPan({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y,
    });
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  // Touch pan event handlers
  const touchStartRef = useRef({ x: 0, y: 0 });
  const [isTouching, setIsTouching] = useState(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!interactive || isLoading || e.touches.length !== 1) return;
    setIsTouching(true);
    const touch = e.touches[0];
    touchStartRef.current = {
      x: touch.clientX - pan.x,
      y: touch.clientY - pan.y,
    };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isTouching || !interactive || isLoading || e.touches.length !== 1) return;
    const touch = e.touches[0];
    setPan({
      x: touch.clientX - touchStartRef.current.x,
      y: touch.clientY - touchStartRef.current.y,
    });
  };

  const handleTouchEnd = () => {
    setIsTouching(false);
  };

  const handleDoubleClick = () => {
    if (!interactive || isLoading) return;
    fitToScreen();
  };

  // Native wheel event listener for zoom centered at mouse cursor
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || !interactive) return;

    const handleNativeWheel = (e: WheelEvent) => {
      e.preventDefault();

      const { pan: currentPan, zoom: currentZoom } = stateRef.current;
      const rect = viewport.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const delta = -e.deltaY * 0.001;
      const zoomIntensity = 0.12;
      const nextZoom = Math.min(Math.max(currentZoom * (1 + delta * zoomIntensity * 8), 0.15), 6);

      const scaleChange = nextZoom / currentZoom;
      const nextPan = {
        x: mouseX - (mouseX - currentPan.x) * scaleChange,
        y: mouseY - (mouseY - currentPan.y) * scaleChange,
      };

      setZoom(nextZoom);
      setPan(nextPan);
    };

    viewport.addEventListener("wheel", handleNativeWheel, { passive: false });
    return () => {
      viewport.removeEventListener("wheel", handleNativeWheel);
    };
  }, [interactive]);

  // Resize observer to handle container size changes (modal animations, window resizing)
  useEffect(() => {
    if (!interactive || !viewportRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setViewportSize({ width, height });
        fitToScreen();
      }
    });

    resizeObserver.observe(viewportRef.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [interactive, fitToScreen]);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const isDark = document.documentElement.classList.contains("dark");
          setCurrentTheme(isDark ? "dark" : "default");
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let isMounted = true;
    const chartId = "mermaid-svg-" + Math.random().toString(36).substr(2, 9);

    const renderChart = async () => {
      if (!chart || !chart.trim()) return;
      if (!containerRef.current) return;

      try {
        const trimmedChart = chart.trim();
        const mermaidKeywords = [
          "graph",
          "flowchart",
          "sequencediagram",
          "subgraph",
          "statediagram",
          "erdiagram",
          "gantt",
          "classdiagram",
          "gitgraph",
          "pie",
          "info",
          "journey",
          "c4context",
          "c4container",
          "c4component",
          "c4dynamic",
          "c4deployment",
          "mindmap",
          "timeline",
          "%%",
          "---",
        ];
        const lowerChart = trimmedChart.toLowerCase();
        const isMermaid = mermaidKeywords.some((kw) =>
          lowerChart.startsWith(kw),
        );

        if (isMermaid) {
          if (isMounted) {
            setError(null);
            setIsLoading(true);
          }

          const isDark = currentTheme === "dark";

          await mermaid.initialize({
            startOnLoad: false,
            theme: isDark ? "dark" : "default",
            securityLevel: "loose",
            fontFamily: "monospace",
            flowchart: {
              htmlLabels: true,
              useMaxWidth: responsive,
              curve: "basis",
            },
            themeVariables: {
              fontFamily: "monospace",
              fontSize: "14px",
              primaryColor: isDark ? "#00ff41" : "#059669",
              primaryTextColor: isDark ? "#fff" : "#1e293b",
              primaryBorderColor: isDark ? "#00ff41" : "#059669",
              lineColor: isDark ? "#666" : "#475569",
              secondaryColor: isDark ? "#111" : "#f1f5f9",
              tertiaryColor: isDark ? "#222" : "#e2e8f0",
              mainBkg: "transparent",
              nodeBorder: isDark ? "#00ff41" : "#059669",
              clusterBkg: isDark ? "#111" : "#f8fafc",
              clusterBorder: isDark ? "#333" : "#cbd5e1",
              titleColor: isDark ? "#00ff41" : "#059669",
              edgeLabelBackground: isDark ? "#0a0a0a" : "#fff",
            },
          });

          await new Promise((resolve) => setTimeout(resolve, 100));
          const { svg } = await mermaid.render(chartId, trimmedChart);

          if (isMounted && containerRef.current) {
            containerRef.current.innerHTML = svg;
            const svgElement = containerRef.current.querySelector("svg");
            if (svgElement) {
              if (interactive) {
                svgElement.style.width = "auto";
                svgElement.style.height = "auto";
                svgElement.style.maxWidth = "none";
              } else if (responsive) {
                svgElement.style.width = "100%";
                svgElement.style.height = "auto";
              } else {
                svgElement.style.maxWidth = "none";
                svgElement.style.height = "auto";
              }
            }
            
            if (interactive) {
              setSvgHtml(containerRef.current.innerHTML);
            }
            
            setIsLoading(false);
            
            if (interactive) {
              setTimeout(() => {
                fitToScreen();
              }, 50);
            }
          }
        } else {
          if (isMounted) {
            setError("ascii");
            setIsLoading(false);
          }
        }
      } catch (err) {
        console.error("Mermaid Render Error:", err);
        if (isMounted) {
          setError("ascii");
          setIsLoading(false);
        }
      }
    };

    renderChart();
    return () => {
      isMounted = false;
    };
  }, [chart, currentTheme, responsive, interactive, fitToScreen]);

  if (error === "ascii") {
    return (
      <div className="inline-block min-w-full bg-background border border-border-muted rounded-sm p-8 transition-colors">
        <pre className="font-mono text-[11px] leading-relaxed text-primary whitespace-pre">
          {chart}
        </pre>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 border border-red-900/30 bg-red-950/20 rounded-sm w-full transition-colors">
        <div className="flex items-center gap-2 text-red-500 font-mono text-xs uppercase mb-4">
          <span className="material-symbols-outlined text-sm">error</span>
          Diagram Generation Failed
        </div>
        <pre className="text-red-400 font-mono text-[10px] overflow-auto whitespace-pre-wrap italic bg-background border border-red-900/30">
          {chart}
        </pre>
      </div>
    );
  }

  if (interactive) {
    const transitionStyle = isDragging || isTouching
      ? "none"
      : "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)";

    return (
      <div 
        ref={viewportRef}
        className="relative w-full h-full overflow-hidden select-none bg-background bg-blueprints cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onDoubleClick={handleDoubleClick}
      >
        <style dangerouslySetInnerHTML={{ __html: `
          .minimap-svg-container svg {
            width: 100% !important;
            height: 100% !important;
            max-width: 100% !important;
            max-height: 100% !important;
          }
        `}} />
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm z-10"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                <div className="font-mono text-[10px] text-primary animate-pulse tracking-[0.3em] uppercase">
                  Init Visual Engine...
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <div
          ref={containerRef}
          className="absolute origin-top-left flex items-center justify-center"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transition: transitionStyle,
            visibility: isLoading ? "hidden" : "visible",
            userSelect: "none",
          }}
        />

        {/* Floating controls panel */}
        {!isLoading && (
          <motion.div 
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-4 right-4 flex flex-col gap-1.5 z-20"
          >
            <div className="flex flex-col bg-surface/90 backdrop-blur-md border border-border-muted rounded-lg p-0.5 shadow-md">
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  const { pan: currentPan, zoom: currentZoom } = stateRef.current;
                  const rect = viewportRef.current?.getBoundingClientRect() || { width: 800, height: 600 };
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const nextZoom = Math.min(currentZoom * 1.25, 6);
                  const scaleChange = nextZoom / currentZoom;
                  setZoom(nextZoom);
                  setPan({
                    x: centerX - (centerX - currentPan.x) * scaleChange,
                    y: centerY - (centerY - currentPan.y) * scaleChange,
                  });
                }}
                className="w-6 h-6 flex items-center justify-center text-muted hover:text-primary rounded-md transition-colors cursor-pointer"
                title="Zoom In"
              >
                <span className="material-symbols-outlined text-xs font-bold">add</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  const { pan: currentPan, zoom: currentZoom } = stateRef.current;
                  const rect = viewportRef.current?.getBoundingClientRect() || { width: 800, height: 600 };
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const nextZoom = Math.max(currentZoom / 1.25, 0.15);
                  const scaleChange = nextZoom / currentZoom;
                  setZoom(nextZoom);
                  setPan({
                    x: centerX - (centerX - currentPan.x) * scaleChange,
                    y: centerY - (centerY - currentPan.y) * scaleChange,
                  });
                }}
                className="w-6 h-6 flex items-center justify-center text-muted hover:text-primary rounded-md transition-colors border-t border-border-muted/30 cursor-pointer"
                title="Zoom Out"
              >
                <span className="material-symbols-outlined text-xs font-bold">remove</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                whileTap={{ scale: 0.9 }}
                onClick={fitToScreen}
                className="w-6 h-6 flex items-center justify-center text-muted hover:text-primary rounded-md transition-colors border-t border-border-muted/30 cursor-pointer"
                title="Fit to Screen"
              >
                <span className="material-symbols-outlined text-xs font-bold">fit_screen</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setZoom(1);
                  setPan({ x: 0, y: 0 });
                }}
                className="w-6 h-6 flex items-center justify-center text-muted hover:text-primary rounded-md transition-colors border-t border-border-muted/30 cursor-pointer"
                title="Reset View"
              >
                <span className="material-symbols-outlined text-xs font-bold">restart_alt</span>
              </motion.button>
            </div>
            <motion.div 
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="bg-primary/5 backdrop-blur-md border border-primary/20 px-2 py-1 rounded text-[8px] font-bold text-primary uppercase tracking-wider text-center"
            >
              Interactive Blueprint
            </motion.div>
          </motion.div>
        )}

        {/* Minimap (Overview) */}
        {!isLoading && svgHtml && (
          <motion.div 
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="absolute bottom-4 right-4 w-40 h-28 bg-surface/90 backdrop-blur-md border border-border-muted rounded-xl p-2 select-none overflow-hidden z-20 shadow-lg pointer-events-none hidden md:block"
          >
            <div className="w-full h-full relative opacity-30 minimap-svg-container">
              <div 
                className="w-full h-full flex items-center justify-center scale-[0.18] transform-gpu origin-center pointer-events-none"
                dangerouslySetInnerHTML={{ __html: svgHtml }}
              />
            </div>
            {(() => {
              const mW = 160 - 16;
              const mH = 112 - 16;
              const sW = svgSize.width;
              const sH = svgSize.height;
              const vW = viewportSize.width;
              const vH = viewportSize.height;

              const mScale = Math.min(mW / sW, mH / sH);
              const renderW = sW * mScale;
              const renderH = sH * mScale;
              const offsetX = 8 + (mW - renderW) / 2;
              const offsetY = 8 + (mH - renderH) / 2;

              const viewLeft = -pan.x / zoom;
              const viewTop = -pan.y / zoom;
              const viewWidth = vW / zoom;
              const viewHeight = vH / zoom;

              const rectLeft = offsetX + viewLeft * mScale;
              const rectTop = offsetY + viewTop * mScale;
              const rectWidth = viewWidth * mScale;
              const rectHeight = viewHeight * mScale;

              return (
                <div 
                  className="absolute border border-primary bg-primary/10 rounded pointer-events-none transition-all duration-75 ease-out z-30"
                  style={{
                    left: `${rectLeft}px`,
                    top: `${rectTop}px`,
                    width: `${rectWidth}px`,
                    height: `${rectHeight}px`,
                    maxWidth: `${mW}px`,
                    maxHeight: `${mH}px`,
                    boxShadow: '0 0 10px rgba(191, 148, 255, 0.2)',
                  }}
                />
              );
            })()}
          </motion.div>
        )}
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-visible group">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm z-10 min-h-[300px]"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
              <div className="font-mono text-[10px] text-primary animate-pulse tracking-[0.3em] uppercase">
                Init Visual Engine...
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.98 }}
        animate={!isLoading ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        ref={containerRef}
        className="mermaid-container flex justify-center w-full min-h-[300px]"
        style={{ visibility: isLoading ? "hidden" : "visible" }}
      />
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute top-2 right-2 pointer-events-none"
        >
          <div className="bg-primary/5 backdrop-blur-md border border-primary/20 px-2 py-1 rounded text-[8px] font-bold text-primary uppercase tracking-wider">
            Enhanced Technical Blueprint
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Mermaid;
