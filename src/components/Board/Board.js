import React, { useState } from "react";
import Cell from "../Cell";
const Board = props => {
  const { height, width, mines } = props;
  const [gameStatus, setGameStatus] = useState("");
  const [mineCount, setMineCount] = useState(mines);

  /* Helper Functions */

  // get mines
  const getMines = data => {
    let mineArray = [];

    data.map(datarow => {
      datarow.map(dataitem => {
        if (dataitem.isMine) {
          mineArray.push(dataitem);
        }
      });
    });

    return mineArray;
  };

  // get Flags
  const getFlags = data => {
    let mineArray = [];

    data.map(datarow => {
      datarow.map(dataitem => {
        if (dataitem.isFlagged) {
          mineArray.push(dataitem);
        }
      });
    });

    return mineArray;
  };

  // get Hidden cells
  const getHidden = data => {
    let mineArray = [];

    data.map(datarow => {
      datarow.map(dataitem => {
        if (!dataitem.isRevealed) {
          mineArray.push(dataitem);
        }
      });
    });

    return mineArray;
  };

  // get random number given a dimension
  const getRandomNumber = dimension => {
    // return Math.floor(Math.random() * dimension);
    return Math.floor(Math.random() * 1000 + 1) % dimension;
  };

  const createEmptyArray = (height, width) => {
    let data = [];
    for (let i = 0; i < height; i++) {
      data.push([]);
      for (let j = 0; j < width; j++) {
        data[i][j] = {
          x: i,
          y: j,
          isMine: false,
          neighbour: 0,
          isRevealed: false,
          isEmpty: false,
          isFlagged: false,
        };
      }
    }
    return data;
  };

  const plantMines = (data, height, width, mines) => {
    let randomx,
      randomy,
      minesPlanted = 0;
    while (minesPlanted < mines) {
      randomx = getRandomNumber(width);
      randomy = getRandomNumber(height);
      if (!data[randomx][randomy].isMine) {
        data[randomx][randomy].isMine = true;
        minesPlanted++;
      }
    }
    return data;
  };

  const traverseBoard = (x, y, data) => {
    const el = [];
    //up
    if (x > 0) {
      el.push(data[x - 1][y]);
    }
    //down
    if (x < height - 1) {
      el.push(data[x + 1][y]);
    }
    //left
    if (y > 0) {
      el.push(data[x][y - 1]);
    }
    //right
    if (y < width - 1) {
      el.push(data[x][y + 1]);
    }
    // top left
    if (x > 0 && y > 0) {
      el.push(data[x - 1][y - 1]);
    }
    // top right
    if (x > 0 && y < width - 1) {
      el.push(data[x - 1][y + 1]);
    }
    // bottom right
    if (x < height - 1 && y < width - 1) {
      el.push(data[x + 1][y + 1]);
    }
    // bottom left
    if (x < height - 1 && y > 0) {
      el.push(data[x + 1][y - 1]);
    }
    return el;
  };

  const getNeighbours = (data, height, width) => {
    let updatedData = data;
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        if (data[i][j].isMine !== true) {
          let mine = 0;
          const area = traverseBoard(data[i][j].x, data[i][j].y, data);
          area.map(value => {
            if (value.isMine) {
              mine++;
            }
          });
          if (mine === 0) {
            updatedData[i][j].isEmpty = true;
          }
          updatedData[i][j].neighbour = mine;
        }
      }
    }
    return updatedData;
  };

  const initBoardData = (height, width, mines) => {
    let data = createEmptyArray(height, width);
    data = plantMines(data, height, width, mines);
    data = getNeighbours(data, height, width);
    return data;
  };

  const [boardData, setBoardData] = useState(initBoardData(height, width, mines));

  const revealEmpty = (x, y, data) => {
    let area = traverseBoard(x, y, data);
    area.map(value => {
      if (!value.isFlagged && !value.isRevealed && (value.isEmpty || !value.isMine)) {
        data[value.x][value.y].isRevealed = true;
        if (value.isEmpty) {
          revealEmpty(value.x, value.y, data);
        }
      }
    });
    return data;
  };

  // reveals the whole board
  const revealBoard = () => {
    let updatedData = boardData;
    updatedData.map(datarow => {
      datarow.map(dataitem => {
        dataitem.isRevealed = true;
      });
    });
    setBoardData(updatedData);
  };

  const handleCellClick = (x, y) => {
    console.log("hihi");
    console.log(boardData);
    // check if revealed. return if true.
    if (boardData[x][y].isRevealed || boardData[x][y].isFlagged) return null;
    // check if mine. game over if true
    if (boardData[x][y].isMine) {
      setGameStatus("You Lost.");
      revealBoard();
      alert("game over");
    }
    let updatedData = boardData;

    if (updatedData[x][y].isEmpty) {
      updatedData = revealEmpty(x, y, updatedData);
    }
    // Số lượng ô chưa mở bằng tổng số mìn => Win
    if (getHidden(updatedData).length === mines) {
      setGameStatus("You Win.");
      revealBoard();
      alert("You Win");
    }
    // this.setState({
    //   boardData: updatedData,
    //   mineCount: this.props.mines - this.getFlags(updatedData).length,
    //   gameWon: win,
    // });
    setBoardData(updatedData);
    setMineCount(mines - getFlags(updatedData).length);
  };

  const handleContextMenu = (event, x, y) => {
    event.preventDefault(); // prevents default behaviour (i.e. right click menu on browsers.)
    let updatedData = boardData;
    let mines = mineCount;

    // check if already revealed
    if (updatedData[x][y].isRevealed) return;
    if (updatedData[x][y].isFlagged) {
      updatedData[x][y].isFlagged = false;
      mines++;
    } else {
      updatedData[x][y].isFlagged = true;
      mines--;
    }
    if (mines === 0) {
      const mineArray = getMines(updatedData);
      const FlagArray = getFlags(updatedData);
      //trùng nhau => Win
      if (JSON.stringify(mineArray) === JSON.stringify(FlagArray)) {
        revealBoard();
        alert("You Win");
      }
    }
    // this.setState({
    //   boardData: updatedData,
    //   mineCount: mines,
    //   gameWon: win,
    // });

    setBoardData(updatedData);
    setMineCount(mines);
  };
  const renderBoard = data => {
    return data.map(datarow => {
      return datarow.map(dataitem => {
        return (
          <span key={dataitem.x * datarow.length + dataitem.y}>
            <Cell
              onClick={() => handleCellClick(dataitem.x, dataitem.y)}
              cMenu={e => handleContextMenu(e, dataitem.x, dataitem.y)}
              value={dataitem}
              boardData={boardData}
            />

            {datarow[datarow.length - 1] === dataitem ? <br /> : ""}
          </span>
        );
      });
    });
  };

  return (
    <>
      <div className="board">
        <div className="game-info">
          <span className="info">mines: {mineCount}</span>
          <br />
          <span className="info">{gameStatus}</span>
        </div>
        {renderBoard(boardData)}
      </div>
    </>
  );
};

export default Board;
