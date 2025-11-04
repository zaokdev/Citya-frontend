import { Outlet } from "react-router";
import Container from "./Container";

const DefaultLayout = () => {
  return (
    <>
      <main className="bg-slate-50 grid min-h-dvh grid-rows-[auto_1fr_auto]">
        <nav>navbar</nav>
        <Container>
          <Outlet />
        </Container>
        <footer>footer</footer>
      </main>
    </>
  );
};

export default DefaultLayout;
