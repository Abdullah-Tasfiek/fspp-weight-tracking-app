import React from "react";
import "./PaginationForWeightLogs.scss";
import { useState } from "react";

function PaginationForWeightLogs({ logsPerPage, totalLogs, paginate }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeRange, setActiveRange] = useState([1, 9]);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalLogs / logsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (number) => {
    setCurrentPage(number);
    paginate(number);
  };

  const handleNext = () => {
    if (activeRange[1] < pageNumbers.length) {
      setActiveRange([activeRange[0] + 9, activeRange[1] + 9]);
    }
  };

  const handlePrev = () => {
    if (activeRange[0] > 1) {
      setActiveRange([activeRange[0] - 9, activeRange[1] - 9]);
    }
  };

  return (
    <div className="paginationBackground">
      <div className="paginationBackground__container">
        {activeRange[0] > 1 && (
          <span
            className="paginationBackground__container__number"
            onClick={handlePrev}
          >
            <a>{`<`}</a>
          </span>
        )}
        {pageNumbers.slice(activeRange[0] - 1, activeRange[1]).map((number) => (
          <span
            key={number}
            className={`paginationBackground__container__number ${
              currentPage === number ? "active" : ""
            }`}
            onClick={() => handleClick(number)}
          >
            <a className="pageNumber">{number}</a>
          </span>
        ))}
        {activeRange[1] < pageNumbers.length && (
          <span
            className="paginationBackground__container__number"
            onClick={handleNext}
          >
            <a>{`>`}</a>
          </span>
        )}
      </div>
    </div>
  );
}

export default PaginationForWeightLogs;
