const LoadingSkeleton = () => {
  return (
    <div className="grid gap-4 mx-2 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 30 }, (_, index) => (
        <div
          key={index}
          className="flex items-center w-full h-20 gap-2 p-2 bg-white rounded shadow lg:w-72"
        >
          <div className="flex gap-2 animate-pulse">
            <div className="flex items-center justify-center align-middle">
              <div className="w-10 h-10 rounded-full bg-slate-400"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <div className="w-full h-2 rounded bg-slate-400"></div>
                <div className="w-4 h-2 rounded bg-slate-400"></div>
              </div>
              <div className="mt-2 space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 col-span-2 rounded w-52 bg-slate-400"></div>
                  <div className="h-2 col-span-1 rounded bg-slate-400"></div>
                </div>
                <div className="h-2 rounded bg-slate-400"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;
