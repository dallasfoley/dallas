import { IconBaseProps, IconType } from "react-icons";
import Image from "next/image";
import javalinIcon from "@/public/javalin.png";

export const JavalinIcon: IconType = ({ size = 24, style }: IconBaseProps) => {
  const numericSize = typeof size === "string" ? parseInt(size, 10) : size;
  if (!numericSize) {
    return null;
  }

  return (
    <Image
      src={javalinIcon}
      alt="javalin-icon"
      width={numericSize}
      height={numericSize}
      style={{
        filter: "brightness(0) invert(1)",
        display: "inline-block",
        objectFit: "contain",
        translate: "0px -4px",
        ...style,
      }}
    />
  );
};
