import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

function App() {
  const cards = data.map(item => {
    return (
      <div>
        {item.id !== 0 && <hr />}
        <Card 
          key={item.id}
          {...item}
        />
        
      </div>
    )
  })

  return (
    <div className="App">
      <Navbar />
      <main>
        {cards}
      </main>
    </div>
  )
}

export default App
