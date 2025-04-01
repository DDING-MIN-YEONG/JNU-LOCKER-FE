import classNames from "classnames/bind";
import styles from "@/components/page/DepartmentInfo/DepartmentInfoAnnouncement/index.module.scss";
import Link from "next/link";
import { ROUTE } from "@/constants/routes";
import Txt from "@/components/design-system/Txt";

const cn = classNames.bind(styles);

export default function DepartmentInfoAnnouncement() {
  const announcementId = 1;

  return (
    <div className={cn("container")}>
      <Txt color="secondary" weight="bold" size="h3">
        공지사항
      </Txt>
      <div className={cn("announcementContainer")}>
        <Link href={`${ROUTE.DEPARTMENT_INFO_ANNOUNCEMENT}/${announcementId}`}>
          <Txt
            className={cn("announcement")}
            size="h4"
          >{`제목아아아아ㅏ아앙아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅇㅇㅇㅇㅇㅇㅇㅇ`}</Txt>
        </Link>
      </div>
      <div className={cn("moreLinkContainer")}>
        <Link href={ROUTE.DEPARTMENT_INFO_ANNOUNCEMENT_LIST}>
          <Txt size="tiny" className={cn("moreLink")}>
            더보기
          </Txt>
        </Link>
      </div>
    </div>
  );
}
