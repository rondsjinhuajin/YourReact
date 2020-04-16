import { useState, useEffect } from "react";

const YourHook = (defaultvalue) => {
  const [conut, setCount] = useState(defaultvalue);
  useEffect(() => {
    if (conut.length) {
      let conutx = conut.reduce((a, b) => a + b);
      setCount(conutx);
    }
  }, [conut]);
  return [conut, setCount];
};
export default YourHook;
