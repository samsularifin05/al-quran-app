import { Link } from "react-router-dom";
import { ArrowRight, EyeClose, Facebook, Google, Mail, User } from "../../assets";
import { FloatingLabelInput } from "../../components";
import IntroComponent from "./component/IntroComponent";
import FooterIntroComponent from "./component/footerIntroComponent";

const Register = () => {
  return (
    <div className="flex h-screen flex-col lg:flex-row">
      <IntroComponent />
      <div className="flex h-screen w-full items-center justify-center ">
        <div className="flex flex-col gap-3">
          <h1 className="text-[24px]">Daftar</h1>
          <p className="text-color3 w-[19rem] text-[14px]">
            Mulai harimu dengan membaca ayat-ayat suci Al-quran.
          </p>
          <div className="mt-5 flex flex-col gap-4">
            <FloatingLabelInput icon={User} label={"Nama Lengkap"} />
            <FloatingLabelInput icon={Mail} label={"E-Mail"} />
            <FloatingLabelInput type="text" password icon={EyeClose} label={"Buat Password"} />
            <FloatingLabelInput type="text" password icon={EyeClose} label={"Ulangi Password"} />
          </div>
          <div className="bg-color1 mt-3 flex w-full cursor-pointer items-center justify-between rounded p-2 px-4 text-white">
            <div>Daftar</div>
            <img src={ArrowRight} className="h-5" />
          </div>
          <div className="text-color3 flex justify-center text-[12px]">atau daftar melalui</div>
          <div className="text-color3 flex justify-center gap-4">
            <img src={Google} className="h-8" />
            <img src={Facebook} className="h-8" />
          </div>
          <div className="text-color3 flex justify-center gap-2 text-[12px]">
            <p>Belum Punya Akun?</p>
            <Link to={"/"} className="text-color4 cursor-pointer">
              Masuk
            </Link>
          </div>
          <FooterIntroComponent />
        </div>
      </div>
    </div>
  );
};

export default Register;
