import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Navbar2 from "../components/Navbar2";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider } from "react-photo-view";

const MainLayout = () => {
  return (
    <>
      <PhotoProvider>
        <Navbar2 />
        <Outlet />
        <Footer />
      </PhotoProvider>
    </>
  );
};

export default MainLayout;
