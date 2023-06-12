import React from "react";
import "./PaginationForWeightLogs.scss"

function PaginationForWeightLogs({ logsPerPage, totalLogs, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalLogs / logsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="paginationBackground">
      <div className="paginationBackground__container">
        {pageNumbers.map((number) => (
          <span key={number} className="paginationBackground__container__number">
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </span>
        ))}
      </div>
    </div>
  );
}

export default PaginationForWeightLogs;
