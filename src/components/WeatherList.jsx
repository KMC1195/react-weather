const WeatherList = ({ data }) => {
    return (<div className="flex flex-wrap p-2">
    <div className="border-solid border-4 border-white rounded-lg p-2 sm:w-[49%] w-full sm:mr-3 mb-3">
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
    <div className="border-solid border-4 border-white rounded-lg p-2 sm:w-[49%] w-full mb-3 mr-3">
      <h3 className="text-3xl">Pressure</h3>
      <span>Mb: {data.current.pressure_mb}</span>
      <span>In: {data.current.pressure_in}</span>
    </div>
    <div className="border-solid border-4 border-white rounded-lg p-2 sm:w-[49%] w-full mb-3">
      <h3 className="text-3xl">Precip</h3>
      <span>M,: {data.current.precip_mm}</span>
      <span>In: {data.current.precip_in}</span>
    </div>
  </div>);
}
 
export default WeatherList;