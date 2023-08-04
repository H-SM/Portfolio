import { BrowserRouter } from "react-router-dom";

import { About2, About, Contact, Experience,  Hero, Navbar, Tech, Works, StarsCanvas, Footer, WhoamI, Resume } from './components';
const App = () =>{
  return (
    <>
    
    <BrowserRouter>
    <div className="bg-primary-black overflow-hidden">
      {/* <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"> */}
      <Navbar/>
      <div className="relative">
      <div className="gradient-03 z-0" />
      <Hero/>
      <WhoamI/>
      </div>
      <div className="relative">
      <About/>
      <div className="gradient-04 z-0" />
      <About2/>
      <Experience/>
      </div>
      <Tech/>
      <Works/>
      <div className="relative z-0">
      <Resume/>
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
