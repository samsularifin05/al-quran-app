import { useEffect, useState } from "react";
import { ArrowRight, Mail } from "../../assets";
import { FloatingLabelInput } from "../../components";
import IntroComponent from "./component/IntroComponent";

const LupaPassword = () => {
  const [otp, setotp] = useState(false);
  const [formOtp, setFormOtp] = useState(false);

  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (seconds !== 0) {
      if (otp) {
        interval = setInterval(() => {
          setSeconds(prevSeconds => prevSeconds - 1);
        }, 1000);
      }
    } else {
      setotp(false);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [otp, seconds]);

  const handleResendOtp = () => {
    setotp(true);
    setSeconds(60);
  };

  const displayTime: string = `${Math.floor(seconds / 60)}:${seconds % 60 < 10 ? "0" : ""}${seconds % 60}`;
  return (
    <div className="flex h-screen flex-col lg:flex-row">
      <IntroComponent />

      <div className="flex w-screen items-center justify-center">
        <div className="flex flex-col gap-3">
          <h1 className="text-[24px]">{formOtp ? "Verifikasi Otp" : "Lupa Password"}</h1>
          <p className="text-color3 w-[19rem] text-[14px]">
            {formOtp ? "Masukan Kode OTP" : "Masukan Email Otp akan dikirim ke email."}
          </p>
          {!formOtp && (
            <div className="mt-5 flex w-full flex-col gap-3">
              <FloatingLabelInput
                icon={Mail}
                label={"E-Mail"}
                onClick={() => {
                  setFormOtp(true);
                  setotp(true);
                }}
              />
            </div>
          )}
          {formOtp && (
            <div className="w-full">
              <div className="flex flex-row gap-2">
                <FloatingLabelInput
                  type="tel"
                  placeholder="Masukan Kode Otp"
                  postition="center"
                  label={""}
                />
              </div>
              <div className="bg-color1 mt-4 flex cursor-pointer items-center justify-between rounded p-2 px-4 text-white">
                <div>Kirim Otp</div>
                <img src={ArrowRight} className="h-5" />
              </div>
              <div className="text-color3 mt-3 flex justify-center gap-2 text-[12px]">
                <p>Tidak Menerima OTP? {seconds !== 0 && displayTime}</p>
                {seconds === 0 && (
                  <p
                    onClick={() => {
                      handleResendOtp();
                    }}
                    className="text-color4 cursor-pointer"
                  >
                    Kirim Ulang
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LupaPassword;
