import styles from "../../styles/Home.module.css"
import Product from "./Product"
const HomeComp = () => {

  return (
    <div className="flex flex-row justify-center grow">
      <div className="my-0 mr-auto ml-auto pt-0 pb-0 pl-6 pr-6">
        <div className="block"> 
         <div>
          <div>
           <div className={styles.gridbox}>
              <Product /> 
             <div></div>
           </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeComp