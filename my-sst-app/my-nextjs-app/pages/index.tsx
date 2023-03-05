import Logo from "@/components/logo";

const HomePage = () => {
  return (
    <>
      <div className="fixed h-screen w-full bg-red-900 bg-none bg-cover bg-center">
        <div className="absolute top-0 hidden h-full w-full md:block">
          <video autoPlay loop muted className=" min-h-full min-w-full">
            <source
              src="https://mindbender.com/content/videos/starting-page-video.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
        <div className="absolute top-0 hidden h-full w-full bg-[url('/home-dots.png')] bg-[length:3px_3px]  md:block"></div>
      </div>
      <div className=" fixed top-0 left-0 z-10 h-screen w-full">
        <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Logo />
        </div>
      </div>
    </>
  );
};
export default HomePage;
