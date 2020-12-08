import React, { useEffect, useContext, useState } from "react";
import { useLocation } from "react-router-dom";

const WizardContext = React.createContext({
  currentPage: 1,
  changePage: () => {},
  pages: [],
  updatePages: () => {},
  category: "",
  updateCategory: () => {},
  questions: [],
  updateQuestions: () => {},
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

const Controls = ({ data }) => {
  const {
    category,
    currentPage,
    changePage,
    pages,
    updateQuestions,
  } = useContext(WizardContext);

  let validationSubmit;

  if (category === "personal") {
    validatePersonal();
  } else if (category === "hobbies") {
    validateHobbies();
  }

  function validatePersonal() {
    const { name, phoneNumber, dateOfBirth } = data;
    validationSubmit =
      name.length > 1 && phoneNumber.length > 8 && dateOfBirth.length > 8;
  }

  function validateHobbies() {
    const { favPet, musicBand, sport } = data;
    validationSubmit =
      favPet.length > 1 && musicBand.length > 1 && sport.length > 1;
  }

  const handleSubmit = () => {
    if (category === "personal") {
      const { name, phoneNumber, dateOfBirth } = data;
      updateQuestions([name, phoneNumber, dateOfBirth]);
    } else if (category === "hobbies") {
      const { favPet, musicBand, sport } = data;
      updateQuestions([favPet, musicBand, sport]);
    }
  };

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
      {currentPage === pages.length - 1 && (
        <button
          disabled={!validationSubmit}
          className="button is-success"
          onClick={handleSubmit}
        >
          Submit
        </button>
      )}
    </div>
  );
};

const Result = () => {
  const { questions } = useContext(WizardContext);
  return (
    <article className="message is-success">
      {questions.length > 0 && (
        <>
          <div className="message-header">
            <p>Your Answers</p>
          </div>
          <div className="message-body">
            {questions.map((item) => (
              <div>{item}</div>
            ))}
          </div>
        </>
      )}
    </article>
  );
};

const Wizard = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState([]);
  const [category, setCategory] = useState("");
  const [questions, setQuestions] = useState([]);
  const changePage = (newPage) => setCurrentPage(newPage);
  const updatePages = (page) => {
    if (!pages.includes(page)) setPages([...pages, page]);
  };
  const { pathname } = useLocation();
  const updateCategory = () => {
    setCategory(pathname.slice(1));
  };
  const updateQuestions = (data) => {
    setQuestions(data);
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
        questions,
        updateQuestions,
      }}
    >
      {children}
    </WizardContext.Provider>
  );
};

export { Page, Controls, Result, Wizard };
