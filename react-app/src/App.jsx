import ResponsiveAppBar from './component/Nav';
// import Test from './component/testing';
import Hero from './component/hero';
import Heronext from './component/heronext';
import Control from './component/contorl';
import Train from './component/train';
import Allo from './component/allo';
import Last from './component/last';
import Carousel from './component/carosal';
import Imge from "./component/reacticon.png";
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
      <Carousel>
        <div className="bg-black text-white h-64 flex items-center justify-center">
          <div className="text-center">
            <img src={Imge} className='text-center flex justify-center mx-auto pb-2' alt="" />
            <p className="w-[500px]">
              Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
            <h1 className="text-[#14BCB2] font-bold pt-3">John Doe</h1>
            <p>Chief Strategy Officer @ Company</p>
          </div>
        </div>
        <div className="bg-blue-200 h-64 flex items-center justify-center">
          Slide 2
        </div>
        <div className="bg-green-200 h-64 flex items-center justify-center">
          Slide 3
        </div>
        {/* Add more slides as needed */}
      </Carousel>
      <Last />
    </>
  );
}

export default App
