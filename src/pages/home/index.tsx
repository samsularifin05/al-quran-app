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
    <div className="header-bg-mobile lg:header-bg-desktop flex w-full flex-col ">
      <div className="mt-[6.5rem] flex w-full flex-col items-center justify-center gap-4">
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
              <span className="absolute inset-y-0 right-0 z-10 flex cursor-pointer items-center pr-3 ">
                <img src={iconSerch} alt="icon" className="w-4" />
              </span>
            </div>
          </div>
        </div>
        <div className="scrollbar-hide flex w-[22rem] items-center gap-2 overflow-y-auto text-nowrap px-2 lg:w-full lg:justify-center">
          <h5 className="flex cursor-pointer text-[12px] text-white">Sering Di Baca</h5>
          <div className="wrapperButtonseringDibaca">Alkahfi</div>
          <div className="wrapperButtonseringDibaca">Ayat Kursi</div>
          <div className="wrapperButtonseringDibaca">Albaqarah</div>
          <div className="wrapperButtonseringDibaca">ArRahman</div>
          <div className="wrapperButtonseringDibaca">Qof</div>
        </div>
        <div className="flex flex-row gap-5">
          <div className="tabMenuActive">
            <img src={iconSurat} className="h-4 w-4 lg:h-7 lg:w-6" />
            <p className="text-[10px] lg:text-[13px]">Surat</p>
          </div>
          <div className="tabMenuNoActive">
            <img src={iconJuz} className="h-4 w-4 lg:h-7 lg:w-6" />
            <p className="text-[10px] lg:text-[18px]">Juz</p>
          </div>
          <div className="tabMenuNoActive">
            <img src={halaman} className="h-4 w-4 lg:h-7 lg:w-6" />
            <p className="text-[10px] lg:text-[18px]">Halaman</p>
          </div>
          <div className="tabMenuNoActive">
            <img src={sortBy} className="h-4 w-4 lg:h-7 lg:w-7" />
          </div>
        </div>
      </div>
      <div className="cardSurat z-20 mt-5">
        <ListSuat isLoading={isLoading} isError={isError} data={dataTmp} />
      </div>
      <div className="mt-4 flex w-full bg-color7 p-4">
        <div className="flex w-full justify-between">
          <p className="text-white">© 2023 Persis Software Labs, All Rights Reserved. </p>
          <img src={SosmedBiru} className="h-6 w-40" />
        </div>
      </div>
    </div>
  );
};

export default Home;
