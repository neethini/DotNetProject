import "./App.css"
import HomePage from "./Home/HomePage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./Components/header/Header"
import Footer from "./Components/footer/Footer"

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
         
        </Switch>
       <Footer />
      </Router>
    </>
  )
}

export default App