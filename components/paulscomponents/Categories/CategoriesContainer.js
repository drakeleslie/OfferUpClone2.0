import Header from "../../johnscomponents/Header"
import CategoriesComp from "./CategoriesComp"
import styles from "../../../styles/Home.module.css"
import Footer from "../../mattscomponents/Footer"

const CategoriesContainer = ({data}) => {
  return (
    <div className="flex flex-col w-full min-h-screen text-black">
        <Header /> 
        <div className="flex grow flex-col">
          <div className={styles.spacer}></div>
            <main className="w-full max-w-screen-2xl my-0 mr-auto ml-auto">
              <CategoriesComp data={data}/>
            </main>
        </div>
        <Footer/>
    </div>
  )
}

export default CategoriesContainer
