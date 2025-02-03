

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

const InvolvementData = {
  title: "Dalhousie Society Of Undergraduate Planners",
  textOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor erat eu vehicula bibendum. Integer ut lacus tristique, porttitor turpis vitae, vehicula ex. Curabitur pharetra id sem vel sodales. Praesent at ultricies orci, sed lacinia nisi. Phasellus vitae purus nec enim feugiat vehicula. Pellentesque purus enim, lacinia vitae vehicula et, gravida id neque. Aliquam pretium elit eget rhoncus tincidunt. Quisque sit amet gravida mi. Sed vehicula hendrerit ante nec faucibus. Nulla vel arcu mattis, accumsan nunc accumsan, posuere eros.",
  textTwo: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla sem eros, rutrum ut malesuada porttitor, interdum nec felis. Integer tempor dui purus, vel accumsan felis molestie elementum. Integer at nunc lacus. Nam ut nisi varius massa vestibulum molestie a non tellus. Aliquam id metus condimentum, blandit justo non, sollicitudin magna. Morbi ligula nunc, blandit quis elit at, cursus mattis eros. Fusce eu convallis tellus, id pretium nisi. Ut volutpat convallis est eget ultrices. Duis in felis vel tortor posuere finibus. Donec sed orci eu nisl maximus pulvinar. Etiam elementum finibus metus, vitae porttitor mauris tempor eu.",
  textThree: "Morbi pellentesque eros vel mauris venenatis blandit. Donec ultricies, sem non lacinia molestie, eros magna convallis metus, vitae molestie diam augue at orci. Nulla facilisi. Etiam sollicitudin vel justo in cursus. Nunc ornare pellentesque justo, id pharetra neque pharetra vitae. Cras venenatis, lectus ac semper interdum, tortor massa tincidunt ligula, sit amet pharetra nibh tellus sit amet lectus. Suspendisse feugiat semper lacus non lobortis. Nulla facilisi. Suspendisse molestie vel eros hendrerit luctus. Suspendisse at leo in velit ornare auctor et at erat."
};

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

    // function to scale items based on distance to container's center
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
             <h1 className="display-4 mb-4">Work Experience...</h1>
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
            <h3 className="display-6 py-1" style={{ marginLeft: "10rem" }}>
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
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Involvement...</h1>
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
                overflow: "hidden",      // keeps the corners rounded
                padding: "20px",         // padding inside the box
                position: "relative",    // positions the container relatively
                minHeight: "450px",      // ensures a minimum height
                marginBottom: "50px",
                // set for now ask bridget about design choices
              }}
            >
              {/* Image positioned top-right */}
              <div style={{ float: "right", margin: "10px 0 10px 20px" }}>
                <img
                  src="/images/Group3.jpg"
                  alt="About Me"
                  style={{
                    width: "500px",       // fixed width for the image
                    height: "auto",       // auto height to maintain aspect ratio
                    borderRadius: "12px",  // rounded corners for the image
                    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2), 0 30px 40px rgba(0, 0, 0, 0.1)"
                  }}
                />
              </div>
              
              {/* Text Content */}
              <h3 className="color_sec py-4">{InvolvementData.title}</h3>
              <Row className="mb-1 mt-3 pt-md-3">
              <Col lg="8">
                <hr className="t_border my-4 ml-0 text-left" />
              </Col>
            </Row>
              <p>{dataabout.aboutme}</p>
              <p style={{ marginTop: "4px" }}>{InvolvementData.textTwo}</p>
              <p style={{ marginTop: "4px" }}>{InvolvementData.textThree}</p>
            </div>
          </Col>
        </Row>



      </Container>
    </HelmetProvider>
  );
};
