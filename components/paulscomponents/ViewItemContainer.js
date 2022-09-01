import Header from "../johnscomponents/Header"
import ViewItem from "./ViewItem"
const ViewItemContainer = () => {
  return (
    <div className="flex flex-col w-full min-h-screen text-black">
        <Header /> 
        <div className="flex grow flex-col">
            <main className="w-full max-w-screen-2xl my-0 mr-auto ml-auto">
              <ViewItem />
            </main>
        </div>
    </div>
  )
}
export default ViewItemContainer
