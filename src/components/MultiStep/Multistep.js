import React, { useEffect, useState, useContext } from "react";

const WizardContext = React.createContext({
  currentPage: 1,
  changePage: () => {},
  pages: [],
  updatePages: () => {},
});

const Page = ({ children, pageIndex }) => {
  const { currentPage, updatePages } = useContext(WizardContext);

  useEffect(() => {
    updatePages(pageIndex);
  });
  return currentPage === pageIndex ? children : null;
};

const Controls = () => {
  const { currentPage, changePage, pages } = useContext(WizardContext);
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
      {currentPage === pages.length - 1 ? (
        <button className="button is-success">Submit</button>
      ) : null}
    </div>
  );
};

const Wizard = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState([]);
  const changePage = (newPage) => setCurrentPage(newPage);
  const updatePages = (page) => {
    if (!pages.includes(page)) setPages([...pages, page]);
  };

  return (
    <WizardContext.Provider
      value={{
        currentPage,
        changePage,
        pages,
        updatePages,
      }}
    >
      {children}
    </WizardContext.Provider>
  );
};

export { Page, Controls, Wizard };
