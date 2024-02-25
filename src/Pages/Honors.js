import React from "react";
import Honor from '../Components/Honor';
import { honorsDetails } from "../Details";

function Honors() {
  
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Honors
        </h1>
        {React.Children.toArray(
          honorsDetails.map(({ Award, Description, Competition, HonorLink, Date, Type }) => (
            <Honor
              award={Award}
              description={Description}
              competition={Competition}
              honorlink={HonorLink}
              date={Date}
              type={Type}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default Honors;
