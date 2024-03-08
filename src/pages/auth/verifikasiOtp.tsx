import { ArrowRight, Mail } from "../../assets";
import { FloatingLabelInput } from "../../components";
import IntroComponent from "./component/IntroComponent";

const VerifikasiOtp = () => {
  return (
    <div className="flex h-screen flex-col lg:flex-row">
      <IntroComponent />

      <div className="flex h-screen w-full items-center justify-center ">
        <div className="flex flex-col gap-3">
          <h1 className="text-[24px]">Verifikasi Otp</h1>
          <p className="text-color3 w-[19rem] text-[14px]">
            Masukan Email Otp akan dikirim ke email.
          </p>
          <div className="mt-5 flex flex-col gap-3">
            <FloatingLabelInput icon={Mail} label={"E-Mail"} />
          </div>

          <div className="bg-color1 flex w-full cursor-pointer items-center justify-between rounded p-2 px-4 text-white">
            <div>Kirim Otp</div>
            <img src={ArrowRight} className="h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifikasiOtp;
