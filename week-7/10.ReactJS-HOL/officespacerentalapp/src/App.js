import React from "react";

// Sample office list
const officeList = [
  {
    id: 1,
    name: "Downtown Hub",
    rent: 75000,
    address: "Main Street, Hyderabad",
    image: "https://via.placeholder.com/300x200?text=Office+1",
  },
  {
    id: 2,
    name: "Tech Park",
    rent: 50000,
    address: "Gachibowli, Hyderabad",
    image: "https://via.placeholder.com/300x200?text=Office+2",
  },
  {
    id: 3,
    name: "City Center",
    rent: 65000,
    address: "Kondapur, Hyderabad",
    image: "https://via.placeholder.com/300x200?text=Office+3",
  },
];

function App() {
  const headingStyle = {
    textAlign: "center",
    color: "#333",
    marginTop: "20px",
  };

  return (
    <div>
      {/* Page heading using JSX */}
      <h1 style={headingStyle}>Office Space Rental Listings</h1>

      {/* Looping through office objects */}
      {officeList.map((office) => (
        <div
          key={office.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "15px",
            margin: "20px auto",
            width: "60%",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          {/* Office image using JSX attribute */}
          <img
            src={office.image}
            alt={office.name}
            style={{ width: "100%", height: "auto", borderRadius: "10px" }}
          />

          {/* Office details */}
          <h2>{office.name}</h2>
          <p>{office.address}</p>

          {/* Inline conditional style for rent */}
          <p
            style={{
              color: office.rent > 60000 ? "green" : "red",
              fontWeight: "bold",
            }}
          >
            Rent: ₹{office.rent}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;

