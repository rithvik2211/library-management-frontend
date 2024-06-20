import { EllipsisVertical } from "lucide-react";
import { useState } from "react";
import Form from "./Form";
import { fetchData } from "../utils/fetchFunction";
import { deleteBook } from "../api/books.services";

export default function Card(param) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openFormToEdit, setOpenFormToEdit] = useState(false);

  const handleDropdownToggle = () => {
    setOpenDropdown(!openDropdown);
  };

  const handleOpenForm = () => {
    setOpenFormToEdit(!openFormToEdit);
    console.log(openFormToEdit);
    console.log(data);
    if (!openFormToEdit) {
      handleDropdownToggle();
    }
  };

  const data = {
    id: param.id,
    title: param.title,
    author: param.author,
    description: param.description,
  };

  const handleDelete = () => {
    // const upstate = param.upState;
    // console.log(param.upState);
    fetchData(deleteBook, param.upState, { id: param.id });
  };

  return (
    <>
      <div
        id={param.id}
        className="block max-w-sm px-6 py-3 bg-[#d3e2f2] border border-gray-200 rounded-lg hover:bg-[#e7f0f8]"
      >
        <div className="relative">
          <button
            className="absolute right-0 p-1 z-10"
            onClick={handleDropdownToggle}
          >
            <EllipsisVertical />
          </button>
          {openDropdown ? (
            <div className=" absolute right-0 top-8 z-10 w-20 text-start bg-white rounded">
              <ul>
                <li
                  className="my-1 px-1 hover:bg-gray-100"
                  onClick={handleOpenForm}
                >
                  EDIT
                </li>
                <li
                  className="my-1  px-1 text-red-500 hover:bg-gray-100"
                  onClick={handleDelete}
                >
                  DELETE
                </li>
              </ul>
            </div>
          ) : (
            <></>
          )}
        </div>

        <div className="flex justify-between">
          <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 ">
            {param.title}
          </h5>
        </div>

        <p className=" font-semibold text-xl text-gray-700">{param.author}</p>
        <p className="font-normal text-gray-700 overflow-clip">
          {param.description}
        </p>
      </div>
      {openFormToEdit ? (
        <Form
          Data={data}
          upState={param.upState}
          closeModalFnc={handleOpenForm}
        />
      ) : (
        <></>
      )}
    </>
  );
}
