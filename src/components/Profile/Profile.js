import { Typography } from "@material-ui/core";
import React from "react";
import CustomTimeline, { CustomTimelineSeparator } from "../Timeline/Timeline";
import resumeData from "../../utils/resumeData";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import "./Profile.css";
import displaypic from "../../assets/images/1586461698118.gif";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import GetAppIcon from "@material-ui/icons/GetApp";
import CustomButton from "../Button/Button";

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}:</span>{" "}
          <a href={link} target="_blank">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}:</span> {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>

      <figure className="profile_image">
        <img src={displaypic} alt="text" />
      </figure>

      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineOutlinedIcon />}>
          <CustomTimelineItem title="Name" text={resumeData.name} />
          <CustomTimelineItem title="Title" text={resumeData.title} />
          <CustomTimelineItem title="Email" text={resumeData.email} />

          {Object.keys(resumeData.socials).map((key) => (
            <CustomTimelineItem
              title={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            />
          ))}
        </CustomTimeline>
        <div className="button_container" style={{display: 'flex'}}>
            <CustomButton text={"Download Cv"} icon={<GetAppIcon />} />
        </div>
      </div>
    </div>
  );
};
// tonderai-portfolio\src\assets\images\display_image.jpg
export default Profile;
