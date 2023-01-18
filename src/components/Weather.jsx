import WeatherList from "./WeatherList";

const Weather = ({ data, error, loading}) => {
  return (
    <div>
      {loading && <h2 className="text-3xl flex justify-center mt-12">Loading...</h2>}

      {data && <div><div className="mt-12 flex flex-col sm:flex-row sm:justify-center">
        <h1 className="text-[140px] flex justify-center ml-[35px] mt-0 sm:h-[210px] h-[170px]">{data.current.temp_c}°C</h1>
          <div className="flex flex-col justify-center text-center">
            <span className="text-6xl ml-12 mt-2">{data.location.name}</span>
            <span className="text-3xl mt-5 ml-12 mb-4">{data.current.condition.text}</span>
          </div>
        </div>
        <WeatherList data={data}/>
      </div>}
      {error && <h2 className="text-3xl flex justify-center mt-12">Error: {error}</h2>}
      </div>
  );
};

export default Weather;
