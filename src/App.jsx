import { useEffect, useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Form from "./components/Form";
import Header from "./components/Header";
import { getAllBooks } from "./api/books.services.js";
import { fetchData } from "./utils/fetchFunction.js";
import SearchBar from "./components/SearchBar.jsx";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [fetchAgain, setFetchAgain] = useState(false);
  const [page, setPage] = useState(0);

  const toggelFetchAgain = () => {
    setFetchAgain(!fetchAgain);
  };

  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };
  const handleNext = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    console.log(fetchAgain);
    fetchData(getAllBooks, setData, { page });
  }, [fetchAgain, page]);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header />

      <main className="flex justify-center  mt-16 sm:mt-20">
        <div className=" w-full mx-10">
          <section>
            <div className="flex flex-row justify-between my-3">
              <p className="text-2xl sm:text-3xl">Books:</p>

              <Button buttonText="+ Add New Book" fnc={openModal} />
            </div>
            {isModalOpen ? (
              <Form closeModalFnc={closeModal} upState={toggelFetchAgain} />
            ) : (
              <></>
            )}
          </section>

          <section className="mb-10">
            <SearchBar setData={setData} />
            {data && data.length > 0 ? (
              <>
                <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 sm:grid-cols-2">
                  {data.map((ele) => {
                    return (
                      <Card
                        key={ele.id}
                        id={ele.id}
                        title={ele.title}
                        description={ele.description}
                        author={ele.author}
                        upState={toggelFetchAgain}
                        // getData={getData}
                      />
                    );
                  })}
                </div>
              </>
            ) : (
              <>
                <div className="">
                  <h1 className="text-center  font-sans text-2xl">
                    Oops! You don&apos;t have books in catelogue. Add books to
                    your library.
                  </h1>
                </div>
              </>
            )}
            <div className="flex flex-row justify-end mt-2">
              <div>
                <button
                  className="px-1 sm:px-2 md:py-1 md:px-3 mx-2 rounded-lg border-solid border-2 border-black bg-gray-200 hover:bg-gray-50"
                  onClick={handlePrev}
                >
                  Prev
                </button>
                <button
                  className="px-1 sm:px-2 md:py-1 md:px-3 mx-2 rounded-lg border-solid border-2 border-black bg-gray-200 hover:bg-gray-50"
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
