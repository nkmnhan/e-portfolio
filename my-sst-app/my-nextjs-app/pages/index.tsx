import Logo from "@/components/logo";

const HomePage = () => {
  return (
    <>
      <div className="bg-center fixed -z-50 h-screen w-full bg-red-900 bg-none bg-cover">
        <div className="absolute top-0 -z-50 hidden h-full w-full lg:block">
          <video autoPlay loop muted className=" min-w-full min-h-full">
            <source
              src="https://mindbender.com/content/videos/starting-page-video.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
        <div className="absolute top-0 h-full w-full bg-[url('/home-dots.png')]  bg-[length:3px_3px]"></div>
      </div>
      <div className=" fixed top-0 left-0 w-full h-screen -z-40">
        <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Logo/>
        </div>
      </div>
    </>
  );
};
export default HomePage;
