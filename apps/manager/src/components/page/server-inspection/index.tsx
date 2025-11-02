import Logo from "@/components/common/Logo";
import Txt from "@repo/ui/design-system/Txt/index";
import classNames from "classnames/bind";
import styles from "./index.module.scss";

const cn = classNames.bind(styles);

export default function ServerInspectionPage() {
  return (
    <div className={cn("container")}>
      <div className={cn("content")}>
        {/* 로고 섹션 */}
        <div className={cn("logoSection")}>
          <Logo width={256} height={118} />
        </div>

        {/* 메인 메시지 섹션 */}
        <div className={cn("messageSection")}>
          <Txt size="h1" weight="semiBold">
            서버 점검 중입니다
          </Txt>
          <Txt size="small" className={cn("description")}>
            더 나은 서비스를 위해 시스템 점검을 진행하고 있습니다.
            <br />
            잠시만 기다려 주세요.
          </Txt>
        </div>

        {/* 로딩 애니메이션 섹션 */}
        <div className={cn("loadingSection")}>
          <div className={cn("spinner")} />
          <Txt size="small" weight="medium" color="primary">
            점검 진행 중...
          </Txt>
        </div>

        {/* 문의 안내 섹션 */}
        <div className={cn("contactSection")}>
          <Txt size="small" className={cn("contactText")}>
            문의사항이 있으시면 관리자에게 연락해 주세요.
          </Txt>
          <div className={cn("contactInfo")}>
            <Txt size="small" weight="medium" className={cn("contactLabel")}>
              관리자 연락처:
            </Txt>
            <Txt size="small" color="primary" weight="medium" className={cn("contactValue")}>
              010-0000-0000
            </Txt>
          </div>
        </div>
      </div>
    </div>
  );
}
