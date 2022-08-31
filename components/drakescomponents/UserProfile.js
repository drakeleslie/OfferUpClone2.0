import UserProfileItems from "./userProfileItems";
import UserProfileInfo from "./userProfileInfo";
import "../../styles/Profile.module.css";
import Header from "../johnscomponents/Header";

const UserProfile = ({ user, itemsOnSale }) => {
  return (
    <div className="flex flex-col w-full min-h-screen text-black">
      <Header />
      <div className="flex grow flex-col">
        <main className="w-full max-w-screen-2xl my-0 mr-auto ml-auto">
          <UserProfileInfo user={user} itemsOnSale={itemsOnSale} />
          <UserProfileItems user={user} itemsOnSale={itemsOnSale} />
        </main>
      </div>
    </div>
  );
};
export default UserProfile;
