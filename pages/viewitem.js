import Head from "next/head"
import ViewItemContainer  from "../components/paulscomponents/ViewItem/ViewItemContainer.js"

const ViewItem = () => {
  return (
    <div>
      <Head>
        <title>View Item</title>
        <script async src="https://kit.fontawesome.com/da6e8f7c59.js" crossOrigin="anonymous"></script>
     </Head> 
      <ViewItemContainer />
    </div>
  )
}

export default ViewItem