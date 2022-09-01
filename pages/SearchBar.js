// import create from "zustand";
import { useRouter } from "next/router";
// import Image from "next/image";
// import loupe from "../public/images/loupe.png";
import styles from "../styles/header.module.css";

// const useStore = create((set) => ({
//   keyword: "",
//   setKeyword: (keyword) =>
//     set((state) => ({
//       ...state,
//       keyword,
//     })),
// }));

const SearchBar = () => {
  // const router = useRouter();
  // const keyword = useStore((state) => state.keyword);
  // const setKeyword = useStore((state) => state.setKeyword);

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/searchResults");
  };

  return (
    <div className={styles.searchBar}>
      <input
        aria-describedby="combobox-help-text"
        id="search-box-container-input"
        name="search"
        placeholder="Search"
        type="search"
        aria-autocomplete="list"
        aria-label="Search for anything"
        className="MuiInputBase-input jss5109 jss5098 MuiInputBase-inputAdornedStart jss5120 MuiInputBase-inputAdornedEnd jss5121 MuiInputBase-inputTypeSearch"
        // style="text-overflow: ellipsis; visibility: visible;"
      ></input>
      {/* type="text"
        value={keyword}
        placeholder="Search"
        onChange={(e) => setKeyword(e.target.value)}
      /> */}
      <button className={styles.searchBtn} type="submit" onClick={handleClick}>
        {/* <Image src={loupe} alt="" /> */}
      </button>
    </div>
  );
};

export default SearchBar;
