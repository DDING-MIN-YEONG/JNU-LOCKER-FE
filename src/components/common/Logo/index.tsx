import Image from "next/image";

import Logo_Img from "@/images/logo.svg";

interface LogoProps {
  width: number;
  height: number;
}

export default function Logo({ width, height }: LogoProps) {
  return <Image src={Logo_Img} alt="전남대학교 로고" width={width} height={height} />;
}
