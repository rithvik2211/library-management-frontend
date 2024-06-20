import { useEffect, useState } from "react";
import Button from "./Button";
import { fetchData } from "../utils/fetchFunction";
import { addNewBook, updateBook } from "../api/books.services";

export default function Form(params) {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    author: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  let handleSubmit = () => {};

  useEffect(() => {
    if (params.Data) {
      setFormData(params.Data);
    }
  }, []);

  if (params.Data) {
    handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
      fetchData(updateBook, params.upState, formData);
      // console.log('Form data submitted:', formData);
    };
  } else {
    handleSubmit = (e) => {
      e.preventDefault();
      fetchData(addNewBook, params.upState, formData);
      // console.log('Form data submitted:', formData);
    };
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="absolute bg-[#f2f7fb] left-0 right-0 max-w-[25%] mx-auto shadow-md  p-6  rounded-md z-20"
      >
        <div className="flex justify-end">
          <button
            className="hover:bg-[#e7f0f8] p-1 px-2 rounded-lg"
            onClick={params.closeModalFnc}
          >
            X
          </button>
        </div>
        <div className="mb-5">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Title
          </label>
          <input
            name="title"
            type="text"
            id="title"
            value={formData.title}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="author"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Author
          </label>
          <input
            name="author"
            id="author"
            value={formData.author}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-5"
            required
          />
        </div>
        {/* <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button> */}
        <Button type={"submit"} buttonText={"Submit"} />
      </form>
    </>
  );
}
