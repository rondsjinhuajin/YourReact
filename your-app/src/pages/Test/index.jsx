import React, { useEffect, useState } from "react";
import "./index.less";
const Index = () => {
  function fun(n, o) {
    console.log(o);
    return {
      fun: function(m) {
        return fun(m, n);
      }
    };
  }

  let a = fun(0); //undefined
  a.fun(1); // 0
  a.fun(2); // 0
  a.fun(3); // 0

  var b = fun(0)
    .fun(1)
    .fun(2)
    .fun(3); //undefined 0 1 2

  var c = fun(0).fun(1); //0
  c.fun(2); //1
  c.fun(3); //1
  // 如何设计一个 4 列等宽布局，各列之间的边距是 10px（考虑浏览器的兼容性）？

  return (
    <div className="flexStyle">
      <div className="itemStyle">1</div>
      <div className="itemStyle">2</div>
      <div className="itemStyle">3</div>
      <div className="itemStyle">4 </div>
    </div>
  );
};
export default Index;
