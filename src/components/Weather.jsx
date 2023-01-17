const Weather = ({ data, error, loading}) => {
  return (
    <div>
      {loading && <h2 className="text-3xl flex justify-center mt-12">Loading...</h2>}

      {data && <div><div className="mt-12 flex flex-col sm:flex-row sm:justify-center">
        <h1 className="text-[140px] flex justify-center text-center m-2 mt-0 sm:h-[210px] h-[170px]">{data.current.temp_c}°C</h1>
          <div className="flex flex-col justify-center text-center">
            <span className="text-6xl ml-12 mt-2">{data.location.name}</span>
            <span className="text-3xl mt-5 ml-12 mb-4">{data.current.condition.text}</span>
          </div>
        </div>
        <div className="flex flex-wrap p-2">
          <div className="border-solid border-4 border-white rounded-lg p-2 sm:first:w-[49%] w-full sm:mr-3 mb-3">
            <h3 className="text-3xl">Clouds</h3>
            <span>Clouds: {data.current.cloud}</span>
          </div>
          <div className="border-solid border-4 border-white rounded-lg p-2 sm:w-[49%] w-full mb-3">
            <h3 className="text-3xl">Wind</h3>
            <span className="block">Velocity: {data.current.wind_kph} kph</span>
            <span>Direction: {data.current.wind_dir}</span>
          </div>
          <div className="border-solid border-4 border-white rounded-lg p-2 sm:w-[49%] w-full mb-3 sm:mr-3">
            <h3 className="text-3xl">Temperature</h3>
            <span className="block">Celsius: {data.current.temp_c}</span>
            <span>Feels-Celsius: {data.current.feelslike_c}</span>
          </div>
          <div className="border-solid border-4 border-white rounded-lg p-2 sm:w-[49%] w-full mb-3">
            <h3 className="text-3xl">Humidity</h3>
            <span>Humidity: {data.current.humidity}</span>
          </div>
        </div>
      </div>}
      {error && <h2 className="text-3xl flex justify-center mt-12">Error: {error}</h2>}
      </div>
  );
};

export default Weather;
