import React, { useState } from "react";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("home");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [carType, setCarType] = useState("Sedan");
  const [payment, setPayment] = useState("Cash");
  const [rides, setRides] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showDriverDetails, setShowDriverDetails] = useState(false);
  const [currentRide, setCurrentRide] = useState(null);

  const handleBookRide = () => {
    if (name && phone && pickup && drop) {
      const estimatedFare = Math.floor(Math.random() * 500) + 100;

      const driverName = "Ramesh Kumar";
      const cabNumber = "TN-09 AB 1234";

      const newRide = {
        id: rides.length + 1,
        customerName: name,
        phone,
        pickup,
        drop,
        carType,
        payment,
        fare: estimatedFare,
        status: "Booked",
        time: new Date().toLocaleString(),
        driverName,
        cabNumber,
      };

      setRides([newRide, ...rides]);
      setCurrentRide(newRide);
      setName("");
      setPhone("");
      setPickup("");
      setDrop("");
      setCarType("Sedan");
      setPayment("Cash");

      setShowSuccess(true);
      setShowDriverDetails(false);
    }
  };

  return (
    <div className="app">
      <header className="navbar">
        <h1>QuickRide</h1>
        <nav>
          <ul>
            <li><button onClick={() => setActivePage("home")}>Home</button></li>
            <li><button onClick={() => setActivePage("about")}>About Us</button></li>
            <li><button onClick={() => setActivePage("contact")}>Contact</button></li>
            <li><button onClick={() => setActivePage("history")}>Booking History</button></li>
          </ul>
        </nav>
      </header>

      <main className="container">
        {activePage === "home" && (
          <section className="booking-card">
            <h2>Book Your Cab</h2>
            <div className="form">
              <input type="text" placeholder="Customer Name" value={name} onChange={(e) => setName(e.target.value)} />
              <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <input type="text" placeholder="Pickup Location" value={pickup} onChange={(e) => setPickup(e.target.value)} />
              <input type="text" placeholder="Drop Location" value={drop} onChange={(e) => setDrop(e.target.value)} />

              <label className="form-label">Car Type:</label>
<select value={carType} onChange={(e) => setCarType(e.target.value)}>
  <option value="Sedan">Sedan</option>
  <option value="SUV">SUV</option>
  <option value="Mini">Mini</option>
</select>


              <label className="form-label">Payment Option:</label>
<select value={payment} onChange={(e) => setPayment(e.target.value)}>
  <option value="Cash">Cash</option>
  <option value="Card">Card</option>
  <option value="UPI">UPI</option>
</select>


              <button onClick={handleBookRide}>Book Now</button>

              {showSuccess && (
                <>
                  <div className="success-msg">✅ Cab Booked Successfully!</div>
                  <button onClick={() => setShowDriverDetails(true)}>Cab Details</button>
                </>
              )}

              {showDriverDetails && currentRide && (
                <div className="driver-details">
                  <p><strong>Driver Name:</strong> {currentRide.driverName}</p>
                  <p><strong>Cab Number:</strong> {currentRide.cabNumber}</p>
                </div>
              )}
            </div>
          </section>
        )}

        {activePage === "history" && (
          <section className="ride-history">
            <h2>Customer Booking History</h2>
            {rides.length === 0 ? (
              <p>No bookings yet.</p>
            ) : (
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Pickup</th>
                      <th>Drop</th>
                      <th>Car Type</th>
                      <th>Payment</th>
                      <th>Fare</th>
                      <th>Status</th>
                      <th>Driver</th>
                      <th>Cab Number</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rides.map((ride) => (
                      <tr key={ride.id}>
                        <td>{ride.id}</td>
                        <td>{ride.customerName}</td>
                        <td>{ride.phone}</td>
                        <td>{ride.pickup}</td>
                        <td>{ride.drop}</td>
                        <td>{ride.carType}</td>
                        <td>{ride.payment}</td>
                        <td>₹{ride.fare}</td>
                        <td>{ride.status}</td>
                        <td>{ride.driverName}</td>
                        <td>{ride.cabNumber}</td>
                        <td>{ride.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        )}

        
            
        {activePage === "about" && (
  <section className="info-section">
    <h2>About Us</h2>
    <p>
      QuickRide is a next-generation cab booking platform designed to make travel 
      simple, safe, and affordable. Built with MERN stack technology, our system 
      ensures speed, reliability, and a seamless booking experience.
    </p>
    <p>
      Our cab booking service allows customers to instantly book rides, view fare 
      estimates, and get driver details right after booking. With multiple car 
      options and flexible payment methods, QuickRide makes every journey smooth 
      and convenient.
    </p>
  </section>
)}


        {activePage === "contact" && (
          <section className="info-section">
            <h2>Contact</h2>
            <p>Email: support@quickride.com</p>
            <p>Phone: +91 98765 43210</p>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
