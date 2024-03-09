import { useState } from 'react';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (newPage: number) => void;
}

function Pagination({
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1) {
      newPage = 1;
    } else if (newPage > totalPages) {
      newPage = totalPages;
    }

    setCurrentPage(newPage);
    onPageChange(newPage);
  };

  const calculatePageRange = (
    currentPage: number,
    totalPages: number,
    pageRange: number
  ): { startPage: number; endPage: number } => {
    let startPage = Math.max(1, currentPage - Math.floor(pageRange / 2));
    let endPage = Math.min(totalPages, startPage + pageRange - 1);

    if (totalPages - endPage < Math.floor(pageRange / 2)) {
      startPage = Math.max(
        1,
        startPage - (Math.floor(pageRange / 2) - (totalPages - endPage))
      );
    }

    return { startPage, endPage };
  };

  const renderPageNumbers = () => {
    const pageNumbers: React.ReactNode[] = [];

    if (totalPages <= 5) {
      const pageRange = 10;
      const { startPage, endPage } = calculatePageRange(
        currentPage,
        totalPages,
        pageRange
      );

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <li
            key={i + Math.random()}
            className={i === currentPage ? 'active' : ''}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </li>
        );
      }
    } else {
      // Display the first two pages
      pageNumbers.push(
        <li
          key={1 + Math.random()}
          className={1 === currentPage ? 'active' : ''}
          onClick={() => handlePageChange(1)}
        >
          1
        </li>
      );

      pageNumbers.push(
        <li
          key={2 + Math.random()}
          className={2 === currentPage ? 'active' : ''}
          onClick={() => handlePageChange(2)}
        >
          2
        </li>
      );

      // Display ellipsis if not on the first two pages
      if (currentPage > 2) {
        pageNumbers.push(
          <li key="startEllipsis" className="ellipsis">
            ...
          </li>
        );
      }

      // Display current and surrounding pages
      for (
        let i = Math.max(currentPage - 1, 3);
        i <= Math.min(currentPage + 1, totalPages - 1);
        i++
      ) {
        pageNumbers.push(
          <li
            key={i + Math.random()}
            className={i === currentPage ? 'active' : ''}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </li>
        );
      }

      // Display ellipsis if not on the last two pages
      if (currentPage < totalPages - 1) {
        pageNumbers.push(
          <li key="endEllipsis" className="ellipsis">
            ...
          </li>
        );
      }

      // Display the last two pages
      pageNumbers.push(
        <li
          key={totalPages - 1 + Math.random()}
          className={totalPages - 1 === currentPage ? 'active' : ''}
          onClick={() => handlePageChange(totalPages - 1)}
        >
          {totalPages - 1}
        </li>
      );

      pageNumbers.push(
        <li
          key={totalPages + Math.random()}
          className={totalPages === currentPage ? 'active' : ''}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        &laquo; Prev
      </button>
      <ul>{renderPageNumbers()}</ul>
      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next &raquo;
      </button>
    </div>
  );
}

export default Pagination;
