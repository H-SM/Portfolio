import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from './components';
const App = () =>{
  return (
    <>
    
    <BrowserRouter>
    <div className="bg-primary-black overflow-hidden">
      {/* <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"> */}
        <Navbar/>
        <Hero/>
      {/* </div> */}
      <div className="relative">
      <About/>
      <div className="gradient-03 z-0" />
      <Experience/>
      </div>
      <Tech/>
      <Works/>
      <Feedbacks/>
      <div className="relative z-0">
        <Contact/>
        <Footer/>
        <StarsCanvas/>

      </div>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App;
