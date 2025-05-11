import { useEffect, useState } from "react";

const LearningUseEffect = () => {
  // here we use useEffect()
  //   useEffect(() => {
  //     console.log("hello world");
  //   }, []);

  const [num, setNum] = useState(0);
  const [newnum, setNewnum] = useState(100);
  const increasenewNum = () => {
    setNewnum(newnum - 1);
  };

  const increasenum = () => {
    setNum(num + 1);
  };

  useEffect(() => {
    console.log("useEffect() triggreed");
  }, [num, newnum]);

  useEffect(() => {
    console.log("type 3 triggered");
  });
  return (
    <>
      <h1>Learning useEffect()</h1>
      <p>{num}</p>
      <button onClick={increasenum}>+</button>

      <p>{newnum}</p>
      <button onClick={increasenewNum}>-</button>
    </>
  );
};

export default LearningUseEffect;
