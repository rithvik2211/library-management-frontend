export default function CardDetails(params) {
  return (
    <>
      <div
        className=" bg-[#b2b6ba57] absolute top-0 left-0 right-0 w-full h-full z-20"
        onClick={params.closeModalFnc}
      >
        <div className="bg-[#d3e2f2] w-[40%] mx-auto p-7 rounded-lg relative top-[40%]">
          <h5 className="text-xl p-1 sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 overflow-auto">
            {params.Data.title}
          </h5>
          <p className=" font-semibold p-1  text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 overflow-auto">
            {params.Data.author}
          </p>
          <p className="font-normal p-1 text-xs sm:text-sm md:text-base lg:text-lg text-gray-700  overflow-auto">
            {params.Data.description}
          </p>
        </div>
      </div>
    </>
  );
}
