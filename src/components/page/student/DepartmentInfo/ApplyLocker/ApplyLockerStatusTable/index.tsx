import classNames from "classnames/bind";
import styles from "./index.module.scss";

const cn = classNames.bind(styles);

export default function ApplyLockerStatusTable() {
  const status = [
    {
      floor: 1,
      lockerName: "A-101",
      department: "컴퓨터정보통신공학과",
      lockerId: 1,
    },
    {
      floor: 2,
      lockerName: "B202",
      department: "기계공학과",
      lockerId: 2,
    },
    {
      floor: 3,
      lockerName: "C303",
      department: "전기전자공학과",
      lockerId: 3,
    },
  ];

  return (
    <table className={cn("container")}>
      <thead>
        <tr className={cn("header")}>
          <th className={cn("th")}>층수</th>
          <th className={cn("th")}>사물함 번호</th>
          <th className={cn("th")}>학과</th>
          <th className={cn("th")}>삭제</th>
        </tr>
      </thead>
      <tbody>
        {status.map(({ department, floor, lockerName, lockerId }) => (
          <tr key={lockerId}>
            <td className={cn("td")}>{floor}층</td>
            <td className={cn("td")}>{lockerName}</td>
            <td className={cn("td")}>{department}</td>
            <td className={cn("deleteBtnContainer")}>
              <button className={cn("deleteBtn")}>삭제</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
