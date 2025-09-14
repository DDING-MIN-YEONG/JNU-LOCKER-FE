import Image from "next/image";

import White_Logo_Img from "@/images/white_logo.svg";

interface WhiteLogoProps {
  width: number;
  height: number;
}

export default function WhiteLogo({ width, height }: WhiteLogoProps) {
  return <Image src={White_Logo_Img} alt="전남대학교 로고" width={width} height={height} />;
}
