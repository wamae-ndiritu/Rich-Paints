import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./projects.css";
import TitleBar from "../TitleBar";
import { projects, completedProjects } from "./data/projectData";
import Loading from "../Loading";
import EastIcon from "@mui/icons-material/East";

const Projects = () => {
  const location = useLocation();

  const [showCompleted, setShowCompleted] = useState(true);
  const [showOngoing, setShowOngoing] = useState(false);
  const [items, setItems] = useState([]);
  const [isProjectPage, setIsProjectPage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleToggle = () => {
    setShowCompleted(!showCompleted);
    setShowOngoing(!showOngoing);
  };

  useEffect(() => {
    if (location.pathname === "/projects") {
      setIsProjectPage(true);
    }
  }, [location]);

  useEffect(() => {
    let newProjects = [];
    if (showCompleted) {
      newProjects = projects.filter(
        (project) => project.category === "completed"
      );
    } else if (showOngoing) {
      newProjects = projects.filter(
        (project) => project.category === "ongoing"
      );
    }
    setItems(newProjects);
  }, [showCompleted, showOngoing]);

  return (
    <div className="container projects-cont">
      <TitleBar>Our Projects</TitleBar>
      <div className="project-tabs-cont">
        <div
          className={showCompleted ? "project-tab tab-active" : "project-tab"}
          onClick={handleToggle}
        >
          <h6>Completed</h6>
        </div>
        <div
          className={showOngoing ? "project-tab tab-active" : "project-tab"}
          onClick={handleToggle}
        >
          <h6>On-Going</h6>
        </div>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="row d-flex justify-content-center">
          {showCompleted &&
            !isProjectPage &&
            completedProjects.map((project) => {
              const { _id, before, after } = project;
              return (
                <div className="col-lg-6 col-padding d-flex col-md-6" key={_id}>
                  <div className="col-6 col-padding caption-cont">
                    <h6 className="h6 project-caption">Before</h6>
                    <img src={before} alt="..." />
                  </div>
                  <div className="col-6 col-padding caption-cont">
                    <h6 className="h6 project-caption">After</h6>
                    <img src={after} alt="..." />
                  </div>
                </div>
              );
            })}
          {items.map((project, index) => {
            const { _id, image, category } = project;
            return (
              <div
                className="col-lg-3 col-md-4 col-6 col-padding caption-cont"
                key={_id}
              >
                <h6 className="h6 project-caption">{category}</h6>
                <img src={image} alt="..." />
              </div>
            );
          })}
        </div>
      )}
      {!isProjectPage && (
        <Link to="/projects" className="btn-more" style={{ width: "250px" }}>
          <h6>View More Projects</h6>
          <div className="more-icon">
            <EastIcon />
          </div>
        </Link>
      )}
    </div>
  );
};

export default Projects;
