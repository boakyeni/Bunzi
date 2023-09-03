import Sidebar from "./_components/sidebar"

const Home = () => {
  return (
      <div className="grid grid-cols-5">
        <Sidebar/>
        <main className="text-white col-span-5 lg:col-span-4">
            <div id="first-section" className="h-screen">
                Hello
            </div>
            <div id="second-section" className="h-screen">
              Yo
            </div>
        </main>
      </div>
  )
}

export default Home