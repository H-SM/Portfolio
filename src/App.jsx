import { BrowserRouter } from "react-router-dom";
import { useEffect, useRef } from "react";
import { About2, About, Contact, Experience, Hero, Navbar, Tech, Works, Footer, WhoamI, Resume } from './components';
import StarsCanvas from "./components/canvas/Stars";
const App = () => {
  const blobRef = useRef(null);

  useEffect(() => {
    const handlePointerMove = (e) => {
      const { pageX, pageY } = e;
      if (blobRef.current) {
        const blobWidth = blobRef.current.offsetWidth;
        const blobHeight = blobRef.current.offsetHeight;
        blobRef.current.animate(
          {
            left: `${pageX - blobWidth / 2}px`,
            top: `${pageY - blobHeight / 2}px`
          },
          { duration: 3000, fill: "forwards" }
        );
      }
    };

    document.body.addEventListener("pointermove", handlePointerMove);

    return () => {
      document.body.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <div className="relative bg-primary-black overflow-hidden w-full">
        <div className='absolute w-[80%] h-[10rem] left-[8vw] top-[-15vh] z-[0] gradient-01 pulseslow'></div>
          <Navbar />
          <div className="relative">
            <Hero />
            <WhoamI />
          </div>
          <div className="relative">
            <About />
            <div className="gradient-03 z-0" />
            <About2 />
            <div className="relative">
              <div className="gradient-04 z-0" />
            </div>
            <Experience />
          </div>
          <div className="relative">
            <div className="gradient-03 z-0 opacity-60" />
            <Tech />
            <Works />
          </div>
          <div className="relative z-10">
            <Resume />
            <Contact />
            <Footer />
            <StarsCanvas />
          </div>
          
        </div>
      </BrowserRouter>
      <div
            ref={blobRef}
            className="md:flex hidden blob bg-white-100 h-[300px] aspect-square absolute rounded-full left-[50%] top-[50%] bg-gradient-to-r from-blue-500 from-10% via-sky-400 via-30% to-emerald-400 to-90% opacity-10 blur-[1000px] z-0"
            style={{ animation: "rotate 20s infinite" }}
      ></div>
    </>
  );
};

export default App;
