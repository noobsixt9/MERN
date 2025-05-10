import { useState } from "react";

function Home() {
  //   const [merNum, setCount] = useState(0);
  //   function increaseNum() {
  //     merNum += 1;
  //   }
  //   function decreaseNum() {
  //     merNum -= 1;
  //   }
  //   let smth = useState(100);
  //   let myValue = smth[0];
  //   let myFunction = smth[1];

  let [myValue, myFunction] = useState(0);

  function increaseNum() {
    myFunction((myValue += 1));
  }
  function decreaseNum() {
    myFunction((myValue -= 1));
  }

  return (
    <div>
      <p>you clicked {myValue} times</p>
      <button onClick={increaseNum}>+</button>
      <button onClick={decreaseNum}>-</button>
      {/* <p>Testing useState</p> */}
    </div>
  );
}

export default Home;
