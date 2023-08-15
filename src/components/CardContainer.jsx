import Card from "./Card";
import { useEffect,useState } from "react";
import { characters,dfs } from "../data";
import '../App.css';


function CardContainer({ myArr }) {
  const [cardDetails, setCardDetails] = useState({});
  const [prevIndex, setPrevIndex] = useState(null);
  const [prevEvent, setPrevEvent] = useState(null);
  useEffect(() => {
    let details = {}
    myArr.forEach(val => {
      details[val] = {
        'id' : val,
        'flip' : false,
        'success' : false
      }
    });
    setCardDetails(details);
  },[myArr]);
// initially I updated 'cardDetails' without any dependency. So I had to use 'myArr' as
// the dependency as 'cardDetails' need to update when the former is updated.
  // console.log(cardDetails)

  return (
    <div className="cardWrapper">
      {myArr.map((val, id) => (
        <Card
          key={id}
          index={val}
          character={val > 0 ? characters[val - 1] : dfs[val * -1 - 1]}
          cardDetails={cardDetails}
          setCardDetails={setCardDetails}
          prevIndex={prevIndex}
          setPrevIndex={setPrevIndex}
          prevEvent={prevEvent}
          setPrevEvent={setPrevEvent}
        />
      ))}
    </div>
  );
}

export default CardContainer;