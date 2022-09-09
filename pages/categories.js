import { useRouter } from "next/router";
import CategoriesContainer from "../components/paulscomponents/Categories/CategoriesContainer";
//search page
export default function Search() {
  const router = useRouter();
  const data = router.query;
  if (data.data) {

    console.log(data.data, 'data.data')
    return (
      <div>
        <CategoriesContainer  data={data.data}/>
      </div>
    );
  } else {
    return (
      <div>
        <CategoriesContainer data={{}} />
      </div>
    );
  }
}
