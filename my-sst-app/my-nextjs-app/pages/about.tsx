import Article, { ArticleProp } from "@/components/article";
import Typewriter, { TypewriterClass } from "typewriter-effect";

const myExperience: ArticleProp[] = [
  {
    date: new Date(),
    title: "Now",
    role: "Senior Software Engineer",
    description:
      "OPAL2.0 - Orient Software",
  },
  {
    date: new Date("2021-11-01"),
    title: "OPAL2.0 - Orient Software",
    role: "Senior Software Engineer",
    description:
      "OPAL2.0 is a digital learning space for employees and partners of the Ministry of Education, Singapore.",
  },
  {
    date: new Date("2019-01-01"),
    title: "Lowell - NASH TECH Limited",
    role: "Senior Software Engineer",
    description:
      "CLP Team is building the microservices system for the client from Europe. The system is made based on a microservices architecture, modern technologies as .Net Core 3.x for developing backend, VueJs for developing front-end, PostgreSQL for restoring the database, gRPC is the main protocol communication between service together and applying Kubernetes for managing containerized, Azure cloud for deployment environment.",
  },
  {
    date: new Date("2018-11-01"),
    title: "Open University Open Create - NASH TECH Limited",
    role: "Software Engineer",
    description:
      "Open Create (OC) is a microservices project for Open University in the UK to build innovative, engaging online learning activities for our students and will transform the learning experience, transforming static printed learning materials into dynamic learning experiences, increasing levels of student engagement, and promoting the development and use of digital study skills.",
  },
  {
    date: new Date("2018-07-01"),
    title: "Dimensions - Orion forecast - NASH TECH Limited",
    role: "Software Engineer",
    description:
      "Dimensions is an e-commerce project (Blue Martini) which is provided to Clients with a functional and stable platform to place and manage orders in Twin Hill’s e-commerce system.",
  },
  {
    date: new Date("2018-03-01"),
    title: "MCS - NGR - Hitachi Consulting Vietnam",
    role: "Software Engineer",
    description:
      "Develop EI for semi-factory using IBM VTAP framework, SmartTCS and SiView MM / SM for a customer in Singapore.",
  },
  {
    date: new Date("2017-12-01"),
    title: "SOITEC SP1 - Hitachi Consulting Vietnam",
    role: "Software Engineer",
    description:
      "MCS is an ODC project. It provides NGR equipment the interface for equipment-to-host data communications. Via this interface, the host software can control and monitor the equipment such as: start and stop processing, collect measurement data, change variables, select recipe for processing, etc …",
  },
  {
    date: new Date("2017-10-01"),
    title: "MyCIM 4.0 - Hitachi Consulting Vietnam",
    role: "Software Engineer",
    description:
      "This is a semiconductor project based on IBM Siview SiView.It develops a Material Management client to manage the process of equipment in systems (MES, SPC, iFab) of semiconductor factories in Chengdu China.",
  },
  {
    date: new Date("2016-06-01"),
    title: "NADAE - ECACS - Hitachi Consulting Vietnam",
    role: "Software Engineer",
    description:
      ".Net Adaptive Distributed Application Environment (NADAE). NADAE is a rapidly distributed application development framework. The NADAE includes UI framework and Middleware components, which manage communication between services, package deployment, monitoring, exception handling, and data access. Equipment Controller Application Common Solution (ECACS)ECACS provides solutions to manage Recipes and Substrate Layouts following SEMI-standard, including Recipe and Substrate Layout design, data management.",
  },
];

function aboutMe(typewriter: TypewriterClass) {
  typewriter
    .typeString("Tony!")
    .pauseFor(2500)
    .deleteAll()
    .typeString("a full-stack developer!")
    .pauseFor(2500)
    .deleteAll()
    .start();
}

const AboutPage = () => {
  return (
    <>
      <div className="mr-auto ml-auto block px-10">
        <div className="mt-16 sm:mt-32 sm:px-8">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl md:flex md:flex-row lg:max-w-5xl">
                <header className="max-w-2xl">
                  <div className="flex w-full flex-col p-2">
                    <span className=" font-bold">Hello everyone!</span>
                    <div className="flex flex-col md:flex-row">
                      <h1 className=" mr-2 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        I am
                      </h1>
                      <Typewriter
                        options={{
                          autoStart: true,
                          loop: true,
                          wrapperClassName:
                            "text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl",
                          cursorClassName:
                            "text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl",
                        }}
                        onInit={(typewriter) => aboutMe(typewriter)}
                      />
                    </div>
                  </div>
                  <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                    Senior Software Engineer with 7 years in analysis, design,
                    development, testing, and implementation of various
                    Internet-based, Windows-based applications. I can do
                    BackEnd, Font-End, DevOps, especially my strength
                    server-side.
                    <br />
                    I also have over 2 years of work as a team leader.
                    <br />
                    I can work independently or teamwork, ability R&D new
                    technology solving the problem. I have a hobby of
                    researching and writing programming examples.
                    <br />
                    GitHub: https://github.com/nkmnhan/
                    <br />
                    My GitHub are storage all my experience, knowledge on it,
                    you can access there and explore about me.
                  </p>
                </header>
                <div className="ml-auto mr-auto mt-4 w-60 md:w-80">
                  <img className="ml-auto mr-auto" src="/menu-monster.png" />
                </div>
              </div>

              <div className="mt-16 md:mt-20">
                <div>
                  <div className="mr-auto ml-auto flex max-w-3xl flex-col space-y-16 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                    {myExperience.map((item) => (
                      <Article props={item}></Article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
