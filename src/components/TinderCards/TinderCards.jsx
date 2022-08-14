import { useState } from "react";

import TinderCard from "react-tinder-card";

import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Bruce wayne",
      url: "https://i.redd.it/vpltdbqxpyn81.jpg",
    },
    {
      name: "Clark Kent",
      url: "https://cdn.theplaylist.net/wp-content/uploads/2017/12/14225515/Henry-Cavill-Batman-v-Superman-Dawn-Of-Justice.jpg",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing ", nameToDelete);
    // setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name, " left the screen");
  };
  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
