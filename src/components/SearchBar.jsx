const SearchBar = () => {
  return (
    <div className="flex justify-center text-black">
      <input
        type="text"
        placeholder="Enter city here"
        className="p-3 m-3 w-2/4 rounded-full outline-none focus:bg-gray-100 duration-150"
      />
      <button className="py-3 px-5 m-3 w-1/8 bg-white rounded-full hover:bg-gray-100 duration-150">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
