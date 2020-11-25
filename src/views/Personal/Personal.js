import React, { useReducer } from "react";
import styled from "./Personal.module.scss";
import * as MultiStep from "../../components/MultiStep/Multistep";

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
        <MultiStep.Page pageIndex={1}>
          <div className="box">
            <p className="subtitle is-3">What is your name?</p>
            <div className="control">
              <input
                name="name"
                value={inputData.name}
                onChange={setAnswer}
                className="input is-rounded"
                type="text"
                placeholder="Your name..."
              ></input>
            </div>
          </div>
        </MultiStep.Page>
        <MultiStep.Page pageIndex={2}>
          <div className="box">
            <p className="subtitle is-3">What is your phone number? </p>
            <p className="subtitle is-5">( 9 number characters )</p>
            <div className="control">
              <input
                name="phoneNumber"
                value={inputData.phoneNumber}
                onChange={setAnswer}
                className="input is-rounded"
                type="tel"
                placeholder="Your phone number..."
              ></input>
            </div>
          </div>
        </MultiStep.Page>
        <MultiStep.Page pageIndex={3}>
          <div className="box">
            <p className="subtitle is-3">What is your date of birth?</p>
            <div className="control">
              <input
                name="dateOfBirth"
                value={inputData.dateOfBirth}
                onChange={setAnswer}
                className="input is-rounded"
                type="date"
              ></input>
            </div>
          </div>
        </MultiStep.Page>
        <div className={styled.innerWrapper}>
          <MultiStep.Controls data={inputData} />
        </div>
      </MultiStep.Wizard>
    </div>
  );
};

export default Personal;
