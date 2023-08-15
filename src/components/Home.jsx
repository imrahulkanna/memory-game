import banner1 from "../assets/one-piece.png";
import { Outlet } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <>
      <div className="banner">
        <img src={banner1} alt="banner" />
      </div>
      <Outlet />
    </>
  );
}

export default Home;
