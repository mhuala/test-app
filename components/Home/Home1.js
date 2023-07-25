import Navbar from "../Navbar";
const Home1 = () => {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between ">
      {/* SECCION */}
      <section className="w-full relative flex items-center justify-center h-screen overflow-hidden">
        {/* OVERLAY */}
        <div className="w-full z-30 min-h-screen bg-sky-950 bg-opacity-50">
          <div className="flex-col text-2xl text-white min-h-screen items-center mx-auto">
            <Navbar />
            {/*  */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="col-span-1  bg-black ">
                <h2 className="flex mx-auto items-center">HOLA</h2>
              </div>
              <div className="col-span-1 bg-gray-300">
                <h2 className="flex mx-auto items-center">HOLA</h2>
              </div>
            </div>
          </div>
        </div>
        {/* VIDEO */}
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </section>
    </main>
  );
};

export default Home1;
