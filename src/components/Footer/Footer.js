import React from "react";
import "./Footer.css";
import { Typography } from "@material-ui/core";
import resumeData from "../../utils/resumeData";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography className="footer_name">{resumeData.name}</Typography>
      </div>
      <div className="footer_left">
        <Typography className="footer_copyright">
          Designed and Developed by{" "}
          <a
            href="https://www.linkedin.com/in/tonderai-mavindidze-783476168/"
            target="_blank"
          >
            Tonderai Mavindidze.
          </a>
          <br />
          Clone idea from{" "}
          <a href="https://themeforest.net/user/tavonline" target="_blank">
            Tavonline.
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
