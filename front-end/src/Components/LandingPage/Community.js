import React from "react";
import "./Community.scss";

export default function Community() {
  return (
    <div>
      <div className="community">
        <div className="community__image"></div>
        <div className="community__container">
          <div className="community__container__header">
            Supportive Community
          </div>
          <div className="community__container__body">
            Stay motivated and engaged with a little help
            <div>from a supportive community of other members.</div>
          </div>
          <div className="community__container__member">
            <a href="/welcome">Become a Member </a>
          </div>
        </div>
      </div>
    </div>
  );
}
