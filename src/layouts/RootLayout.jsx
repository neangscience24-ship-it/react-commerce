import { Outlet } from "react-router-dom"
import TopBar from "../components/TopBar"
import Header from "../components/Header"
import Footer from "../components/Footer"
function RootLayout() {
  return (
    <>
        <TopBar />
        <Header />
        {/* dak footer tv k'rom */}
        <main className="min-h-screen">
          <Outlet />
        </main>
        <Footer />
        
    </>
  )
}

export default RootLayout