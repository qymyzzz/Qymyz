// Enter all your detials in this file
// Profile Image
import profile from "./assets/profile.jpg";
// Porject Images
import Sagyn from "./assets/Sagyn_in_ISEF.jpg";
import projectImage1 from "./assets/projects/project1.jpg";

// Enter your Personal Details here
export const personalDetails = {
  name: "Sagyn Jumadildayev",
  tagline: 'Click <a href="/about" class="link">About</a> to learn more',
  img: profile,
  otherimg: Sagyn,
  about: `I'm a high school junior from Kazakhstan at  <a href="https://fmalmnis.vercel.app/en" class="link" target="_blank">Nazarbayev Intellectual School of Physics and Mathematics in Almaty</a>. 
  <br><br>During my sophomore year, I did research on L-tromino tilings, and further made it to the <a href="https://www.societyforscience.org/press-release/regeneron-isef-2023-special-awards-winners/#:~:text=MATH042%20%E2%80%94%20L%2DTromino%20Tilings%20for%20Portions%20of%20Square%20Lattice%0ASagyn%20Jumadildayev%2C%20Nazarbayev%20Intellectual%20School%20of%20Physics%20and%20Math%2C%20Almaty%2C%20Kazakhstan" class="link" target="_blank">ISEF special award</a>.
  <br><br>After that, I was accepted to <a href="https://incubator.nfactorial.school/" class="link" target="_blank">nFactorial Incubator</a>. There I created an AI tour guide website startup.`
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/sagynjumadildayev/",
  github: "https://github.com/sagyn-s",
  instagram: "https://www.instagram.com/qymyzz/",
};

// Enter your Activity Details here
export const foreignDetails = [
  {
    Position: "French language",
    Company: "Nazarbayev Intellectual School of Physics and Mathematics in Almaty",
    Description: "My current level of French is <b>B2</b>",
    CompanyLink: "https://fmalmnis.vercel.app/en",
    Duration: "Sep 2019 - Present",
  },
];

export const academicDetails = [
  {
    Position: "Research on L-tromino tilings",
    Company: "Institute of Mathematics and Mathematical Modeling",
    Description: `I conducted this research with my scientific advisor. It was awarded a <a href="https://www.societyforscience.org/press-release/regeneron-isef-2023-special-awards-winners/#:~:text=MATH042%20%E2%80%94%20L%2DTromino%20Tilings%20for%20Portions%20of%20Square%20Lattice%0ASagyn%20Jumadildayev%2C%20Nazarbayev%20Intellectual%20School%20of%20Physics%20and%20Math%2C%20Almaty%2C%20Kazakhstan" class="link" target="_blank">special award in ISEF</a>.`,
    CompanyLink: "https://math.kz/",
    Duration: "July 2022 - May 2023",
  },
  {
    Position: "Olympiad Programming",
    Company: "Nazarbayev Intellectual School of Physics and Mathematics in Almaty",
    Description: "Solve competitive programming problems and learn new algorithms. Participate in National and International Olympiads",
    CompanyLink: "https://fmalmnis.vercel.app/en",
    Duration: "Sep 2019 - Present",
  },
  {
    Position: "Student",
    Company: "Yandex Lyceum",
    Description: "Learned basics of Python in the first year. In the second year I studied SQL, CSS, HTML, Flask, Pygame, and PyQT",
    CompanyLink: "https://lyceum.yandex.ru/",
    Duration: "October 2019 - April 2021",
  },
  {
    Position: "Full-stack developer intern",
    Company: "nFactorial Incubator",
    Description: `In the span of 10 weeks, created an AI based tour guide website. It got more than 1000 visitors from all over the globe. You can read about it more <a href="/projects" class="link">here</a>. At the end, I got a chance to participate in the Final Demo Day as one of the top 20 best AI apps and got the best full-stack developer award.`,
    CompanyLink: "https://incubator.nfactorial.school/",
    Duration: "June 2023 - August 2023",
  },
  {
    Position: "Student",
    Company: `“Phystech.International” summer camp`,
    Description: `Had been learning Olympiad Mathematics and Physics in the span of 2 weeks.`,
    CompanyLink: "https://abitu.net/schoolpi",
    Duration: "August 2021",
  },
  {
    Position: "Student",
    Company: `Moscow Workshops Juniors`,
    Description: `It was a competitive programming winter camp`,
    CompanyLink: "https://it-edu.com/mwj/en/",
    Duration: "February 2022",
  },
];

export const volunteerDetails = [
  {
    Position: "Admin",
    Company: `"Nazarbayev Intellectual School Olympiads and Science Fairs" Telegram channel`,
    Description: `I post about recent achievments of NIS students and upcoming competitions along with 3 other admins.`,
    CompanyLink: "https://t.me/NISolympiads19",
    Duration: "October 2023 - Present",
  },
  {
    Position: "Founder",
    Company: `NIS PhM Almaty Python Club`,
    Description: `Opened this club with my friend Aizhan.  We teach the basics of Python along with more sophisticated topics such as software development`,
    CompanyLink: "",
    Duration: "September 2023 - Present",
  },
];

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Freestyler",
    image: projectImage1,
    description: `AI guide to any location of the world. Users can choose NYC, for instance, and ask what to do there for 5 days or they can choose Rome and ask which restaurants are there. The places they choose is shown on a 3D model of the earth. This project got accepted to <a href="https://www.microsoft.com/en-us/startups" class="link" target="_blank">Microsoft for Startups Founders Hub</a> and got over 1000 visitors.`,
    techstack: "React, Tailwind CSS, Python, FastAPI",
    previewLink: "https://freestyler.vercel.app/",
    githubLink: "https://github.com/sagyn-s/Freestyler-Website",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "sagynjumadildayev@gmail.com",
};

export const honorsDetails = [
  {
    Award: "Mu Alpha Theta Second Award of 1000$",
    Description: "First ever award of a Kazakhstani participant at ISEF since 2015. ISEF is the world’s largest international pre-college science competition.",
    Competition: "Regeneron ISEF",
    HonorLink: "https://www.societyforscience.org/isef/",
    Date: "May, 2023",
    Type: "International",
  },
  {
    Award: "Gold medal",
    Description: "Top 50 from 6,000 participants from 10+ countries",
    Competition: "Technocup Olympiad",
    HonorLink: "https://techno-cup.ru/",
    Date: "March, 2023",
    Type: "International",
  },
  {
    Award: "Gold medal",
    Description: "Top 1 from around 30,000 participants in Kazakhstan",
    Competition: "National Science Fair",
    HonorLink: "https://daryn.kz/rknp-ru/",
    Date: "April, 2023",
    Type: "National",
  },
  {
    Award: "Acceptance",
    Description: "$1,000 USD of Azure Credits, $2,500 USD in OpenAI credits, a year of GitHub Enterprise Cloud, etc. Acceptance rate is 3%.",
    Competition: "Microsoft For Startups Founders Hub",
    HonorLink: "https://www.microsoft.com/ru-ru/startups/",
    Date: "September, 2023",
    Type: "International",
  },
  {
    Award: "Final Demo Day participation + The Best Full-stack Developer award",
    Description: "Given to the top 20 best AI apps and 1 among 108 students from nFactorial Incubator",
    Competition: "nFactorial Incubator",
    HonorLink: "https://youtu.be/XE367kUbLVM?t=6107",
    Date: "August, 2023",
    Type: "International",
  },
  {
    Award: "Bronze medal",
    Description: "Top 14 from 266,805 participants from Kazakhstan",
    Competition: "National Olympiad in Informatics",
    HonorLink: "https://daryn.kz/respa/",
    Date: "April, 2022",
    Type: "National",
  },
  {
    Award: "Silver medal",
    Description: "Top 12 from around 650 teams. Full scholarship to attend IITU University in Kazakhstan, Almaty.",
    Competition: "Eurasian Team Olympiad in Informatics",
    HonorLink: "https://neerc.ifmo.ru/school/russia-team/index.html",
    Date: "December, 2021",
    Type: "International",
  },
  {
    Award: "Gold medal",
    Description: "Top 2 from 300 participants from Kazakhstan",
    Competition: "National Junior Olympiad in Informatics",
    HonorLink: "https://daryn.kz/resp-junior-olimpiad-ru/",
    Date: "May, 2021",
    Type: "National",
  },
  {
    Award: "Gold medal",
    Description: "Full scholarship to attend Higher School of Economics in Russia, Moscow. Top 1/550 participants from 10+ countries.",
    Competition: "HSE International Olympiad",
    HonorLink: "https://olymp.hse.ru/en/inter/",
    Date: "January, 2023",
    Type: "International",
  },
  {
    Award: "Participation",
    Description: "Top 32 from around 1,000 participants from Russia, Ukraine, Belarus, Kazakhstan, Armenia, Kyrgyzstan, Israel, Romania, Syria, China",
    Competition: "Moscow Workshop Juniors",
    HonorLink: "https://it-edu.com/mwj/en/",
    Date: "February - March, 2022",
    Type: "International",
  },
  {
    Award: "Second-place winner in Almaty + Global nominee",
    Description: "Given to top 2 among 31 teams from Almaty and 587 among 5500+ teams from 152 countries",
    Competition: "NASA International Space Apps Challenge",
    HonorLink: "https://www.spaceappschallenge.org/",
    Date: "October, 2023",
    Type: "International",
  },
  {
    Award: "Encouragement diploma",
    Description: "Competition organized by the Belgian Embassy in Kazakhstan in honor of the Francophonie week in 2021",
    Competition: "Francophonie 2021",
    HonorLink: "https://www.diplomatie.gouv.fr/en/french-foreign-policy/francophony-and-the-french-language/news/article/francophonie-international-francophonie-day-20-march-and-french-language-and",
    Date: "March, 2021",
    Type: "National",
  },
  {
    Award: "First place award of ₸200,000",
    Description: "Top 1 team among 20 teams from NIS PhM Almaty",
    Competition: "HackNIS 2023",
    HonorLink: "https://www.instagram.com/p/CzIkjRxiIhU/",
    Date: "October, 2023",
    Type: "Schoolwide",
  },
  {
    Award: "Bronze medal",
    Description: "Top 149 from around 250,000 participants in Kazakhstan",
    Competition: "Regional Olympiad in Informatics",
    HonorLink: "https://daryn.kz/respa/",
    Date: "February, 2021",
    Type: "Regional",
  },
  {
    Award: "Silver medal",
    Description: "Got the award in Informatics and in the Online Stage of the Olympiad",
    Competition: "“Phystech.International” Olympiad",
    HonorLink: "https://phystech.international/event/3900",
    Date: "August, 2021",
    Type: "International",
  },
  {
    Award: "Participation",
    Description: "Selected 545 from 1621 participants from 10+ nations",
    Competition: "“Phystech.International” summer camp",
    HonorLink: "https://abitu.net/schoolpi",
    Date: "August, 2021",
    Type: "International",
  },
  {
    Award: "Gold medal",
    Description: "Top 1 from 1000 participants in Kazakhstan",
    Competition: "Junior Programming Contest",
    HonorLink: "https://www.facebook.com/OfficialNIS/photos/%D0%B0%D0%BB%D0%BC%D0%B0%D1%82%D1%8B-%D2%9B%D0%B0%D0%BB%D0%B0%D1%81%D1%8B-%D1%84%D0%B8%D0%B7%D0%B8%D0%BA%D0%B0-%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0-%D0%B1%D0%B0%D2%93%D1%8B%D1%82%D1%8B%D0%BD%D0%B4%D0%B0%D2%93%D1%8B-nis-%D0%BE%D2%9B%D1%83%D1%88%D1%8B%D1%81%D1%8B-%D1%81%D0%B0%D2%93%D1%8B%D0%BD-%D0%B6%D2%B1%D0%BC%D0%B0%D0%B4%D1%96%D0%BB%D0%B4%D0%B0%D0%B5%D0%B2-junior/1583103808512211/",
    Date: "May, 2020",
    Type: "National",
  },
];
