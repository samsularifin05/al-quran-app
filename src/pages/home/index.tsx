import { Logo, SosmedBiru, halaman, iconJuz, iconSerch, iconSurat, sortBy } from "../../assets";

const Home = () => {
  const items = Array.from({ length: 30 }, (_, index) => (
    <div key={index} className="cardItemSurat ">
      {" "}
      hai{" "}
    </div>
  ));

  document.body.style.backgroundColor = "#f2f2f2";
  return (
    <div className="relative">
      <div className="flex w-full header-bg-desktop ">
        <div className="flex flex-col items-center justify-center w-full gap-4">
          <div className="flex flex-row items-center gap-2 ">
            <img src={Logo} className="h-16" />
            <div className="flex flex-col">
              <p className="text-[30px] text-white">Alquran</p>
              <p className="-mt-2 text-white">Alquran.co.id</p>
            </div>
          </div>
          <div>
            <div className="relative w-full">
              <div className={`flex items-center`}>
                <input
                  className="ml-10 w-[500px] rounded p-3 text-[12px] placeholder-color1 outline-none"
                  placeholder="Pencarian Surah Dalam Al-quran "
                />
                <span className="absolute inset-y-0 right-0 z-10 flex items-center pr-3 cursor-pointer ">
                  <img src={iconSerch} alt="icon" className="w-4" />
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <h5 className="text-white">Sering Di Baca</h5>
            <div className="wrapperButtonseringDibaca">Alkahfi</div>
            <div className="wrapperButtonseringDibaca">Ayat Kursi</div>
            <div className="wrapperButtonseringDibaca">Albaqarah</div>
            <div className="wrapperButtonseringDibaca">ArRahman</div>
            <div className="wrapperButtonseringDibaca">Qof</div>
          </div>
          <div className="flex flex-row gap-5">
            <div className="flex items-center justify-center w-24 gap-1 p-2 rounded bg-color6 text-color2">
              <img src={iconSurat} className="h-7 w-7" />
              Surat
            </div>
            <div className="flex items-center justify-center w-24 gap-2 p-2 text-white rounded outline outline-white">
              <img src={iconJuz} className="w-6 h-7" />
              <p className="text-[18px]">Juz</p>
            </div>
            <div className="flex items-center justify-center gap-2 p-2 text-white rounded w-36 outline outline-white">
              <img src={halaman} className="w-6 h-7" />
              <p className="text-[18px]">Halaman</p>
            </div>
            <div className="flex items-center justify-center w-12 gap-2 p-2 text-white rounded outline outline-white">
              <img src={sortBy} className="w-20 h-5" />
            </div>
          </div>
        </div>
      </div>
      <div className="cardSurat relative top-[20rem] z-20 ">
        <div className="z-50 flex flex-wrap justify-center gap-6 px-48">{items}</div>
        <div className="flex w-full p-4 mt-4 bg-color7">
          {" "}
          <div className="flex justify-between w-full px-60">
            <p className="text-white">© 2023 Persis Software Labs, All Rights Reserved. </p>
            <img src={SosmedBiru} className="w-40 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
