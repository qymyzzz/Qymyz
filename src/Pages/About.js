import React from "react";
import { personalDetails } from "../Details";
import resume from "../assets/Sagyn's CV.pdf";

function About() {
  const createMarkup = () => ({ __html: personalDetails.about });
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <img className="float-right ml-10 w-1/4" src={personalDetails.otherimg} />
        <p 
          className="text-content text-justify py-8 text-lg"
          dangerouslySetInnerHTML={createMarkup()} 
        >
            
        </p>
        <p className="text-content text-justify text-lg">Here is my <a href={resume} target="_blank" class="link" rel="noopener noreferrer">resume</a>.</p>
      </section>
    </main>
  );
}

export default About;
