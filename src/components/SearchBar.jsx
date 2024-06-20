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
        className="p-1 rounded-lg my-2  border-black border-2"
        placeholder="Search title.."
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </>
  );
}
