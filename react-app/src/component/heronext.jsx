import Img1 from '../component/Amd.png';
import Img2 from '../component/BackHub logo.png';
import Cable from '../component/Cable.png';
import mg4 from '../component/DBS logo.png';
import Img5 from '../component/EasyEuro logo.png';
// import Img6 from '../component/Logo.png';I


function Heronext() {
  return (
    <>
      <div className="bg-black w-full h-auto">
        <p className="text-center text-[#0FF1F6] text-2xl py-5">
          our trusted partners
        </p>
        <div className="justify-center grid grid-cols-2 items-center mx-auto md:grid-cols-5 px-16">
          <img src={Img2} alt="" />
          <img src={Cable} alt="" />
          <img src={mg4} alt="" />
          <img src={Img5} alt="" />
          <div className="flex justify-center mx-auto items-center ml-25 md:ml-0 xl:ml-0 lg:ml-0">
            <img src={Img1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Heronext;