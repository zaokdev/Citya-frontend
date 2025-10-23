import type { childrenProps } from "../types";

const DefaultLayout = ({ children }: childrenProps) => {
  return (
    <>
      <nav>navbar</nav>
      {children}
      <footer>footer</footer>
    </>
  );
};

export default DefaultLayout;
