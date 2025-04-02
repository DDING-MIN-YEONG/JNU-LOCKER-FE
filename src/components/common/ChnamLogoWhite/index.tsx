import Image from "next/image";

import ChnamLogoWhiteImg from "@/images/chnam_log_white.svg";

interface ChnamLogoProps {
  width: number;
  height: number;
}

export default function ChnamLogoWhite({ width, height }: ChnamLogoProps) {
  return <Image src={ChnamLogoWhiteImg} alt="전남대학교 로고" width={width} height={height} />;
}
