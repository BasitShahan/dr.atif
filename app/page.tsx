
import Hero from "./HomepageComponents/1hero";
import Dratif from "./HomepageComponents/2Dratif";
import Awards from "./HomepageComponents/3Awards";
import Gallery from "./HomepageComponents/4Gallery";
import LowerSection from "./HomepageComponents/LowerHalf";


export default function Home() {
  return (
    <>
      <div className=" bg-custom-bgblack h-full w-full text-white  ">

        <Hero />
        <Dratif />
        <Awards />
        <Gallery />
        <LowerSection />
      </div>

    </>
  );
}
