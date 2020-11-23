import React from "react";

const Page = ({ children }) => {
  return <div>{children}</div>;
};

const Controls = () => {
  return (
    <div>
      <button>Previous</button>
      <button>Next</button>
      <button>Submit</button>
    </div>
  );
};

const Wizard = ({ children }) => {
  return <div>{children}</div>;
};

export { Page, Controls, Wizard };
