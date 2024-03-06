import './App.css'
import Navbarr from './Components/Navbarr/Navbarr'
import Header from './Components/Header/Header'
import Content from './Components/Content/Content'
import CardsDeals from './Components/Cards/CardsDeals'
import Signup from './Components/Signup/Signup'
import Footer from './Components/Footer/Footer'
function App() {

  return (
    <>
      <div className='body '>
        <Navbarr />
        <Header />
        <Content />
        <CardsDeals />
        <Signup />
        <Footer />
      </div>
    </>
  )
}

export default App
