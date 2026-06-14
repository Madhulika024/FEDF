import { useState } from "react";
import "../App.css";

function BookingForm() {

  const [name, setName] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [travelClass, setTravelClass] = useState("");
  const [passengers, setPassengers] = useState(1);

  // TICKET DATA

  const [ticketData, setTicketData] = useState(null);

  // SWAP FUNCTION

  const swapCities = () => {

    const temp = source;

    setSource(destination);
    setDestination(temp);
  };

  // FARE CALCULATION

  const calculateFare = (
    selectedClass,
    totalPassengers
  ) => {

    let baseFare = 3000;

    if (selectedClass === "Business") {
      baseFare = 7000;
    }

    else if (
      selectedClass === "First Class"
    ) {
      baseFare = 12000;
    }

    return baseFare * totalPassengers;
  };

  // LIVE FARE

  const liveFare = calculateFare(
    travelClass,
    passengers
  );

  // SUBMIT

  const handleSubmit = (e) => {

    e.preventDefault();

    setTicketData({
      name,
      source,
      destination,
      travelDate,
      travelClass,
      passengers,
      fare: liveFare
    });

    // CLEAR FORM

    setName("");
    setSource("");
    setDestination("");
    setTravelDate("");
    setTravelClass("");
    setPassengers(1);
  };

  return (

    <div className="page">

      <div className="booking-container">

        {/* LEFT PANEL */}

        <div className="left-panel">

          <div className="overlay"></div>

          <h1>✈ SkyLine Airways</h1>

          <p>
            Premium flight booking experience
            with modern UI.
          </p>

          <div className="preview-card">

            <div className="city">

              <h2>
                {
                  source
                    ? source.toUpperCase()
                    : "SOURCE"
                }
              </h2>

              <span>From</span>

            </div>

            <div className="flight-icon">
              ✈
            </div>

            <div className="city">

              <h2>
                {
                  destination
                    ? destination.toUpperCase()
                    : "DESTINATION"
                }
              </h2>

              <span>To</span>

            </div>

          </div>

        </div>

        {/* RIGHT PANEL */}

        <div className="right-panel">

          <h2>Book Your Flight</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Passenger Name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              required
            />

            <div className="row">

              <input
                type="text"
                placeholder="Source City"
                value={source}
                onChange={(e) =>
                  setSource(e.target.value)
                }
                required
              />

              <button
                type="button"
                className="swap-btn"
                onClick={swapCities}
              >
                ⇄
              </button>

            </div>

            <input
              type="text"
              placeholder="Destination City"
              value={destination}
              onChange={(e) =>
                setDestination(e.target.value)
              }
              required
            />

            <input
              type="date"
              value={travelDate}
              onChange={(e) =>
                setTravelDate(e.target.value)
              }
              required
            />

            <div className="row">

              <select
                value={travelClass}
                onChange={(e) =>
                  setTravelClass(e.target.value)
                }
                required
              >

                <option value="">
                  Select Class
                </option>

                <option>
                  Economy
                </option>

                <option>
                  Business
                </option>

                <option>
                  First Class
                </option>

              </select>

              <input
                type="number"
                min="1"
                max="10"
                value={passengers}
                onChange={(e) =>
                  setPassengers(
                    Number(e.target.value)
                  )
                }
              />

            </div>

            {/* LIVE FARE */}

            <div className="fare-box">

              <h3>Total Fare</h3>

              <p>
                ₹ {liveFare}
              </p>

            </div>

            <button
              type="submit"
              className="book-btn"
            >
              Book Ticket
            </button>

          </form>

          {/* BOARDING PASS */}

          {
            ticketData && (

              <div className="ticket">

                <div className="ticket-top">

                  <h3>BOARDING PASS</h3>

                  <span>
                    SkyLine Airways
                  </span>

                </div>

                <div className="ticket-body">

                  {/* ROUTE */}

                  <div className="ticket-route">

                    <div className="route-city">

                      <h1>
                        {
                          ticketData.source
                            ? ticketData.source
                                .slice(0,3)
                                .toUpperCase()
                            : "SRC"
                        }
                      </h1>

                      <p>Source</p>

                    </div>

                    <div className="route-plane">
                      ✈
                    </div>

                    <div className="route-city">

                      <h1>
                        {
                          ticketData.destination
                            ? ticketData.destination
                                .slice(0,3)
                                .toUpperCase()
                            : "DST"
                        }
                      </h1>

                      <p>Destination</p>

                    </div>

                  </div>

                  {/* DETAILS */}

                  <div className="ticket-details">

                    <div className="detail-box">

                      <h4>PASSENGER</h4>

                      <p>
                        {ticketData.name}
                      </p>

                    </div>

                    <div className="detail-box">

                      <h4>CLASS</h4>

                      <p>
                        {ticketData.travelClass}
                      </p>

                    </div>

                    <div className="detail-box">

                      <h4>DATE</h4>

                      <p>
                        {ticketData.travelDate}
                      </p>

                    </div>

                    <div className="detail-box">

                      <h4>PASSENGERS</h4>

                      <p>
                        {ticketData.passengers}
                      </p>

                    </div>

                    <div className="detail-box">

                      <h4>FARE</h4>

                      <p>
                        ₹ {ticketData.fare}
                      </p>

                    </div>

                  </div>

                </div>

                <div className="ticket-footer">

                  <h4>
                    ✈ Have a Safe Journey
                  </h4>

                  <p>
                    Thank you for choosing
                    SkyLine Airways
                  </p>

                </div>

              </div>

            )
          }

        </div>

      </div>

    </div>
  );
}

export default BookingForm;