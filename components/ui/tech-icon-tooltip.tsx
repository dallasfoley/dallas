"use client";

import type { IconType } from "react-icons/lib";
import AnimatedTechTooltip from "./animated-tech-tooltip";

interface TechIconTooltipProps {
  Icon: IconType;
  className?: string;
}

export default function TechIconTooltip2({
  Icon,
  className = "",
}: TechIconTooltipProps) {
  return <AnimatedTechTooltip Icon={Icon} className={className} />;
}
