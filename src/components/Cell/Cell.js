import React from "react";
import { Button } from "antd";

const Cell = props => {
  const { value, onClick, cMenu } = props;

  const getValue = value => {
    if (!value.isRevealed) return value.isFlagged ? "🚩" : null;
    if (value.isMine) return "💣";
    if (value.neighbour === 0) return null;

    return value.neighbour;
  };

  return (
    <>
      <Button onClick={onClick} onContextMenu={cMenu}>
        {getValue(value)}
      </Button>
    </>
  );
};

export default Cell;
