import { IconBook, IconStartSurat, Iconmakiyyah } from "../../assets";
import { QuranSurahInterFace } from "../../interface";
import LoadingSkeleton from "./loadingSkeleton";
import { useEffect, useState } from "react";

interface Props {
  isLoading: boolean;
  isError: boolean;
  data: QuranSurahInterFace[];
}
const ListSuat = ({ isLoading, isError, data }: Props) => {
  const [loadingDelay, setLoadingDelay] = useState(true);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setLoadingDelay(false);
    }, 1000);

    return () => clearTimeout(delayTimer);
  }, []);

  if (isLoading || loadingDelay) return <LoadingSkeleton />;

  if (isError)
    return (
      <div className="flex items-center justify-center">
        <div>Error fetching data</div>
      </div>
    );

  if (data.length === 0) {
    return (
      <div className="w-full h-screen p-2 lg:mx-72">
        <div className="flex h-52 w-full items-center justify-center bg-white text-[25px]">
          Data Tidak Ada
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-4 mx-2 md:grid-cols-2 lg:grid-cols-3">
      {data &&
        data.map(list => (
          <div key={list.number} className="cardItemSurat">
            <div className="flex gap-2">
              <div className="flex items-center justify-center align-middle">
                <img src={IconStartSurat} className="w-10 h-10" />
                <div className="absolute text-[12px]">{list.number}</div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h2>{list.name_id}</h2>
                  <p className="text-[8px] text-color5">({list.translation_id})</p>
                </div>
                <div className="flex flex-row items-center gap-1">
                  <div className="flex items-center gap-1 px-1 py-1 text-center rounded bg-slate-200">
                    <img src={Iconmakiyyah} className="w-3 h-3" />
                    <p className="text-color6 text-[8px]">{list.revelation_id}</p>
                  </div>
                  <div className="flex w-1 h-1 rounded-full bg-slate-400"></div>
                  <div className="flex items-center gap-1 px-1 py-1 text-center rounded bg-slate-200">
                    <img src={IconBook} className="w-3 h-3" />
                    <p className="text-color6 text-[8px]">{list.number_of_verses} Ayat</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex font-lpmq">{list.name_short}</div>
          </div>
        ))}
    </div>
  );
};

export default ListSuat;
