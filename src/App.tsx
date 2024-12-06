import { Navbar } from "./components/Navbar"
import { Work } from "./components/Work"
import { Stripes } from "./components/Stripes"

function App() {

  return (
    <div className="w-full h-screen bg-zinc-900 text-white">
      <Navbar />
      <Work />
      <Stripes />
    </div>
  )
}

export default App
