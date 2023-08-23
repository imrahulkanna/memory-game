import CardContainer from "./CardContainer";
import { useState, useEffect } from "react";
import { useLocation ,Link } from "react-router-dom";
import "../App.css";

function Home() {
  const location = useLocation();
  let size;

  useEffect(()=>{
    if (location.state && location.state.size) {
      size = location.state.size;
    } else {
      size = localStorage.getItem("size");
    }
    console.log('game',size)
  },[]);

  const [myArr, setMyArr] = useState([]);

  function createShuffledArray() {
    let mySet = new Set();
    while (mySet.size < size) {
      mySet.add(Math.floor(Math.random() * 10 + 1));
    }

    let arr = Array.from(mySet);
    let myArr = [];
    arr.forEach((val) => {
      myArr.push(val);
      myArr.push(val * -1);
    });

    return shuffle(myArr);
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
  }

  useEffect(() => {
    const shuffledArr = createShuffledArray();
    setMyArr(shuffledArr);
  }, []);

  console.log(myArr);

  useEffect(()=> {
    const reLoad = () => {
      window.location.reload();
    }
    document.querySelector(".playButton").addEventListener('click',reLoad);

    return () => {
      document.querySelector(".playButton").removeEventListener("click", reLoad);
    }
  },[])
  return (
    <>
      <div>
        <button className="playButton">
          Re Start
        </button>
        <Link to="/">
          <button className="playButton reStart">Play Again</button>
        </Link>
      </div>
      <CardContainer myArr={myArr} />
    </>
  );
}

export default Home;
