import Navbar from "./component/Navbar"
import Content from "./component/Content"
import Footer from "./component/Footer"


function App() {
  return <div style={{ width: "90%", height: "auto", backgroundColor: "white"}}>

    <Navbar />

    <hr style={{margin:"0px"}}/>

    <Content />

    <hr style={{margin:"0px"}}/>

    <Footer />

  </div>
}

export default App