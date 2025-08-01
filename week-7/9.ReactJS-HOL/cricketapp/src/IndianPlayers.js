import React from "react";

const IndianPlayers = () => {
  const oddTeam = ["Virat", "Rahul", "Hardik", "Ashwin", "Gill"];
  const evenTeam = ["Rohit", "Jadeja", "Bumrah", "Shami", "Pant", "Dhoni"];

  // Destructuring
  const [odd1, odd2, ...remainingOdd] = oddTeam;
  const [even1, even2, ...remainingEven] = evenTeam;

  // Merge two arrays using spread operator
  const T20players = ["Surya", "Iyer", "Samson"];
  const RanjiTrophyPlayers = ["Pujara", "Karun Nair", "Unadkat"];
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players (Destructured):</h2>
      <p>{odd1}, {odd2}, and others: {remainingOdd.join(", ")}</p>

      <h2>Even Team Players (Destructured):</h2>
      <p>{even1}, {even2}, and others: {remainingEven.join(", ")}</p>

      <h2>Merged Players List:</h2>
      <ul>
        {mergedPlayers.map((player, i) => (
          <li key={i}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
