

import React, { useRef, useEffect } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

/*
TODO:
- Add portion for the redbull case comp stuff
- Add a more in depth for the Kickit stuff and the side business work
- Add portion for the ICPC programming team
- Add a portion for photography
- Add a little game
*/

export const About = () => {
  // reference for scrolling container
  const scrollRef = useRef(null);
  // duplicates the skills array to create a seamless loop
  const animatedSkills = [...skills, ...skills];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    let maxScroll = scrollContainer.scrollWidth / 2;
    let scrollStep = 0.5;

    // Function to scale items based on distance to container's center
    const scaleSkillItems = () => {
      const containerCenter = scrollContainer.clientWidth / 2;
      const containerRect = scrollContainer.getBoundingClientRect();
      const skillItems = scrollContainer.querySelectorAll(".skill-item");

      skillItems.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenter =
          itemRect.left + itemRect.width / 2 - containerRect.left;

        // distance from the center of the container
        const distance = Math.abs(containerCenter - itemCenter);
        const maxDistance = containerCenter;

        // scale items from 1.0 up to ~1.5 at the center
        let scale = 1 + 0.5 * (1 - distance / maxDistance);
        if (scale < 1) scale = 1;

        // smoothly apply transform
        item.style.transform = `scale(${scale})`;
        item.style.transition = "transform 0.5s ease-out";
      });
    };

    // continuously scroll + re-scale
    const scrollInterval = setInterval(() => {
      scrollAmount += scrollStep;
      if (scrollAmount >= maxScroll) {
        // resets to start for seamless loop
        scrollAmount = 0;
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft = scrollAmount;
      }

      // update scale
      scaleSkillItems();
    }, 10); // adjust speed as desired

    // initial scale on mount
    scaleSkillItems();

    // cleanup on unmount
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        {/* ===== Intro Row ===== */}
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me...</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {/* ===== About Box ===== */}
        <Row className="sec_sp">
          <Col lg="12">
            <div
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                borderRadius: "20px",
                boxShadow:
                  "0 12px 24px rgba(0, 0, 0, 0.2), 0 30px 40px rgba(0, 0, 0, 0.1)",
                display: "flex",
                overflow: "hidden",      // so the image won't exceed the rounded corners
                alignItems: "stretch",   // makes both sides the same height
                minHeight: "450px",      // at least 450px tall, but can grow taller if needed
              }}
            >
              {/* Left Side: Text (3/5 width) */}
              <div style={{ flex: 3, padding: "2rem" }}>
                <h3 className="color_sec py-4">{dataabout.title}</h3>
                {/* Optional horizontal rule */}
                <Row className="mb-3 mt-1 pt-md-1">
                  <Col lg="8">
                    <hr className="t_border my-2 ml-0 text-left" />
                  </Col>
                </Row>

                <p>{dataabout.aboutme}</p>
                <p style={{ marginTop: "4px" }}>{dataabout.secondaryText}</p>
                <p style={{ marginTop: "4px" }}>{dataabout.finalText}</p>
              </div>

              {/* Right Side: Image (2/5 width) fills entire container side */}
              <div style={{ flex: 2 }}>
                <img
                  src="/images/Bridget4.jpg"
                  alt="About Me"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // ensures the image fully covers this container side
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>

        {/* ===== Work Experience ===== */}
        <Row>
          <Col lg="5">
            <h3 className="color_sec py-4">Work Experience...</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => (
                  <tr key={i}>
                    <th scope="row">{data.jobtitle}</th>
                    <td>{data.where}</td>
                    <td>{data.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>

        <Row className="mb-1 mt-3 pt-md-3">
          <Col lg="8">
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {/* ====== Skills Section (Full Width) ====== */}
        <Row
          className="sec_sp"
          style={{
            // Force this Row to be full width:
            position: "relative",
            left: "50%",
            right: "50%",
            marginLeft: "-50vw",
            marginRight: "-50vw",
            width: "100vw",
            // If your background is dark, you can set a background color here:
            // background: "var(--bg-color)" or "#ccc"
          }}
        >
          <Col lg="12" style={{ padding: 0 }}>
            <h3 className="color_sec py-4" style={{ marginLeft: "10rem" }}>
              Skills and technical proficiencies...
            </h3>
            


            <div
              className="skills-scroll-container"
              ref={scrollRef}
              style={{
                overflowX: "scroll",
                overflowY: "hidden",
                whiteSpace: "nowrap",
                padding: "2rem 0",
                marginTop: "0.2px",
                // match the row width
                width: "100vw",
                boxSizing: "border-box",
              }}
            >
              <div
                className="skills-container"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6rem",
                }}
              >
                {animatedSkills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="skill-image"
                    />
                    <div className="skill-name">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <h3 className="color_sec">Involvement...</h3>
            <hr className="t_border ml-0 text-left" />
          </Col>
        </Row>
        {services.map((data, i) => (
          <Row className="project-row" key={i}>
            <Col lg="5" md="5" sm="12">
              <img
                src={data.image}
                alt={data.title}
                className="project-image"
              />
            </Col>
            <Col lg="7" md="7" sm="12" className="d-flex align-items-center">
              <div className="project-text">
                <h5 className="service__title">{data.title}</h5>
                <p className="service_desc">{data.description}</p>
                {/* conditionally render the "Learn More" button if link is provided */}
                {data.link && (
                  <a
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Learn More
                  </a>
                )}
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </HelmetProvider>
  );
};
