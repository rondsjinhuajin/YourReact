import React from "react";
import "./index.less";
//从0开始认识大名鼎鼎的react
//教学 1，什么是react 2，通过游戏开发了解react（井字棋）
//前提  具备基础的html css  js es6语法 babel repf
//介绍 react声明书的 高效并且灵活的用于构建用户界面的javascript库
//组件 一些简短的 独立的代码片段  但是可以组合成复制的UI
//使用jsx语法构建react元素 实际上都是js对象 React.createElement('div',{className:'divStyle'})

//状态提升的概念  把子组件的state提升到父组件中，然后通过props传给子组件 达到同步更新的效果

//受控组件概念，子组件完全被父组件传值控制

//不可变性，时间旅行功能
//撤销和恢复功能在开发中是一个很常见的需求
// const Index=()=>{

// }
// export default Index
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }
  handleClick(i) {
    const squares = this.state.squares.slice(); //.slice() 方法创建了 squares 数组的一个副本，而不是直接在现有的数组上进行修改。在下一节，我们会介绍为什么我们需要创建 square 数组的副本
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({ squares: squares, xIsNext: !this.state.xIsNext });
  }

  render() {
    // const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
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
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
export default Game;
