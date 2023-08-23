import React from "react";
import { CgFacebook } from "react-icons/cg";
import { RxInstagramLogo } from "react-icons/rx";
const FollowUS = () => {
  return (
    <div className="follow-us">
      <span className="icon">
        <CgFacebook />
      </span>
      <span className="icon">
        <RxInstagramLogo />
      </span>
      <div className="bar"></div>
      <div className="text">
        <p>SUIVEZ-NOUS</p>
      </div>
    </div>
  );
};

export default FollowUS;
