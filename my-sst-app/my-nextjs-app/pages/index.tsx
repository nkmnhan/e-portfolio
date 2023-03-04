const HomePage = () => {
  return (
    <>
    <div className="bg-none bg-cover bg-cent fixed h-screen w-full -z-50">
      <div className=" -z-50 absolute top-0 w-full h-full">
       <video autoPlay loop muted>
        <source src="https://mindbender.com/content/videos/starting-page-video.mp4" type="video/mp4"></source>
       </video>
      </div>
      <div className="absolute top-0 bg-[url('/home-dots.png')] h-full w-full  bg-[length:3px_3px]">
      </div></div>
    </>
  );
};
export default HomePage;
