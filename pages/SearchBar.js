import React from "react";

const SearchBar = () => {
  // const router = useRouter();
  // const keyword = useStore((state) => state.keyword);
  // const setKeyword = useStore((state) => state.setKeyword);

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/searchResults");
  };

  return (
    <div className="p-2 flex flex-row">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <form className="flex flex-row">
        <input
          aria-describedby="combobox-help-text"
          id="search-box-container-input"
          name="search"
          placeholder="Search"
          type="search"
          aria-autocomplete="list"
          aria-label="Search for anything"
          className="border-solid border-[1px] h-[40px] w-[475px] border-[#00a87e] rounded-l-full text-[#00a87e] placeholder:text-[#00a87e] pl-2"
        ></input>
        <button
          className="bg-[#00a87e] rounded-r-full w-10 flex justify-center pt-2.5"
          type="submit"
          onClick={handleClick}
        >
          <i className="fa fa-search text-white"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
