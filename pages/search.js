import SearchContainer from "../components/paulscomponents/Search/SearchContainer";
import { useRouter } from "next/router";
export default function Search() {
  const router = useRouter();
  const data = router.query;
  if (data.data) {
    return (
      <div>
        <SearchContainer  data={data.data}/>
      </div>
    );
  } else {
    return (
      <div>
        <SearchContainer data={{}} />
      </div>
    );
  }
}
