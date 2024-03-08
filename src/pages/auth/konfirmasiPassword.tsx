import { Link } from "react-router-dom";
import { ArrowRight, EyeClose } from "../../assets";
import { FloatingLabelInput } from "../../components";
import IntroComponent from "./component/IntroComponent";
import FooterIntroComponent from "./component/footerIntroComponent";

const KonfirmasiPassword = () => {
  return (
    <div className="flex h-screen flex-col lg:flex-row">
      <IntroComponent />

      <div className="flex h-screen w-full items-center justify-center ">
        <div className="flex flex-col gap-3">
          <h1 className="text-[24px]">Konfirmasi Password</h1>
          <p className="w-[19rem] text-[14px] text-color3">Silahkan Input Password Baru</p>
          <div className="mt-5 flex flex-col gap-3">
            <FloatingLabelInput type="text" password icon={EyeClose} label={"Password Lama"} />
            <FloatingLabelInput type="text" password icon={EyeClose} label={"Password Baru"} />
          </div>

          <Link
            to={"/"}
            className="flex w-full cursor-pointer items-center justify-between rounded bg-color1 p-2 px-4 text-white"
          >
            <div>Ubah Password</div>
            <img src={ArrowRight} className="h-5" />
          </Link>
          <FooterIntroComponent />
        </div>
      </div>
    </div>
  );
};

export default KonfirmasiPassword;
