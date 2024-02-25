import React from "react";
import Activity from "../Components/Activity";
import { academicDetails, foreignDetails, volunteerDetails } from "../Details";

function Activities() {

  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Foreign languages
        </h1>
        {React.Children.toArray(
          foreignDetails.map(({ Position, Company, Description, CompanyLink, Duration }) => (
            <Activity
              position={Position}
              company={Company}
              description={Description}
              companylink={CompanyLink}
              duration={Duration}
            />
          ))
        )}
      </section>
      <br></br>
      <br></br>
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Academic
        </h1>
        {React.Children.toArray(
          academicDetails.map(({ Position, Company, Description, CompanyLink, Duration }) => (
            <Activity
              position={Position}
              company={Company}
              description={Description}
              companylink={CompanyLink}
              duration={Duration}
            />
          ))
        )}
      </section>
      <br></br>
      <br></br>
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Volunteering
        </h1>
        {React.Children.toArray(
          volunteerDetails.map(({ Position, Company, Description, CompanyLink, Duration }) => (
            <Activity
              position={Position}
              company={Company}
              description={Description}
              companylink={CompanyLink}
              duration={Duration}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default Activities;
