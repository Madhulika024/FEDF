import React from "react";

export default function FlightDetails() {
  const flight =
    JSON.parse(
      localStorage.getItem("selectedFlight")
    ) || {};

  const seats =
    JSON.parse(localStorage.getItem("seats")) || [];

  const seatPrice =
    Number(localStorage.getItem("seatPrice")) || 0;

  const foodTotal =
    Number(localStorage.getItem("foodTotal")) || 0;

  const total =
    (flight?.price || 0) +
    seatPrice +
    foodTotal;

  // 🎫 RANDOM PNR
  const pnr =
    "SKY" +
    Math.floor(
      100000 + Math.random() * 900000
    );

  if (!flight) {
    return (
      <h2
        style={{
          textAlign: "center",
          marginTop: "100px",
          fontSize: "40px",
        }}
      >
        No Flight Selected
      </h2>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom right,#eff6ff,#dbeafe)",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        padding: "40px",

        fontFamily: "Poppins",
      }}
    >
      {/* MAIN CARD */}
      <div
        style={{
          width: "100%",
          maxWidth: "950px",

          background: "white",

          borderRadius: "30px",

          overflow: "hidden",

          boxShadow:
            "0 15px 40px rgba(0,0,0,0.15)",
        }}
      >
        {/* TOP */}
        <div
          style={{
            background:
              "linear-gradient(to right,#2563eb,#1d4ed8)",

            padding: "35px",

            color: "white",
          }}
        >
          <h1
            style={{
              fontSize: "52px",
              marginBottom: "10px",
            }}
          >
            ✈️ SkyBook Ticket
          </h1>

          <p
            style={{
              fontSize: "22px",
              opacity: 0.9,
            }}
          >
            Ticket Verification Details
          </p>
        </div>

        {/* BODY */}
        <div
          style={{
            padding: "40px",
          }}
        >
          {/* VERIFIED */}
          <div
            style={{
              background: "#ecfdf5",
              border:
                "1px solid #86efac",

              padding: "22px",

              borderRadius: "18px",

              marginBottom: "30px",

              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div
              style={{
                width: "70px",
                height: "70px",

                borderRadius: "50%",

                background: "#16a34a",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                color: "white",
                fontSize: "38px",
                fontWeight: "bold",
              }}
            >
              ✓
            </div>

            <div>
              <h2
                style={{
                  color: "#166534",
                  fontSize: "36px",
                  marginBottom: "8px",
                }}
              >
                Ticket Verified
              </h2>

              <p
                style={{
                  color: "#166534",
                  fontSize: "20px",
                }}
              >
                Passenger ticket is valid and
                confirmed.
              </p>
            </div>
          </div>

          {/* ROUTE */}
          <div
            style={{
              background: "#f8fafc",

              border:
                "1px solid #dbeafe",

              borderRadius: "22px",

              padding: "35px",

              marginBottom: "30px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                alignItems: "center",
              }}
            >
              {/* FROM */}
              <div>
                <h1
                  style={{
                    fontSize: "60px",
                    color: "#0f172a",
                  }}
                >
                  {flight?.from?.slice(0, 3)}
                </h1>

                <p
                  style={{
                    fontSize: "24px",
                    color: "#475569",
                  }}
                >
                  {flight?.from}
                </p>
              </div>

              {/* CENTER */}
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <h1
                  style={{
                    fontSize: "80px",
                    color: "#2563eb",
                  }}
                >
                  ✈️
                </h1>

                <h2
                  style={{
                    color: "#2563eb",
                    fontSize: "28px",
                  }}
                >
                  {flight?.airline}
                </h2>
              </div>

              {/* TO */}
              <div
                style={{
                  textAlign: "right",
                }}
              >
                <h1
                  style={{
                    fontSize: "60px",
                    color: "#0f172a",
                  }}
                >
                  {flight?.to?.slice(0, 3)}
                </h1>

                <p
                  style={{
                    fontSize: "24px",
                    color: "#475569",
                  }}
                >
                  {flight?.to}
                </p>
              </div>
            </div>
          </div>

          {/* DETAILS GRID */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(2,1fr)",

              gap: "22px",
            }}
          >
            <Card
              title="🎫 PNR Number"
              value={pnr}
            />

            <Card
              title="💺 Selected Seats"
              value={
                seats.length > 0
                  ? seats.join(", ")
                  : "Not Selected"
              }
            />

            <Card
              title="⏰ Departure Time"
              value={
                flight?.departure ||
                flight?.time
              }
            />

            <Card
              title="💰 Total Paid"
              value={`₹${total}`}
            />

            <Card
              title="📅 Journey Date"
              value={
                flight?.date || "Today"
              }
            />

            <Card
              title="🛫 Flight Status"
              value="Confirmed"
            />
          </div>

          {/* BOARDING INFO */}
          <div
            style={{
              marginTop: "35px",

              background: "#eff6ff",

              borderRadius: "20px",

              padding: "30px",
            }}
          >
            <h2
              style={{
                color: "#1d4ed8",
                marginBottom: "18px",
                fontSize: "34px",
              }}
            >
              ℹ️ Boarding Instructions
            </h2>

            <p
              style={{
                fontSize: "22px",
                color: "#334155",
                marginBottom: "12px",
              }}
            >
              • Please arrive 2 hours before
              departure.
            </p>

            <p
              style={{
                fontSize: "22px",
                color: "#334155",
                marginBottom: "12px",
              }}
            >
              • Carry valid ID proof for
              verification.
            </p>

            <p
              style={{
                fontSize: "22px",
                color: "#334155",
              }}
            >
              • Boarding gate closes 30
              minutes before departure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ✅ CARD COMPONENT
function Card({ title, value }) {
  return (
    <div
      style={{
        background: "#f8fafc",
        border: "1px solid #dbeafe",
        borderRadius: "18px",
        padding: "25px",
      }}
    >
      <h3
        style={{
          color: "#64748b",
          marginBottom: "10px",
          fontSize: "20px",
        }}
      >
        {title}
      </h3>

      <h2
        style={{
          color: "#0f172a",
          fontSize: "30px",
        }}
      >
        {value}
      </h2>
    </div>
  );
}