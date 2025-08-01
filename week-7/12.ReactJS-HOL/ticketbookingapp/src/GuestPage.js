import React from "react";

const GuestPage = () => {
  const flights = [
    { id: 1, from: "Hyderabad", to: "Mumbai", price: 4000 },
    { id: 2, from: "Delhi", to: "Chennai", price: 5500 },
    { id: 3, from: "Bangalore", to: "Pune", price: 3000 },
  ];

  return (
    <div>
      <h2>Guest View - Browse Flights</h2>
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            {flight.from} to {flight.to} - ₹{flight.price}
          </li>
        ))}
      </ul>
      <p><strong>Note:</strong> Please login to book tickets.</p>
    </div>
  );
};

export default GuestPage;
