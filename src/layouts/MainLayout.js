import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Navbar2 from "../components/Navbar2";

const MainLayout = () => {
  return (
    <>
      <Navbar2 />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
