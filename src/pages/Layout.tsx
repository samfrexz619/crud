import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <main className="bg-gray_10">
      <div className="md:w-[650px] mx-auto text-white min-h-screen bg-pry">
        <Outlet  />
      </div>
    </main>
  )
}

export default Layout