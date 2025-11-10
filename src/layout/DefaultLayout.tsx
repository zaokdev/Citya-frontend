import { Outlet } from "react-router";
import Navbar from "./Navbar";

const DefaultLayout = () => {
  return (
    <>
      <main className="bg-slate-50 grid min-h-dvh grid-rows-[auto_1fr_auto]">
        <Navbar />

        <Outlet />
        <footer className="bg-slate-900 text-white">
          <span>
            Developed by{" "}
            <a href="https://www.zaokdev.lat/" className="text-blue-700">
              @Zaokdev
            </a>
          </span>
        </footer>
      </main>
    </>
  );
};

export default DefaultLayout;
