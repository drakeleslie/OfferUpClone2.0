import Header from "../johnscomponents/Header"
import ViewItem from "./ViewItem"
import styles from "../../styles/ViewItem.module.css"
import Footer from "../mattscomponents/Footer"
const ViewItemContainer = () => {
  return (
    <div className="flex flex-col w-full min-h-screen text-black">
        <Header /> 
        <div className="flex grow flex-col">
        <div className={styles.spacer}></div>
            <main className="w-full max-w-screen-2xl my-0 mr-auto ml-auto">
              <ViewItem />
            </main>
        </div>
        <Footer />
    </div>
  )
}
export default ViewItemContainer
