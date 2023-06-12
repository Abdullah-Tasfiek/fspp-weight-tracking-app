import React from "react";
import "./Logs.scss";

function Logs({ weightLogs, loading }) {
  if (loading) {
    return <h2>Loading... </h2>;
  }

  return (
    <div className="logsBackground">
      <div className="logsBackground__dates">
        {weightLogs.map((log) => (
          <div className="logsBackground__dates__item" key={log.id}>
            {log.date}
          </div>
        ))}
      </div>
      <div className="logsBackground__weights">
        {weightLogs.map((log) => (
          <div className="logsBackground__weights__item"key={log.id}>
            {log.current_weight} lbs
          </div>
        ))}
      </div>
    </div>
  );
}

export default Logs;
