import React from "react";

const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 85 },
    { name: "Rohit", score: 60 },
    { name: "KL Rahul", score: 45 },
    { name: "Hardik", score: 95 },
    { name: "Jadeja", score: 50 },
    { name: "Ashwin", score: 75 },
    { name: "Bumrah", score: 65 },
    { name: "Shami", score: 80 },
    { name: "Dhoni", score: 40 },
    { name: "Gill", score: 90 },
    { name: "Pant", score: 55 },
  ];

  // Using map() to display all players
  const allPlayers = players.map((player, index) => (
    <li key={index}>{player.name} - {player.score}</li>
  ));

  // Using arrow function to filter players with score < 70
  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players:</h2>
      <ul>{allPlayers}</ul>

      <h3>Players with score below 70:</h3>
      <ul>
        {below70.map((p, i) => (
          <li key={i}>{p.name} - {p.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
