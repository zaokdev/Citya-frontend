type props = {
  title: string;
  content: string;
};

const CurrentWeatherMiniCard = ({ title, content }: props) => {
  return (
    <div className="text-center p-2 rounded-lg bg-white/30 hover:bg-white/25 transition-colors col-span-6 md:col-span-4">
      <strong>{title}</strong>
      <p>{content}</p>
    </div>
  );
};

export default CurrentWeatherMiniCard;
