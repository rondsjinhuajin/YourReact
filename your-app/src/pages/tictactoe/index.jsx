import React, { useState } from "react";
import Board from "./Board";
import "./index.less";
import { Button } from "antd";
/**步骤说明：
    1，构建Square棋子组件用于显示
    2，构建棋盘整体，9个棋子组成，
    3，轮流下棋子，先是O后是X （扩展自定义谁先走）
    4,下一位下棋的为谁？
    5，棋子坐标
    6，决出胜者：三个相同连接起来
    7，循环渲染
    8，平局展示

**/
const Game = () => {
  //棋子的坐标
  const lngLat = [
    [1, 1],
    [1, 2],
    [1, 3],
    [2, 1],
    [2, 2],
    [2, 3],
    [3, 1],
    [3, 2],
    [3, 3],
  ];
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
    },
  ]);
  const [stepNumber, setStepNumber] = useState(0);

  const [xIsNext, setXIsNext] = useState(0);

  const [lngLats, setLngLats] = useState("");
  function handleClick(i) {
    // console.log(i);
    setLngLats(lngLat[i]);
    const historyx = history.slice(0, stepNumber + 1);
    const current = historyx[historyx.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";

    //set三种值
    setHistory(
      historyx.concat([
        {
          squares: squares,
        },
      ])
    );

    setStepNumber(historyx.length);
    setXIsNext(!xIsNext);
  }

  function jumpTo(step) {
    // setLngLats(lngLat[step]);

    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(history[stepNumber].squares);

  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move} style={move === stepNumber ? { color: "#fff" } : {}}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    if (
      history[stepNumber].squares.filter((item) => item === null).length > 0
    ) {
      status = "Next player: " + (xIsNext ? "X" : "O");
    } else {
      status = "平局";
    }
  }

  console.log(history);

  //扩展：率先下棋子
  const [firstX, setFirstX] = useState(false);
  function firstStep() {
    setFirstX(!firstX);
  }
  //升序，降序
  //   const [upActive, setUpActive] = useState(false);
  //   function upActiveClick() {
  //     setHistory(history.reverse());
  //     setUpActive(!upActive);
  //   }
  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={history[stepNumber].squares}
          onClick={(i) => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <Button
          disabled={
            history[stepNumber].squares.find((item) => item !== null)
              ? true
              : false
          }
          onClick={firstStep}
        >
          {firstX ? "X" : "O"}率先落子
        </Button>
        <div>
          落子坐标：第{(lngLats && lngLats[0]) || "-"}行，第
          {(lngLats && lngLats[1]) || "-"}列
        </div>
        {/* <Button onClick={upActiveClick}>{upActive ? "升序" : "降序"}</Button> */}

        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};
export default Game;
