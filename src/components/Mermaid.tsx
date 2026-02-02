import React, { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

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
}

const Mermaid: React.FC<MermaidProps> = ({ chart, responsive = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTheme, setCurrentTheme] = useState(
    document.documentElement.classList.contains("dark") ? "dark" : "default",
  );

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
    const chartId = `mermaid-svg-${Math.random().toString(36).substr(2, 9)}`;

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
              mainBkg: "transparent", // Use transparent to inherit from container
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
              if (responsive) {
                svgElement.style.width = "100%";
                svgElement.style.height = "auto";
              } else {
                svgElement.style.maxWidth = "none";
                svgElement.style.height = "auto";
              }
            }
            setIsLoading(false);
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
  }, [chart, currentTheme, responsive]);

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

  return (
    <div className="relative w-full overflow-visible">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm z-10 min-h-[300px]">
          <div className="font-mono text-[10px] text-primary animate-pulse tracking-[0.3em] uppercase">
            Init Visual Engine...
          </div>
        </div>
      )}
      <div
        ref={containerRef}
        className="mermaid-container flex justify-center w-full min-h-[300px]"
        style={{ visibility: isLoading ? "hidden" : "visible" }}
      />
    </div>
  );
};

export default Mermaid;
