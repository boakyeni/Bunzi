
import Sidebar from "./[lang]/_components/sidebar"
import dc_image from "public/images/data_center_animate.png";
import Image from "next/image"
import TopBar from "./[lang]/_components/topBar";

const Home = ({ params }) => {
  return (
    <div className="grid grid-cols-5 bg-white">

      <Sidebar />

      <main className="text-black col-span-5 lg:col-span-4 ">
        <TopBar />
        <div id="first-section" className="h-screen w-full grid grid-cols-5">
          <div className="col-start-1 col-end-6 pt-16 sm:pl-28 px-8 ">
            <h1 className="text-3xl lg:text-6xl">Truly Global Cloud</h1>
            <div className="pt-6 pl-1 lg:pl-3 pr-10 flex flex-row ">

              <p className="text-2xl xl:w-1/2 text-slate-700">Be everywhere your customers are</p>



            </div>
            <div className="max-xl:hidden absolute top-56 right-48">
              {/* <Image src={dc_image} width={500}
                height={500}
                alt="Data center overlooking sunset" className="rounded-full w-[12rem] h-[12rem]" /> */}
            </div>

          </div>

        </div>
        <div id="second-section" className="h-screen bg-[#f6f6f6]">
          Yo
        </div>
      </main>
    </div>
  )
}

export default Home