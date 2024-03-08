import { SocialMedia, SosmedBiru } from "../../../assets";

const FooterIntroComponent = () => {
  return (
    <div className="text-color5 flex flex-col items-center justify-center gap-2 lg:flex lg:text-white">
      <p className="text-[12px] lg:hidden"> © 2023 Persis Software Labs, All Rights Reserved.</p>
      <img src={SosmedBiru} className="w-24 lg:hidden" />
      <img src={SocialMedia} className="hidden w-24" />
    </div>
  );
};

export default FooterIntroComponent;
