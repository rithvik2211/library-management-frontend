import { useState } from "react";
import { fetchData } from "../utils/fetchFunction";
import { getAllBooks } from "../api/books.services";

export default function SearchBar(params) {
  const [title, setTitle] = useState("");
  //   document.addEventListener(onKeyDown, )
  const handleKeyDown = (e) => {
    // console.log(e);
    if (e.code == "Enter") fetchData(getAllBooks, params.setData, { title });
  };

  return (
    <>
      <input
        type="text"
        name="title"
        className="p-1 sm:my-2 md:my-4 w-[45%] sm:w-[35%] md:w-[33%] lg:w-[30%] xl:w-[25%] rounded-lg my-2  border-black border-2"
        placeholder="Search Title or Author.."
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </>
  );
}
