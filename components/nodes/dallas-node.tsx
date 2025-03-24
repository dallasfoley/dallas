"use client";

import { Handle, Position } from "@xyflow/react";
import { TbCircleDashedLetterD } from "react-icons/tb";

export default function DallasNode({ data }: { data: { label: string } }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white p-2 rounded-full mb-2 relative">
        <TbCircleDashedLetterD className="text-black h-8 w-8" />
        {/* Add ids to the handles */}
        <Handle
          id="dallas-left"
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
          id="dallas-right"
          type="source"
          position={Position.Right}
          style={{
            right: -4,
            top: "50%",
            transform: "translateY(-50%)",
            background: "#fff",
          }}
        />
      </div>
      <div className="text-white text-xs font-medium">{data.label}</div>
    </div>
  );
}
