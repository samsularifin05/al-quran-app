import { useQuery } from "react-query";
import { Logo, SosmedBiru, halaman, iconJuz, iconSerch, iconSurat, sortBy } from "../../assets";
import { ListSuat } from "../../components";
import { getData } from "../../helpers";
import { QuranSurahInterFace } from "../../interface";
import { useEffect, useState } from "react";

const Home = () => {
  document.body.style.backgroundColor = "#f2f2f2";
  const { data, isLoading, isError } = useQuery("getDataSurat", () => getData("quran/surat/semua"));

  const [dataTmp, setdataTmp] = useState(data?.data || []);

  const cariData = (e: string) => {
    const regex = new RegExp(`${e}`, "i");
    if (e === "") {
      //   dispatch(utilityActions.setDataNota<NotaInterFace[]>({ data: componenet }));
      setdataTmp(data.data);
    } else {
      const result = data.data.filter(
        (list: QuranSurahInterFace) => regex.test(list.translation_id) || regex.test(list.name_id)
      );
      setdataTmp(result);
    }
  };

  useEffect(() => {
    setdataTmp(data?.data);
  }, [data]);

  return (
    <div className="flex flex-col w-full header-bg-mobile lg:header-bg-desktop ">
      <div className="mt-[10rem] flex w-full flex-col items-center justify-center gap-4">
        <div className="flex flex-row items-center gap-2 ">
          <img src={Logo} className="h-16" />
          <div className="flex flex-col">
            <p className="text-[30px] text-white">Alquran</p>
            <p className="-mt-2 text-white">Alquran.co.id</p>
          </div>
        </div>
        <div className="flex w-full px-2 lg:px-[30rem]">
          <div className="relative w-full">
            <div className={`flex items-center`}>
              <input
                className="w-full rounded p-3 text-[12px] placeholder-color1 outline-none lg:w-[500px]"
                placeholder="Pencarian Surah Dalam Al-quran "
                onChange={e => cariData(e.target.value)}
              />
              <span className="absolute inset-y-0 right-0 z-10 flex items-center pr-3 cursor-pointer ">
                <img src={iconSerch} alt="icon" className="w-4" />
              </span>
            </div>
          </div>
        </div>
        <div className="scrollbar-hide flex w-[22rem] items-center gap-2 overflow-y-auto text-nowrap px-2 lg:w-full lg:justify-center">
          <h5 className="flex text-[12px] text-white">Sering Di Baca</h5>
          <div className="wrapperButtonseringDibaca">Alkahfi</div>
          <div className="wrapperButtonseringDibaca">Ayat Kursi</div>
          <div className="wrapperButtonseringDibaca">Albaqarah</div>
          <div className="wrapperButtonseringDibaca">ArRahman</div>
          <div className="wrapperButtonseringDibaca">Qof</div>
        </div>
        <div className="flex flex-row gap-5">
          <div className="flex items-center justify-center gap-1 p-2 rounded bg-color6 text-color2 lg:w-24">
            <img src={iconSurat} className="w-4 h-4 lg:h-7 lg:w-6" />
            <p className="text-[10px] lg:text-[13px]">Surat</p>
          </div>
          <div className="flex items-center justify-center gap-2 p-2 text-white rounded outline outline-white lg:w-24">
            <img src={iconJuz} className="w-4 h-4 lg:h-7 lg:w-6" />
            <p className="text-[10px] lg:text-[18px]">Juz</p>
          </div>
          <div className="flex items-center justify-center gap-2 p-2 text-white rounded outline outline-white lg:w-36">
            <img src={halaman} className="w-4 h-4 lg:h-7 lg:w-6" />
            <p className="text-[10px] lg:text-[18px]">Halaman</p>
          </div>
          <div className="flex items-center justify-center gap-2 p-2 text-white rounded outline outline-white lg:w-12">
            <img src={sortBy} className="w-4 h-4 lg:h-7 lg:w-7" />
          </div>
        </div>
      </div>
      <div className="z-20 mt-10 cardSurat">
        <ListSuat isLoading={isLoading} isError={isError} data={dataTmp} />
      </div>
      <div className="flex w-full p-4 mt-4 bg-color7">
        <div className="flex justify-between w-full">
          <p className="text-white">© 2023 Persis Software Labs, All Rights Reserved. </p>
          <img src={SosmedBiru} className="w-40 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Home;
