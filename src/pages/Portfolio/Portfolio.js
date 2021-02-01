import React from "react";
import "./Portfolio.css";
import { Typography, Grid } from "@material-ui/core";
import galaxy_brain from "../../assets/images/galaxy_brain.gif";
import google_project from "../../assets/images/google_project.png";
import ihabit from "../../assets/images/ihabit.gif";

const Portfolio = () => {
  return (
    <Grid container className="section pb_45 pt_45">
      {/* Title -  */}
      <Grid item className="section_title mb_30">
        <span></span>
        <h6 className="section_title_text">Portfolio</h6>
      </Grid>
      <Grid item xs={12}>
        <div class="portfolio_row">
          <div class="portfolio_column">
            <img
              class="portfolio_img"
              src={galaxy_brain}
              alt="Avatar"
              width="400"
              height="auto"
            />
            <div class="container">
              <Typography className="aboutme_text"><a href="https://github.com/Tempestx4/Galaxy-Brain">Galaxy Brain - 4 player Quiz game</a></Typography>
            </div>
          </div>

          <div class="portfolio_column">
            <img
              class="portfolio_img"
              src={google_project}
              alt="Avatar"
              width="400"
              height="auto"
            />
            <div class="container">
              <Typography className="aboutme_text"><a href="https://github.com/Tempestx4/iHabit-project">ihabit - Habit tracker app</a></Typography>
            </div>
          </div>
          <div class="portfolio_column">
            <img
              class="portfolio_img"
              src={ihabit}
              alt="Avatar"
              width="400"
              height="auto"
            />
            <div class="container">
              <Typography className="aboutme_text"><a href="https://github.com/Tempestx4/Google-API-Project---Tonderai-Dragos">Clone of Google search</a></Typography>
            </div>
          </div>
        </div>
      </Grid>
      {/* Tabs */}
    </Grid>
  );
};

export default Portfolio;
