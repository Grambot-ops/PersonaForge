import React, { useEffect } from "react";
import {
  ReactFlow,
  Controls,
  Background,
  MiniMap,
  Handle,
  Position,
  Node,
  Edge,
  useNodesState,
  useEdgesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

// ── CUSTOM NODE COMPONENTS ───────────────────────────────────────

export interface CloudNodeData {
  label: string;
  subLabel?: string;
  category: "k8s" | "aws" | "azure" | "storage" | "security" | "monitor" | "external" | "edge" | "app";
  status?: boolean;
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case "k8s": return "border-[#326ce5] text-[#326ce5] shadow-[0_0_12px_rgba(50,108,229,0.15)]";
    case "aws": return "border-[#ff9900] text-[#ff9900] shadow-[0_0_12px_rgba(255,153,0,0.15)]";
    case "azure": return "border-[#0089d6] text-[#0089d6] shadow-[0_0_12px_rgba(0,137,214,0.15)]";
    case "storage": return "border-[#10b981] text-[#10b981] shadow-[0_0_12px_rgba(16,185,129,0.15)]";
    case "security": return "border-[#ff3e3e] text-[#ff3e3e] shadow-[0_0_12px_rgba(255,62,62,0.15)]";
    case "monitor": return "border-[#6366f1] text-[#6366f1] shadow-[0_0_12px_rgba(99,102,241,0.15)]";
    case "external": return "border-[#00f0ff] text-[#00f0ff] shadow-[0_0_12px_rgba(0,240,255,0.15)]";
    case "edge": return "border-[#f59e0b] text-[#f59e0b] shadow-[0_0_12px_rgba(245,158,11,0.15)]";
    case "app": return "border-[#bf94ff] text-[#bf94ff] shadow-[0_0_12px_rgba(191,148,255,0.15)]";
    default: return "border-border text-foreground";
  }
};

const getIcon = (category: string) => {
  switch (category) {
    case "k8s": return "☸️";
    case "aws": return "☁️";
    case "azure": return "💠";
    case "storage": return "💾";
    case "security": return "🛡️";
    case "monitor": return "📊";
    case "external": return "👤";
    case "edge": return "📡";
    case "app": return "🚀";
    default: return "⚙️";
  }
};

export const CustomCloudNode: React.FC<{ data: CloudNodeData }> = ({ data }) => {
  return (
    <div className={`px-4 py-3 bg-[#0a0a0c]/90 backdrop-blur-md border rounded-xl flex items-center gap-3 min-w-[200px] relative transition-transform hover:scale-102 ${getCategoryColor(data.category)}`}>
      <Handle type="target" position={Position.Left} className="!bg-border-muted !w-1.5 !h-1.5" />
      <div className="text-xl flex items-center justify-center w-8 h-8 rounded-lg bg-surface/50">{getIcon(data.category)}</div>
      <div className="flex flex-col text-left">
        <span className="font-mono text-xs font-semibold text-white leading-tight">{data.label}</span>
        {data.subLabel && <span className="font-sans text-[9px] text-[#94a3b8] font-medium mt-0.5">{data.subLabel}</span>}
      </div>
      {data.status && (
        <span className="absolute top-2 right-2 flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
        </span>
      )}
      <Handle type="source" position={Position.Right} className="!bg-border-muted !w-1.5 !h-1.5" />
    </div>
  );
};

// Custom group background component
export const CustomGroupNode: React.FC<{ data: { label: string } }> = ({ data }) => {
  return (
    <div className="w-full h-full border border-dashed border-[#bf94ff]/20 bg-[#0a0a0c]/20 backdrop-blur-sm rounded-2xl p-4 flex flex-col justify-start relative select-none animate-fade-in">
      <div className="font-display text-[9px] font-bold text-[#bf94ff]/60 uppercase tracking-widest absolute -top-2.5 left-4 px-2 bg-[#020202] border border-[#bf94ff]/15 rounded-md">
        {data.label}
      </div>
    </div>
  );
};

// ── COMPONENT DEFINITION ─────────────────────────────────────────

const nodeTypes = {
  cloudNode: CustomCloudNode,
  customGroup: CustomGroupNode,
};

interface ReactFlowBlueprintProps {
  nodes: Node[];
  edges: Edge[];
  preview?: boolean;
}

const ReactFlowBlueprint: React.FC<ReactFlowBlueprintProps> = ({
  nodes: propNodes,
  edges: propEdges,
  preview = false,
}) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(propNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(propEdges);

  // Sync internal state when props change
  useEffect(() => {
    setNodes(propNodes);
    setEdges(propEdges);
  }, [propNodes, propEdges, setNodes, setEdges]);

  return (
    <div className={`w-full h-full bg-[#020202] relative ${preview ? "pointer-events-none select-none" : ""}`}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={preview ? undefined : onNodesChange}
        onEdgesChange={preview ? undefined : onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        colorMode="dark"
        minZoom={preview ? 0.1 : 0.2}
        maxZoom={preview ? 1.5 : 1.5}
        panOnDrag={!preview}
        zoomOnScroll={!preview}
        zoomOnPinch={!preview}
        nodesDraggable={!preview}
        nodesConnectable={!preview}
        elementsSelectable={!preview}
      >
        {!preview && <Controls className="bg-surface/90 border border-border rounded-xl text-foreground font-mono" />}
        {!preview && (
          <MiniMap
            nodeColor={(n) => {
              if (n.type === "customGroup") return "rgba(191, 148, 255, 0.05)";
              return "#bf94ff";
            }}
            maskColor="rgba(0, 0, 0, 0.6)"
            className="border border-border rounded-xl bg-surface/80"
          />
        )}
        <Background color="#bf94ff" gap={20} size={1} className={preview ? "opacity-[0.04]" : "opacity-10"} />
      </ReactFlow>
    </div>
  );
};

export default ReactFlowBlueprint;
