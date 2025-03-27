import Image from "next/image";

import ChnamLogoImg from "@/images/chnam_logo.svg";

interface ChnamLogoProps {
  width: number;
  height: number;
}

export default function ChnamLogo({ width, height }: ChnamLogoProps) {
  return <Image src={ChnamLogoImg} alt="전남대학교 로고" width={width} height={height} />;
}
