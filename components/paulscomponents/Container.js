import Header from "../johnscomponents/Header"
import HomeComp from "./HomeComp"
const Container = () => {
  return (
    <div className="flex flex-col w-full min-h-screen text-black">
        <Header /> 
        <div className="flex grow flex-col">
            <main className="w-full max-w-screen-2xl my-0 mr-auto ml-auto">
              <HomeComp />
            </main>
        </div>
    </div>
  )
}

export default Container