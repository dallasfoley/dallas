import { IconBaseProps, IconType } from "react-icons";
import Image from "next/image";
import myIcon from "@/public/icons/my-icon.png";

export const PngIcon: IconType = ({ size = 24, style }: IconBaseProps) => {
  const numericSize = typeof size === "string" ? parseInt(size, 10) : size;
  if (!numericSize) {
    return null;
  }

  return (
    <Image
      src={myIcon}
      alt="custom-icon"
      width={numericSize}
      height={numericSize}
      style={{
        display: "inline-block",
        objectFit: "contain",
        ...style,
      }}
    />
  );
};
