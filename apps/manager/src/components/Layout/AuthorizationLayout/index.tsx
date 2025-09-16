import WhiteLogo from "@/components/common/WhiteLogo";
import Txt from "@repo/ui/design-system/Txt/index";
import classNames from "classnames/bind";
import { ReactNode } from "react";
import styles from "./index.module.scss";

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
            사물함 관리 서비스
          </Txt>
        </div>
      </div>
      {children}
    </div>
  );
}
