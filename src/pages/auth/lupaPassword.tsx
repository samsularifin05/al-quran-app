import { useEffect, useState } from "react";
import { ArrowRight, Mail } from "../../assets";
import { FloatingLabelInput } from "../../components";
import IntroComponent from "./component/IntroComponent";
import InputOtpComponent from "./component/inputOtp";
import { Link } from "react-router-dom";

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

  const [email, setemail] = useState("");

  const displayTime: string = `${Math.floor(seconds / 60)}:${seconds % 60 < 10 ? "0" : ""}${seconds % 60}`;
  return (
    <div className="flex h-screen flex-col lg:flex-row">
      <IntroComponent />

      <div className="flex w-screen items-center justify-center">
        <div className="flex flex-col gap-3">
          <h1 className="text-[24px]">{formOtp ? "Verifikasi Otp" : "Lupa Password"}</h1>
          <p className="w-[19rem] text-[14px] text-color3">
            {formOtp ? "Masukan Kode OTP" : "Masukan Email Otp akan dikirim ke email."}
          </p>
          {!formOtp && (
            <div className="mt-5 flex w-full flex-col gap-3">
              <FloatingLabelInput
                icon={Mail}
                label={"E-Mail"}
                error={email !== "" ? false : true}
                messageEror="Email Harus Diisi"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setemail(e.target.value)}
                onClick={() => {
                  if (email !== "") {
                    setFormOtp(true);
                    setotp(true);
                  }
                }}
              />
            </div>
          )}
          {formOtp && (
            <div className="w-80">
              <div className="flex flex-row gap-2">
                <InputOtpComponent />
              </div>
              <Link
                to="/konfirmasi-password"
                className="mt-4 flex cursor-pointer items-center justify-between rounded bg-color1 p-2 px-4 text-white"
              >
                <div>Verifikasi Otp</div>
                <img src={ArrowRight} className="h-5" />
              </Link>
              <div className="mt-3 flex justify-center gap-2 text-[12px] text-color3">
                <p>Tidak Menerima OTP? {seconds !== 0 && displayTime}</p>
                {seconds === 0 && (
                  <p
                    onClick={() => {
                      handleResendOtp();
                    }}
                    className="cursor-pointer text-color4"
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
