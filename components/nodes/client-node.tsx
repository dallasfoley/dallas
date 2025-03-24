"use client";

import { Handle, Position } from "@xyflow/react";
import { FaUserCheck } from "react-icons/fa";

export default function ClientNode({ data }: { data: { label: string } }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white p-3 rounded-lg mb-2 relative">
        <FaUserCheck className="text-black h-6 w-6" />
        {/* Add id to the handle */}
        <Handle
          id="client-left"
          type="target"
          position={Position.Left}
          style={{
            left: -4,
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
