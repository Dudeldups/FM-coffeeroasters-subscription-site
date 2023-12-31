import { Outlet } from "react-router-dom";

import "./Root.scss";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

export default function Root() {
  return (
    <div className="rootLayout">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
