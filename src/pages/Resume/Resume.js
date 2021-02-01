import React from "react";
import { Typography, Grid } from "@material-ui/core";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../../components/Timeline/Timeline";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import TimelineContent from "@material-ui/lab/TimelineContent";
import nodejsIcon from "../../assets/images/nodejs-icon.svg";
import pythonIcon from "../../assets/images/python-icon.svg";
import html5Icon from "../../assets/images/html5-icon.svg";
import css3Icon from "../../assets/images/css3-icon.svg";
import reduxIcon from "../../assets/images/redux-icon.svg";
import githubIcon from "../../assets/images/github-icon.svg";
import postgresqlIcon from "../../assets/images/postgresql-icon.svg";
import jsIcon from "../../assets/images/js-icon.svg";
import reactjsIcon from "../../assets/images/reactjs-icon.svg";
import mongoIcon from "../../assets/images/mongodb-icon.svg";
import djangoIcon from "../../assets/images/djangoproject-icon.svg";
import flaskIcon from "../../assets/images/python_flask-icon.svg";
import TextField from "@material-ui/core/TextField";
import CustomButton from "../../components/Button/Button";

import resumeData from "../../utils/resumeData";
import "./Resume.css";
import TimelineItem from "@material-ui/lab/TimelineItem";

const Resume = () => {
  return (
    <>
      {/* About Me */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="aboutme_text">
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>

      {/* Education and Experience */}
      <Grid container className="section">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">Resume</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container className="resume_timeline">
            {/* Experience */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Work Experience" icon={<WorkIcon />}>
                {resumeData.experience.map((experience) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {experience.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {experience.date}
                      </Typography>
                      <Typography variant="body2" className="timeline_desc">
                        {experience.desc}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>

            {/* Education */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Education" icon={<SchoolIcon />}>
                {resumeData.education.map((education) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {education.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {education.date}
                      </Typography>
                      <Typography variant="body2" className="timeline_desc">
                        {education.desc}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Skills */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">Skills</h6>
        </Grid>
        <Grid item xs={12}>
          <div class="row">
            <div class="column">
              <img class="column_img" src={html5Icon} alt="html5_Icon" />
            </div>
            <div class="column">
              <img class="column_img" src={css3Icon} alt="css3_Icon" />
            </div>
            <div class="column">
              <img class="column_img" src={githubIcon} alt="github_Icon" />
            </div>
            <div class="column">
              <img class="column_img" src={jsIcon} alt="js_Icon" />
            </div>
            <div class="column">
              <img class="column_img" src={nodejsIcon} alt="nodejs_Icon" />
            </div>
            <div class="column">
              <img class="column_img" src={reactjsIcon} alt="react_Icon" />
            </div>
            <div class="column">
              <img class="column_img" src={reduxIcon} alt="redux_Icon" />
            </div>
            <div class="column">
              <img class="column_img" src={mongoIcon} alt="mongo_Icon" />
            </div>
            <div class="column">
              <img
                class="column_img"
                src={postgresqlIcon}
                alt="postgresql_Icon"
              />
            </div>
            <div class="column">
              <img class="column_img" src={pythonIcon} alt="python_Icon" />
            </div>
            <div class="column">
              <img class="column_img" src={flaskIcon} alt="flask_Icon" />
            </div>
            <div class="column">
              <img class="column_img" src={djangoIcon} alt="django_Icon" />
            </div>
          </div>
        </Grid>
      </Grid>

      {/* Contact */}
      <Grid container spacing={5} className="section pt_45 pb_45">
        {/* Contact Form */}
        <Grid item xs={12} lg={7}>
          <Grid container>
            <Grid item className="section_title mb_30">
              <span></span>
              <h6 className="section_title_text">Contact Form</h6>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name="name" label="Name" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name="email" label="email" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="message"
                    label="message"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomButton text="Submit" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} lg={5}>
          <Grid container>
            <Grid item className="section_title mb_30">
              <span></span>
              <h6 className="section_title_text">Contact Information</h6>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item>
                <Typography className="contactInfo_item">
                  <span>Email Address: </span> {resumeData.email}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container className="contact_socialsContainer">
              {Object.keys(resumeData.socials).map((key) => (
                <Grid item className="contactInfo_social">
                  <a href={resumeData.socials[key].link}>
                    {resumeData.socials[key].icon}
                  </a>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;
