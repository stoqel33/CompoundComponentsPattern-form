import React from "react";
import styled from "./Personal.module.scss";
import * as MultiStep from "../../components/MultiStep/Multistep";

const Personal = () => {
  return (
    <div className={styled.wrapper}>
      <MultiStep.Wizard>
        <MultiStep.Page pageIndex={0}>
          <div class={styled.innerWrapper}>
            <p class="subtitle is-3">You will see some personal questions</p>
            <p class="subtitle is-5">Let's get started!</p>
          </div>
        </MultiStep.Page>
        <MultiStep.Page pageIndex={1}>
          <div className="box">
            <p class="subtitle is-3">What is your name?</p>
            <div class="control">
              <input
                class="input is-rounded"
                type="text"
                placeholder="Your name..."
              ></input>
            </div>
          </div>
        </MultiStep.Page>
        <MultiStep.Page pageIndex={2}>
          <div className="box">
            <p class="subtitle is-3">What is your phone number?</p>
            <div class="control">
              <input
                class="input is-rounded"
                type="tel"
                placeholder="Your phone number..."
              ></input>
            </div>
          </div>
        </MultiStep.Page>
        <MultiStep.Page pageIndex={3}>
          <div className="box">
            <p class="subtitle is-3">What is your date of birth?</p>
            <div class="control">
              <input class="input is-rounded" type="date"></input>
            </div>
          </div>
        </MultiStep.Page>
        <div className={styled.innerWrapper}>
          <MultiStep.Controls />
        </div>
      </MultiStep.Wizard>
    </div>
  );
};

export default Personal;
