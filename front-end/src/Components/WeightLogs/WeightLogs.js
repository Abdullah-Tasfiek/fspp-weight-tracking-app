import "./WeightLogs.scss";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Logs from "./Logs";
import PaginationForWeightLogs from "./PaginationForWeightLogs";
const API = process.env.REACT_APP_API_URL;

function WeightLogs() {
  const [weightLogs, setWeightLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [logsPerPage, setLogsPerPage] = useState(7);

  useEffect(() => {
    const fetchLogs = async () => {
      setLoading(true);
      const res = await axios.get(`${API}/myweight/logs`);
      setWeightLogs(res.data.payload.reverse());
      setLoading(false);
    };

    fetchLogs();
  }, []);

  //Get current logs
  const indexOfLastLog = currentPage * logsPerPage;
  const indexOfFirstLog = indexOfLastLog - logsPerPage;
  const currentLogs = weightLogs.slice(indexOfFirstLog, indexOfLastLog);

  //Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2 className="logsTitle">Weight Logs</h2>
      <div className="subHeadings__background">
        <div className="subHeadings__container">
          <span className="column1">Date</span>
          <span className="column2">Weight</span>
        </div>
      </div>
      <div className="weightLogsBackground">
        <div className="weightLogsBackground__container">
          <Logs weightLogs={currentLogs} loading={loading} />
        </div>
      </div>
      <PaginationForWeightLogs
        logsPerPage={logsPerPage}
        totalLogs={weightLogs.length}
        paginate={paginate}
      />
    </div>
  );
}

export default WeightLogs;
