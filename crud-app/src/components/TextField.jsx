import React from "react";

const TextField = ({ Inputlable, inputProps, onChange }) => {
  return (
    <div className="flex flex-col">
      <label className="text-lg mb-2 text-gray-800">{Inputlable}</label>
      <input
        className="bg-gray-200 px-2 py-3 outline-none border-2"
        type="text"
        {...inputProps}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;
