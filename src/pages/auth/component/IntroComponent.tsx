import { Logo, SocialMedia } from "../../../assets";

const IntroComponent = () => {
  return (
    <div className="lg:desktop-bg mobile-bg">
      <div className="flex h-screen w-full flex-col items-center justify-center ">
        <div className="mt-[12vh] flex h-screen flex-col lg:items-center lg:justify-center">
          <div className="flex flex-row items-center gap-2 ">
            <img src={Logo} className="h-16 lg:h-24" />
            <div className="flex flex-col">
              <p className="text-[30px] text-white">Alquran</p>
              <p className="text-white">Alquran.co.id</p>
            </div>
          </div>
        </div>
        <div className="mb-10 hidden flex-col gap-2 text-white lg:flex">
          <p> © 2023 Persis Software Labs, All Rights Reserved.</p>
          <img src={SocialMedia} className="hidden w-28 lg:flex" />
        </div>
      </div>
    </div>
  );
};

export default IntroComponent;
