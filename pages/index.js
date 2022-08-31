import Container from "../components/paulscomponents/Container";
import HomeComp from "../components/paulscomponents/HomeComp";
//home page
export default function Home() {
  return (
    //container will be the top level component to standardize sizing across all pages 
    <div>
      <Container />
        {/* all page items will be inside container */}
    </div>
  );
}
