import Image from "next/image";

import Logo_Img from "@/icons/logo.svg";

interface WhiteLogoProps {
  width: number;
  height: number;
}

export default function StudentLogo({ width, height }: WhiteLogoProps) {
  return <Image src={Logo_Img} alt="전남대학교 로고" width={width} height={height} />;
}
