export default function Button(params) {
  return (
    <>
      <button
        type={params.type}
        className="px-2 text-sm sm:text-base sm:p-2 rounded-lg bg-blue-700 text-white hover:bg-blue-800"
        onClick={params.fnc}
      >
        {params.buttonText}
      </button>
    </>
  );
}
