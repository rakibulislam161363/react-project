import ResponsiveAppBar from './component/Nav';
// import Test from './component/testing';
import Hero from './component/hero';
import Heronext from './component/heronext';
import Control from './component/contorl';
import Train from './component/train';
import Allo from './component/allo';
import Last from './component/last';
import Carousel from './component/carosal';
function App() {


  return (
    <>
      <ResponsiveAppBar />
      {/* <Test /> */}
      <Hero />
      <Heronext />
      <Control />
      <Train />
      <Allo />
      <Carousel />
      <Last />
    </>
  );
}

export default App
