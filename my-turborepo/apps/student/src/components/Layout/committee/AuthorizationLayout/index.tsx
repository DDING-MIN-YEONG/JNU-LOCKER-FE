import classNames from "classnames/bind";
import styles from "./index.module.scss";
import { ReactNode } from "react";
import Txt from "@/components/design-system/Txt";
import WhiteLogo from "@/components/common/WhiteLogo";

const cn = classNames.bind(styles);

interface AuthorizationLayoutProps {
  children: ReactNode;
}

export default function AuthorizationLayout({ children }: AuthorizationLayoutProps) {
  return (
    <div className={cn("container")}>
      <div className={cn("logoContainer")}>
        <WhiteLogo width={500} height={300} />
        <div className={cn("logoTextContainer")}>
          <Txt color="white" fontType="chnam" className={cn("title")}>
            전남대학교
          </Txt>
          <Txt color="white" className={cn("subTitle")}>
            사물함 신청 서비스
          </Txt>
        </div>
      </div>
      {children}
    </div>
  );
}
