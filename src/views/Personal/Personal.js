import React from "react";
import * as MultiStep from "../../components/MultiStep/Multistep";

const Personal = () => {
  return (
    <MultiStep.Wizard>
      <MultiStep.Page>Question 1</MultiStep.Page>
      <MultiStep.Page>Question 2</MultiStep.Page>
      <MultiStep.Controls />
    </MultiStep.Wizard>
  );
};

export default Personal;
