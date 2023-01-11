const Weather = () => {
  return (
    <div>
      <div className="mt-12 flex justify-center">
        <h1 className="text-[140px]">15°C</h1>
        <div className="flex flex-col">
          <span className="text-6xl mt-12 ml-12">London</span>
          <span className="text-3xl mt-5 ml-12">Cloudy</span>
        </div>
      </div>
    </div>
  );
};

export default Weather;
