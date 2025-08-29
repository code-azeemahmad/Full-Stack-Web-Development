import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Card from './components/Card';
function App() {
  return (
    <>
    <Navbar/>
    <div className="cards">
      <Card title = "Card 1" description = "Description 1" />    {/*insertion of props */}
      <Card title = "Card 2" description = "Description 2" />
      <Card title = "Card 3" description = "Description 3" />
      <Card title = "Card 4" description = "Description 4" />
    </div>
    <Footer/>
      <div></div>
    </>
  )
}

export default App

// F:/Sigma Web Development/Full-Stack-Web-Development/Backend/React/React-Components-Prop-JSX/first-App/
// first-App is our current/ present working directory pwd

// <div></div>, its not html, its jsx
// wrap more than one div in a wrapper to return them