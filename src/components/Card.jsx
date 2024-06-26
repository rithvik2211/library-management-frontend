import { EllipsisVertical } from "lucide-react";
import { useState } from "react";
import Form from "./Form";
import { fetchData } from "../utils/fetchFunction";
import { deleteBook } from "../api/books.services";
import CardDetails from "./CardDetails";

export default function Card(param) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openFormToEdit, setOpenFormToEdit] = useState(false);
  const [openCardDetails, setCardDetails] = useState(false);

  const handleDropdownToggle = () => {
    console.log("hello dropdown");
    setOpenDropdown(!openDropdown);
    // Event.stopPropagation();
  };

  const handleCardDetails = (e) => {
    if (e.target instanceof SVGElement) {
      return;
    }
    console.log("hello from carddetails");
    setCardDetails(!openCardDetails);
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
    fetchData(deleteBook, param.upState, { id: param.id });
  };

  return (
    <>
      <div
        id={param.id}
        className="block w-full px-3 py-2 bg-[#d3e2f2] border border-gray-200 rounded-lg hover:bg-[#e7f0f8]"
        onClick={handleCardDetails}
      >
        <div className="dropdown relative">
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
          <h5 className="p-1 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 overflow-hidden  ">
            {param.title}
          </h5>
        </div>

        <p className=" font-semibold  text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 overflow-clip">
          {param.author}
        </p>
        <p className="font-normal text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 overflow-clip">
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

      {openCardDetails ? (
        <CardDetails Data={data} closeModalFnc={handleCardDetails} />
      ) : (
        <></>
      )}
    </>
  );
}
