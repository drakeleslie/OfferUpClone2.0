import Header from "../../johnscomponents/Header";
import HomeComp from "./HomeComp";
import styles from "../../../styles/Home.module.css";
import Footer from "../../mattscomponents/Footer";
const Container = ({ currentUser }) => {
  return (
    <div className="flex flex-col min-h-screen text-black w-full">
      <Header currentUser={currentUser} />
      <div className="flex grow flex-col">
        <div className={styles.spacer}></div>
        <main className="w-full max-w-screen-2xl my-0 mr-auto ml-auto">
          <HomeComp />
        </main>
      </div>
      <Footer />
    </div>
  );
};
export default Container;
