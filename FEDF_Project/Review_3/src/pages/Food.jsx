import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Food() {
  const navigate = useNavigate();

  // ✈️ GET DATA
  const flight =
    JSON.parse(localStorage.getItem("selectedFlight")) || {};

  const seatPrice =
    Number(localStorage.getItem("seatPrice")) || 0;

  // 🍔 FOOD ITEMS
  const foodItems = [
    {
      id: 1,
      name: "Veg Burger",
      price: 250,
      rating: 4.9,
      desc: "Fresh veg burger with fries",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
      quantity: 0,
    },

    {
      id: 2,
      name: "Chicken Pizza",
      price: 450,
      rating: 5,
      desc: "Cheesy pizza with chicken toppings",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
      quantity: 0,
    },

    {
      id: 3,
      name: "French Fries",
      price: 180,
      rating: 4.5,
      desc: "Crispy salted french fries",
      image:
        "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
      quantity: 0,
    },

    {
      id: 4,
      name: "Cold Coffee",
      price: 220,
      rating: 4.9,
      desc: "Refreshing cold coffee",
      image:
        "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80",
      quantity: 0,
    },

    {
      id: 5,
      name: "Veg Pasta",
      price: 300,
      rating: 4.5,
      desc: "Creamy white sauce pasta",
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80",
      quantity: 0,
    },

    {
      id: 7,
      name: "Veg Sandwich",
      price: 200,
      rating: 4.8,
      desc: "Grilled sandwich with veggies",
      image:
        "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
      quantity: 0,
    },

    {
      id: 8,
      name: "Coca Cola",
      price: 120,
      rating: 4.6,
      desc: "Chilled soft drink",
      image:
        "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=800&q=80",
      quantity: 0,
    },

    // 🔥 NEW ITEMS

    {
      id: 9,
      name: "Chicken Biryani",
      price: 380,
      rating: 5,
      desc: "Hyderabadi spicy chicken biryani",
      image:
        "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=800&q=80",
      quantity: 0,
    },

    

    {
      id: 11,
      name: "Ice Cream",
      price: 150,
      rating: 5,
      desc: "Vanilla ice cream dessert",
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
      quantity: 0,
    },

    {
      id: 13,
      name: "Chicken Sandwich",
      price: 280,
      rating: 4.8,
      desc: "Loaded grilled chicken sandwich",
      image:
        "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=800&q=80",
      quantity: 0,
    },

    {
      id: 14,
      name: " Instant Noodles",
      price: 260,
      rating: 4.2,
      desc: "Spicy hakka noodles",
      image:
        "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=800&q=80",
      quantity: 0,
    },

    {
  id: 17,
  name: "Veg Meals",
  price: 320,
  rating: 4.8,
  desc: "Healthy Indian veg meal combo",
  image:
    "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
  quantity: 0,
},
{
  id: 18,
  name: "Veg Salad Bowl",
  price: 240,
  rating: 4.6,
  desc: "Fresh healthy vegetable salad bowl",
  image:
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
  quantity: 0,
},
    {
      id: 15,
      name: "Orange Juice",
      price: 140,
      rating: 4.8,
      desc: "Fresh chilled orange juice",
      image:
        "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80",
      quantity: 0,
    },

    
  ];

  const [foods, setFoods] = useState(foodItems);

  // ➕ INCREASE
  const increaseQty = (id) => {
    setFoods(
      foods.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // ➖ DECREASE
  const decreaseQty = (id) => {
    setFoods(
      foods.map((item) =>
        item.id === id && item.quantity > 0
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
    );
  };

  // 💰 FOOD TOTAL
  const foodTotal = foods.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  // 💰 GRAND TOTAL
  const grandTotal =
    (flight?.price || 0) +
    seatPrice +
    foodTotal;

  // 🚀 CONTINUE
  const handleContinue = () => {
    localStorage.setItem(
      "foodTotal",
      foodTotal
    );

    navigate("/payment");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "30px",

        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)), url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80')",

        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "35px",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "48px",
            marginBottom: "10px",
          }}
        >
          🍴 In-Flight Food Selection
        </h1>

        <p
          style={{
            color: "#e5e7eb",
            fontSize: "20px",
          }}
        >
          Choose your favourite meals for the journey
        </p>
      </div>

      {/* MAIN SECTION */}
      <div
        style={{
          display: "flex",
          gap: "25px",
          alignItems: "flex-start",
        }}
      >
        {/* FOOD GRID */}
        <div
          style={{
            flex: 3,
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(270px,1fr))",
            gap: "22px",
          }}
        >
          {foods.map((item) => (
            <div
              key={item.id}
              style={{
                background: "white",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow:
                  "0 8px 25px rgba(0,0,0,0.25)",
              }}
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "190px",
                  objectFit: "cover",
                }}
              />

              {/* DETAILS */}
              <div style={{ padding: "18px" }}>
                <h2
                  style={{
                    marginBottom: "8px",
                    color: "#111827",
                  }}
                >
                  {item.name}
                </h2>

                <p
                  style={{
                    color: "#6b7280",
                    marginBottom: "10px",
                    fontSize: "15px",
                  }}
                >
                  {item.desc}
                </p>

                {/* RATING */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    marginBottom: "10px",
                  }}
                >
                  <span
                    style={{
                      color: "#f59e0b",
                      fontWeight: "bold",
                    }}
                  >
                    ⭐ {item.rating}
                  </span>
                </div>

                {/* PRICE */}
                <h2
                  style={{
                    color: "#16a34a",
                    marginBottom: "15px",
                  }}
                >
                  ₹{item.price}
                </h2>

                {/* QTY */}
                <div
                  style={{
                    display: "flex",
                    justifyContent:
                      "space-between",
                    alignItems: "center",
                  }}
                >
                  <button
                    onClick={() =>
                      decreaseQty(item.id)
                    }
                    style={qtyBtn}
                  >
                    −
                  </button>

                  <h2
                    style={{
                      color: "#111827",
                    }}
                  >
                    {item.quantity}
                  </h2>

                  <button
                    onClick={() =>
                      increaseQty(item.id)
                    }
                    style={qtyBtn}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SUMMARY */}
        <div
          style={{
            flex: 1,
            background: "white",
            padding: "28px",
            borderRadius: "22px",
            position: "sticky",
            top: "20px",
            boxShadow:
              "0 8px 25px rgba(0,0,0,0.3)",
            minWidth: "320px",
          }}
        >
          {/* TITLE */}
          <h1
            style={{
              color: "#0f172a",
              marginBottom: "30px",
              fontSize: "34px",
              textAlign: "center",
            }}
          >
            🧾 Order Summary
          </h1>

          {/* PRICE ROWS */}
          <div style={summaryRow}>
            <span>Flight Fare</span>
            <span>
              ₹{flight?.price || 0}
            </span>
          </div>

          <div style={summaryRow}>
            <span>Seat Charges</span>
            <span>₹{seatPrice}</span>
          </div>

          <div style={summaryRow}>
            <span>Food Charges</span>
            <span>₹{foodTotal}</span>
          </div>

          <hr
            style={{
              margin: "30px 0",
            }}
          />

          {/* TOTAL */}
          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                color: "#111827",
                fontSize: "34px",
              }}
            >
              Total
            </h1>

            <h1
              style={{
                color: "#16a34a",
                fontSize: "40px",
              }}
            >
              ₹{grandTotal}
            </h1>
          </div>

          {/* BUTTON */}
          <button
            onClick={handleContinue}
            style={{
              width: "100%",
              marginTop: "35px",
              padding: "16px",
              border: "none",
              borderRadius: "14px",

              background:
                "linear-gradient(to right,#2563eb,#3b82f6)",

              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
              cursor: "pointer",

              boxShadow:
                "0 4px 15px rgba(37,99,235,0.4)",
            }}
          >
            Continue to Payment →
          </button>
        </div>
      </div>
    </div>
  );
}

// 🎨 SUMMARY ROW
const summaryRow = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "18px",
  fontSize: "22px",
  fontWeight: "600",
  color: "#475569",
};

// 🎨 BUTTON STYLE
const qtyBtn = {
  width: "45px",
  height: "45px",
  borderRadius: "12px",
  border: "none",
  background:
    "linear-gradient(to right,#2563eb,#3b82f6)",
  color: "white",
  fontSize: "24px",
  fontWeight: "bold",
  cursor: "pointer",
};