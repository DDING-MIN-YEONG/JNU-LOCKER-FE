import classNames from "classnames/bind";

import styles from "./index.module.scss";

const cn = classNames.bind(styles);

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  pagesPerGroup: number;
  setPage: (page: number) => void;
}

export default function Pagination({ currentPage, totalItems, itemsPerPage, pagesPerGroup, setPage }: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentGroup = Math.ceil(currentPage / pagesPerGroup);
  const startPage = (currentGroup - 1) * pagesPerGroup + 1;
  const endPage = Math.min(currentGroup * pagesPerGroup, totalPages);

  const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  const goToPreviousGroup = () => {
    const previousGroupFirstPage = startPage - pagesPerGroup;
    if (previousGroupFirstPage >= 1) setPage(previousGroupFirstPage);
  };

  const goToNextGroup = () => {
    const nextGroupFirstPage = endPage + 1;
    if (nextGroupFirstPage <= totalPages) setPage(nextGroupFirstPage);
  };

  return (
    <div className={cn("pagination")}>
      {totalPages > pagesPerGroup && (
        <button className={cn("button")} onClick={goToPreviousGroup} disabled={startPage <= 1}>
          {"<"}
        </button>
      )}
      {pages.map((page) => (
        <button key={page} onClick={() => setPage(page)} className={cn("button", { active: page === currentPage })}>
          {page}
        </button>
      ))}
      {totalPages > pagesPerGroup && (
        <button className={cn("button")} onClick={goToNextGroup} disabled={endPage >= totalPages}>
          {">"}
        </button>
      )}
    </div>
  );
}
