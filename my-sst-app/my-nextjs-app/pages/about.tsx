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
      <div className=" fixed h-screen w-full bg-red-900 px-10 pt-24 md:pt-40">
        <div className="flex flex-col md:flex-row">
          <div className="flex w-full flex-col p-2 md:w-1/2">
            <span className=" font-bold text-white">Hello everyone!</span>
            <div className="flex flex-col md:flex-row">
              <h1 className=" font-bold text-white text-2xl mr-2">
                I am
              </h1>
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  wrapperClassName: "text-white font-bold text-2xl",
                  cursorClassName:"text-white font-bold text-2xl"
                }}
                onInit={(typewriter) => aboutMe(typewriter)}
              />
            </div>
            <span className=" font-bold text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </span>
          </div>
          <div className="w-full p-2 md:w-1/2">
            <img
              className="min-w-1/2 ml-auto mr-auto block w-1/2 invert"
              src="/menu-monster.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
