import Head from "next/head"
import  ViewItemContainer  from "../components/paulscomponents/ViewItemContainer"

const viewitem = () => {
  return (
    <div>
      <Head>
        <title>View Item</title>
        <script src="https://kit.fontawesome.com/da6e8f7c59.js" crossorigin="anonymous"></script>
     </Head> 

      <ViewItemContainer />
    </div>
  )
}

export default viewitem