import classNames from "classnames/bind";
import styles from "@/components/page/DepartmentInfo/DepartmentInfoAnnouncement/index.module.scss";
import Link from "next/link";
import { ROUTE } from "@/constants/routes";

const cn = classNames.bind(styles);

export default function DepartmentInfoAnnouncement() {
  const announcementId = 1;

  return (
    <div className={cn("container")}>
      <p className={cn("title")}>공지사항</p>
      <div className={cn("announcementContainer")}>
        <Link
          href={`${ROUTE.DEPARTMENT_INFO_ANNOUNCEMENT}/${announcementId}`}
          className={cn("announcement")}
        >{`제목아아아아ㅏ아앙아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅇㅇㅇㅇㅇㅇㅇㅇ`}</Link>
      </div>
      <div className={cn("moreLinkContainer")}>
        <Link href={ROUTE.DEPARTMENT_INFO_ANNOUNCEMENT_LIST} className={cn("moreLink")}>
          더보기
        </Link>
      </div>
    </div>
  );
}
