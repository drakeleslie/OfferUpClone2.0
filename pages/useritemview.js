import Head from "next/head";
import UserItemContainer from "../components/drakescomponents/UserItemViewContainer";

const ViewItem = () => {
  return (
    <div>
      <Head>
        <title>View Item</title>
        <script
          async
          src="https://kit.fontawesome.com/da6e8f7c59.js"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <UserItemContainer />
    </div>
  );
};

export default ViewItem;
