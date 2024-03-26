import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, EyeClose, Facebook, Google, Mail } from "../../assets";
import { FloatingLabelInput } from "../../components";
import IntroComponent from "./component/IntroComponent";
import FooterIntroComponent from "./component/footerIntroComponent";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col lg:flex-row">
      <IntroComponent />

      <div className="flex h-screen w-full items-center justify-center ">
        <div className="flex flex-col gap-3">
          <h1 className="text-[24px]">Masuk</h1>
          <p className="w-[19rem] text-[14px] text-color3">
            Mulai harimu dengan membaca ayat-ayat suci Al-quran.
          </p>
          <div className="mt-5 flex flex-col gap-3">
            <FloatingLabelInput icon={Mail} label={"E-Mail"} />
            <FloatingLabelInput type="text" password icon={EyeClose} label={"Password"} />
          </div>

          <Link
            to={"/lupa-password"}
            className="mt-2 flex cursor-pointer justify-end text-[12px] text-color4"
          >
            Lupa Password ?
          </Link>

          <div
            onClick={() => navigate("/home")}
            className="flex w-full cursor-pointer items-center justify-between rounded bg-color1 p-2 px-4 text-white"
          >
            <div>Masuk</div>
            <img src={ArrowRight} className="h-5" />
          </div>
          <div className="flex justify-center text-[12px] text-color3">atau login melalui</div>
          <div className="flex justify-center gap-4 text-color3">
            <img src={Google} className="h-8" />
            <img src={Facebook} className="h-8" />
          </div>
          <div className="flex justify-center gap-2 text-[12px] text-color3">
            <p>Belum Punya Akun?</p>
            <Link to={"/register"} className="cursor-pointer text-color4">
              Daftar
            </Link>
          </div>
          <FooterIntroComponent />
        </div>
      </div>
    </div>
  );
};

export default Login;
