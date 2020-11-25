import React, { useEffect, useContext, useState } from "react";
import { useLocation } from "react-router-dom";

const WizardContext = React.createContext({
  currentPage: 1,
  changePage: () => {},
  pages: [],
  updatePages: () => {},
  category: "",
  updateCategory: () => {},
});

const Page = ({ children, pageIndex }) => {
  const { currentPage, updatePages, updateCategory } = useContext(
    WizardContext
  );

  useEffect(() => {
    updatePages(pageIndex);
    updateCategory();
  });

  return currentPage === pageIndex ? children : null;
};

const Controls = ({ data: { name, phoneNumber, dateOfBirth } }) => {
  const { category, currentPage, changePage, pages } = useContext(
    WizardContext
  );
  const validationPersonalSubmit =
    name.length > 1 && phoneNumber.length > 8 && dateOfBirth.length > 8;

  return (
    <div>
      <button
        className="button is-info"
        disabled={currentPage === 0}
        onClick={() => changePage(currentPage - 1)}
      >
        Previous
      </button>
      <button
        className="button is-info"
        disabled={currentPage === pages.length - 1}
        onClick={() => changePage(currentPage + 1)}
      >
        Next
      </button>
      {currentPage === pages.length - 1 &&
        (category === "personal" ? (
          <button
            disabled={!validationPersonalSubmit}
            className="button is-success"
          >
            Submit
          </button>
        ) : (
          <button disabled={true} className="button is-success">
            Submit
          </button>
        ))}
    </div>
  );
};

const Wizard = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState([]);
  const [category, setCategory] = useState("");
  const changePage = (newPage) => setCurrentPage(newPage);
  const updatePages = (page) => {
    if (!pages.includes(page)) setPages([...pages, page]);
  };
  const { pathname } = useLocation();
  const updateCategory = () => {
    setCategory(pathname.slice(1));
  };

  return (
    <WizardContext.Provider
      value={{
        currentPage,
        changePage,
        pages,
        updatePages,
        category,
        updateCategory,
      }}
    >
      {children}
    </WizardContext.Provider>
  );
};

export { Page, Controls, Wizard };
