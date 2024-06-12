import { useState } from "react";
export default function Ludoboard() {
  let [Move, setMove] = useState({ blue: 0, red: 0, green: 0, yellow: 0 }); //usestate  for obj
  let [arr, SetArr] = useState(["no moves"]); //  use state for array
  let updateBlue = () => {
    //function for update value
    console.log(`moves.blue=${Move.blue}`);
    setMove((preMoves) => {
      //use call back bcz new value depend on previous value
      return { ...preMoves, blue: preMoves.blue + 1 };
    });

    SetArr((preArr) => {
      return [...preArr, "blue moves"];
    });
    console.log(arr);
  };
  return (
    <>
      <h3>Ludo game begin</h3>
      <hr />
      <p>{arr}</p>
      <center className="ludoboard">
        <p>Blue moves ={Move.blue} </p>
        <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
          +1
        </button>
        <p>Yellow moves = {Move.yellow}</p>
        <button style={{ backgroundColor: "yellow" }}>+1</button>
        <p>Green moves ={Move.green} </p>
        <button style={{ backgroundColor: "green" }}>+1</button>
        <p>Red moves ={Move.red} </p>
        <button style={{ backgroundColor: "red" }}>+1</button>
      </center>
    </>
  );
}
