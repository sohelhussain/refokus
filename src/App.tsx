import { Navbar } from "./components/Navbar"
import { Work } from "./components/Work"
import { Stripes } from "./components/Stripes"
import Products from "./components/Products"
import Maruees from "./components/Maruees"
import Cards from "./components/Cards"

function App() {

  return (
    <div className="w-full bg-zinc-900 text-white">
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Maruees />
      <Cards />
    </div>
  )
}

export default App
