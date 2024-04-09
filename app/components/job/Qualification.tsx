import React from "react";
import PlaceHolder from "./PlaceHolder";

const Qualification = () => {
  return (
    <>
      <PlaceHolder text="Qualification" />
      <div className="pl-4 mt-4">
        <ul className="list-disc">
          <li style={{color:'black'}}>
            Final Year student pursuing Bachelor or Integrated Masters degree in
            Engineering.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Qualification;
