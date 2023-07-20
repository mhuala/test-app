import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between ">
      
<section
  class="relative w-full flex items-center justify-center h-screen overflow-hidden"
>
  <div className="w-full relative z-30 min-h-screen  bg-sky-950 bg-opacity-50">
  <div
    class="text-2xl text-white"
  >
    <Navbar/>
    <div className="h-full w-full mt-30 border-xl rounded-2xl bg-transparent">
     <h1 className="text-center w-full h-full align-center justify-center">
      CHILOE
      </h1>
    </div>
  </div>
  </div>
  <video
    autoPlay
    loop
    muted
    class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
  >
    <source
      src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
</section>

    </main>
  )
}
