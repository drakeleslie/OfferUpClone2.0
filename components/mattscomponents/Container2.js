
import Header from "../johnscomponents/Header"
import SavedItems from "./SavedItems"

const Container2 = () => {
  return (
    <div className="flex flex-col w-full min-h-screen text-black">
        <Header /> 
        <div className="flex grow flex-col">
            <main className="w-full max-w-screen-2xl my-0 mr-auto ml-auto">
              <SavedItems/>
            </main>
        </div>
    </div>
  )
}

export default Container2