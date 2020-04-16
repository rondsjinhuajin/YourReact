import React from "react";

const Square = (props) => {
  const { value, onClick } = props;
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

Square.defaultProps = {
  value: "",
  onClick: () => {},
};

export default Square;
