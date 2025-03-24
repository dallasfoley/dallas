"use client";

import { Handle, Position } from "@xyflow/react";
import { FaPaintBrush } from "react-icons/fa";

export default function DesignNode({ data }: { data: { label: string } }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white p-3 rounded-lg mb-2 relative">
        <FaPaintBrush className="text-black h-6 w-6" />
        {/* Add ids to the handles */}
        <Handle
          id="design-left"
          type="target"
          position={Position.Left}
          style={{
            left: -4,
            top: "50%",
            transform: "translateY(-50%)",
            background: "#fff",
          }}
        />
        <Handle
          id="design-bottom"
          type="source"
          position={Position.Bottom}
          style={{
            bottom: -4,
            left: "50%",
            transform: "translateX(-50%)",
            background: "#fff",
          }}
        />
      </div>
      <div className="text-white text-xs font-medium">{data.label}</div>
    </div>
  );
}
