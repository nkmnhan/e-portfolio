import Article, { ArticleProp } from "@/components/article";
import Typewriter, { TypewriterClass } from "typewriter-effect";

const myExperience: ArticleProp[] = [
  {
    date: new Date("2022-09-02"),
    title: "tony super",
    description:
      "When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.",
    url: "https://spotlight.tailwindui.com/articles/introducing-animaginary",
  },
  {
    date: new Date("2022-09-02"),
    title: "tony super",
    description:
      "When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.",
    url: "https://spotlight.tailwindui.com/articles/introducing-animaginary",
  },
  {
    date: new Date("2022-09-02"),
    title: "tony super",
    description:
      "When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.",
    url: "https://spotlight.tailwindui.com/articles/introducing-animaginary",
  },
  {
    date: new Date("2022-09-02"),
    title: "tony super",
    description:
      "When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.",
    url: "https://spotlight.tailwindui.com/articles/introducing-animaginary",
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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </header>
                <div className="ml-auto mr-auto mt-4 w-60 md:w-80">
                  <img className="ml-auto mr-auto" src="/menu-monster.png" />
                </div>
              </div>

              <div className="mt-16 md:mt-20">
                <div>
                  <div className=" mr-auto ml-auto flex max-w-3xl flex-col space-y-16 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
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
