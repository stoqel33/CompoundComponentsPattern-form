import React, { useReducer } from "react";
import styled from "../Personal/Personal.module.scss";
import * as MultiStep from "../../components/MultiStep/Multistep";

const questions = [
  {
    id: 1,
    text: "What is your favourite pet?",
    name: "favPet",
    type: "text",
    placeholder: "Your answer...",
  },
  {
    id: 2,
    text: "What is your favorite music band?",
    name: "musicBand",
    type: "text",
    placeholder: "Your answer...",
  },
  {
    id: 3,
    text: "Do you play sports? If yes, what kind of sports?",
    name: "sport",
    type: "text",
    placeholder: "Your answer...",
  },
];

const Hobbies = () => {
  const [inputData, setInputData] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      favPet: "",
      musicBand: "",
      sport: "",
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
            <p className="subtitle is-3">You will see some hobbies questions</p>
            <p className="subtitle is-5">Let's get started!</p>
          </div>
        </MultiStep.Page>
        {questions.map((question) => {
          let value;

          switch (question.name) {
            case "favPet":
              value = inputData.favPet;
              break;
            case "musicBand":
              value = inputData.musicBand;
              break;
            case "sport":
              value = inputData.sport;
              break;
            default:
              break;
          }

          return (
            <MultiStep.Page pageIndex={question.id} key={question.id}>
              <div className="box">
                <p className="subtitle is-3">{question.text}</p>
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
        <MultiStep.Result />
      </MultiStep.Wizard>
    </div>
  );
};

export default Hobbies;
