import './App.css'
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import cardData from "./data"

function App() {
  let cards = cardData.map(card => {
    return <Card
              key = {card.title}
              {...card}
           />
  })

  return (
    <div>
      <Navbar/>
      {cards}
    </div>
  )
}

export default App
