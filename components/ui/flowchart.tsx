"use client";

import { Background, MarkerType, ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import RequestNode from "../nodes/request-node";
import DallasNode from "../nodes/dallas-node";
import DevelopmentNode from "../nodes/development-node";
import DesignNode from "../nodes/design-node";
import ClientNode from "../nodes/client-node";
import { useMemo } from "react";

const nodes = [
  {
    id: "request",
    type: "request",
    draggable: false,
    selectable: false,
    position: { x: 20, y: 100 },
    data: { label: "Request" },
  },
  {
    id: "dallas",
    type: "dallas",
    draggable: false,
    selectable: false,
    position: { x: 150, y: 100 },
    data: { label: "Planning" },
  },
  {
    id: "design",
    type: "design",
    draggable: false,
    selectable: false,
    position: { x: 280, y: 50 },
    data: { label: "Design" },
  },
  {
    id: "development",
    type: "development",
    draggable: false,
    selectable: false,
    position: { x: 280, y: 150 },
    data: { label: "Development" },
  },
  {
    id: "client",
    type: "client",
    draggable: false,
    selectable: false,
    position: { x: 410, y: 100 },
    data: { label: "Delivery" },
  },
];

// Updated edges with sourceHandle and targetHandle properties
const edges = [
  {
    id: "e1-2",
    source: "request",
    sourceHandle: "request-right",
    target: "dallas",
    targetHandle: "dallas-left",
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed, color: "white" },
    style: { stroke: "white" },
  },
  {
    id: "e2-3",
    source: "dallas",
    sourceHandle: "dallas-right",
    target: "design",
    targetHandle: "design-left",
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed, color: "white" },
    style: { stroke: "white" },
  },
  {
    id: "e3-4",
    source: "design",
    sourceHandle: "design-bottom",
    target: "development",
    targetHandle: "development-left",
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed, color: "white" },
    style: { stroke: "white" },
    type: "smoothstep",
  },
  {
    id: "e4-5",
    source: "development",
    sourceHandle: "development-right",
    target: "client",
    targetHandle: "client-left",
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed, color: "white" },
    style: { stroke: "white" },
  },
];

export default function Flow() {
  const nodeTypes = useMemo(
    () => ({
      request: RequestNode,
      dallas: DallasNode,
      development: DevelopmentNode,
      design: DesignNode,
      client: ClientNode,
    }),
    []
  );

  return (
    <div className="w-full max-w-[500px] h-full mx-auto flex items-center justify-center bg-black">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        elementsSelectable={false}
        nodesDraggable={false}
        nodesConnectable={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnDoubleClick={false}
        fitView
        fitViewOptions={{ padding: 0.1 }}
        preventScrolling={false}
        proOptions={{ hideAttribution: true }}
        className="bg-black/30 rounded-lg"
      >
        <Background />
      </ReactFlow>
    </div>
  );
}
