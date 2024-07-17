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
  let updateYellow = () => {
    //function for update value
    console.log(`moves.yellow=${Move.yellow}`);
    setMove((preMoves) => {
      //use call back bcz new value depend on previous value
      return { ...preMoves, yellow: preMoves.yellow + 1 };
    });

    SetArr((preArr) => {
      return [...preArr, "yellow moves"];
    });
    console.log(arr);
  };
  let updategreen = () => {
    //function for update value
    console.log(`moves.green=${Move.green}`);
    setMove((preMoves) => {
      //use call back bcz new value depend on previous value
      return { ...preMoves, green: preMoves.green + 1 };
    });

    SetArr((preArr) => {
      return [...preArr, "green moves"];
    });
    console.log(arr);
  };
  let updatered = () => {
    //function for update value
    console.log(`moves.red=${Move.red}`);
    setMove((preMoves) => {
      //use call back bcz new value depend on previous value
      return { ...preMoves, red: preMoves.red + 1 };
    });

    SetArr((preArr) => {
      return [...preArr, "red moves"];
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
        <button style={{ backgroundColor: "yellow" }} onClick={updateYellow}>
          +1
        </button>
        <p>Green moves ={Move.green} </p>
        <button style={{ backgroundColor: "green" }} onClick={updategreen}>
          +1
        </button>
        <p>Red moves ={Move.red} </p>
        <button style={{ backgroundColor: "red" }} onClick={updatered}>
          +1
        </button>
      </center>
    </>
  );
}
