/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/photo3.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Product Designing at Kraftr",
    description:
      "At Kraftr, my creative endeavors span the spectrum of product design and the enchanting realm of UI/UX. I weave visual tales through illustrations that dance across social media platforms and advertisements, where every stroke and pixel tells a story. In the captivating world of marketing, I wear multiple hats, seamlessly blending creativity and strategy to bring ideas to life.",
  },
  {
    title: "Working Comittee Member at Enactus",
    description:
      "Fueled by my fervor for social entrepreneurship, I enthusiastically contribute to the vibrant Enactus club on campus. Within this dynamic community, I engage in crafting compelling reports and curating visually stunning designs to elevate their social media presence.",
  },
  {
    title: "Member of ACM-W",
    description:
      "Immersed in the captivating realms of coding and web development, my passion has seamlessly woven me into the vibrant fabric of the ACM-W club. Here, amidst the digital symphony, I not only hone my skills but also dance with newfound opportunities that gracefully waltz into my realm.",
  },
  {
    title: "Speaker at Blank 101",
    description:
      "Stepping onto the Blank 101 stage not only ignites my confidence but also offers a dynamic platform to articulate and share my perspectives.",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
