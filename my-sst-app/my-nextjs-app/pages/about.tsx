import Article, {
  ExperienceProp as ExperienceProp,
} from "@/components/experience-article";
import { myExperience } from "@/data/my-experience";
import Typewriter, { TypewriterClass } from "typewriter-effect";

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
