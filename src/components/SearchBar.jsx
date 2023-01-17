import useFetch from  "../hooks/useFetch"
import Weather from "./Weather"
import { useState } from "react";

const SearchBar = () => {

  const [city, setCity] = useState('');
  const {data, loading, error, fetchData} = useFetch(city);

  return (
    <div>
    <div className="flex justify-center text-black">
      <input
        type="text"
        placeholder="Enter city here"
        className="p-3 m-3 w-2/4 rounded-full outline-none duration-150"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="py-3 px-5 m-3 w-1/8 bg-white rounded-full outline-none hover:bg-gray-200 focus:bg-gray-200 duration-150" onClick={fetchData}>
        Search
      </button>
    </div>
    <Weather data={data} loading={loading} error={error}/>
    </div>
  );
};

export default SearchBar;