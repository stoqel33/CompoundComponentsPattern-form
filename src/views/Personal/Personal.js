import React, { useReducer } from "react";
import styled from "./Personal.module.scss";
import * as MultiStep from "../../components/MultiStep/Multistep";

const questions = [
  {
    id: 1,
    text: "What is your name?",
    name: "name",
    type: "text",
    placeholder: "Your name...",
  },
  {
    id: 2,
    text: "What is your phone number?",
    name: "phoneNumber",
    type: "tel",
    placeholder: "Your phone number...",
  },
  {
    id: 3,
    text: "What is your date of birth?",
    name: "dateOfBirth",
    type: "date",
    placeholder: "",
  },
];

const Personal = () => {
  const [inputData, setInputData] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: "",
      phoneNumber: "",
      dateOfBirth: "",
    }
  );
  const setAnswer = (e) => {
    setInputData({
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styled.wrapper}>
      <MultiStep.Wizard>
        <MultiStep.Page pageIndex={0}>
          <div className={styled.innerWrapper}>
            <p className="subtitle is-3">
              You will see some personal questions
            </p>
            <p className="subtitle is-5">Let's get started!</p>
          </div>
        </MultiStep.Page>
        {questions.map((question) => {
          let value;

          switch (question.name) {
            case "name":
              value = inputData.name;
              break;
            case "phoneNumber":
              value = inputData.phoneNumber;
              break;
            case "dateOfBirth":
              value = inputData.dateOfBirth;
              break;
            default:
              break;
          }

          return (
            <MultiStep.Page pageIndex={question.id} key={question.id}>
              <div className="box">
                <p className="subtitle is-3">{question.text}</p>
                {question.type === "tel" && (
                  <p className="subtitle is-5">( 9 number characters )</p>
                )}
                <div className="control">
                  <input
                    name={question.name}
                    value={value}
                    onChange={setAnswer}
                    className="input is-rounded"
                    type={question.type}
                    placeholder={question.placeholder}
                  ></input>
                </div>
              </div>
            </MultiStep.Page>
          );
        })}
        <div className={styled.innerWrapper}>
          <MultiStep.Controls data={inputData} />
        </div>
        <MultiStep.ProgessBar />
        <MultiStep.Result />
      </MultiStep.Wizard>
    </div>
  );
};

export default Personal;
