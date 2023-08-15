import '../App.css'

function Card({
  index,
  character,
  cardDetails,
  setCardDetails,
  prevIndex,
  setPrevIndex,
}) {
  function handleClick(event) {
    if (cardDetails[index].flip) {
      return;
    }
    console.log("before", prevIndex);
    setCardDetails((prevCardDetails) => ({
      ...prevCardDetails,
      [index]: {
        ...prevCardDetails[index],
        flip: !prevCardDetails[index].flip,
      },
    }));

    if (prevIndex === null) {
      setPrevIndex(index);
    } else {
      const prevId = prevIndex > 0 ? prevIndex : prevIndex * -1;
      const currId = index > 0 ? index : index * -1;
      if (prevId !== currId) {
        // event.currentTarget.style.boxShadow =
        //   "0 0 120px 0px rgba(242, 44, 61, 1)";
        setTimeout(() => {
          setCardDetails((prevCardDetails) => ({
            ...prevCardDetails,
            [index]: {
              ...prevCardDetails[index],
              flip: !prevCardDetails[index].flip,
            },
            [prevIndex]: {
              ...prevCardDetails[prevIndex],
              flip: !prevCardDetails[prevIndex].flip,
            },
          }));
          event.currentTarget.style.boxShadow =
            "0 0 120px 0px rgba(66, 204, 228, 0.568)";
        }, 800);
        // event.currentTarget.style.boxShadow =
        //   "0 0 120px 0px rgba(66, 204, 228, 0.568)";
      }
      setPrevIndex(null);
    }
    console.log("after", prevIndex);
  }

  return (
    <div
      className={`profileCard ${cardDetails[index]?.flip ? "flip" : ""}`}
      onClick={handleClick}
    >
      <div className="front">
        <img src={character.picSrc} alt="" className="profileImg" />
        <div className="profileName">{character.name}</div>
      </div>

      <div className="back"></div>
    </div>
  );
}

export default Card;