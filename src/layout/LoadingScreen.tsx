import { Riple } from "react-loading-indicators";

type props = {
  text?: string;
};

const LoadingScreen = ({ text }: props) => {
  return (
    <div className="min-w-full max-w-screen min-h-screen flex flex-col items-center justify-center">
      <Riple color="blue" size="large" />
      <span>{text || "Loading..."}</span>
    </div>
  );
};

export default LoadingScreen;
