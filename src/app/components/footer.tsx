import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={{ padding: "40px 20px", backgroundColor: "#f5f5f5" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            flexWrap: "wrap",
          }}
        >

          <div style={{ flex: "1", minWidth: "200px", marginBottom: "20px" }}>
            <img src="travellogo.png" alt="Travel Logo" width="150" />
            <p
              style={{
                color: "#fe6282",
                fontWeight: "500",
                fontSize: "0.9rem",
                marginTop: "10px",
                textAlign: "center",
              }}
            >
              Book your trip in minutes with full control for a much longer experience.
            </p>
          </div>


          <div
            style={{
              flex: "2",
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              minWidth: "200px",
              marginBottom: "20px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <h4 style={{ color: "#080809", fontWeight: "700", fontSize: "1.1rem" }}>Company</h4>
              <ul style={{ listStyle: "none", padding: "0", margin: "10px 0" }}>
                <li><a href="#" style={{ color: "#080809", textDecoration: "none" }}>About</a></li>
                <li><a href="#" style={{ color: "#080809", textDecoration: "none" }}>Careers</a></li>
                <li><a href="#" style={{ color: "#080809", textDecoration: "none" }}>Mobile</a></li>
              </ul>
            </div>
            <div style={{ textAlign: "center" }}>
              <h4 style={{ color: "#080809", fontWeight: "700", fontSize: "1.1rem" }}>Support</h4>
              <ul style={{ listStyle: "none", padding: "0", margin: "10px 0" }}>
                <li><a href="#" style={{ color: "#080809", textDecoration: "none" }}>Help & FAQ</a></li>
                <li><a href="#" style={{ color: "#080809", textDecoration: "none" }}>Press</a></li>
                <li><a href="#" style={{ color: "#080809", textDecoration: "none" }}>Affiliate</a></li>
              </ul>
            </div>
            <div style={{ textAlign: "center" }}>
              <h4 style={{ color: "#080809", fontWeight: "700", fontSize: "1.1rem" }}>More</h4>
              <ul style={{ listStyle: "none", padding: "0", margin: "10px 0" }}>
                <li><a href="#" style={{ color: "#080809", textDecoration: "none" }}>Airline Fees</a></li>
                <li><a href="#" style={{ color: "#080809", textDecoration: "none" }}>Airline</a></li>
                <li><a href="#" style={{ color: "#080809", textDecoration: "none" }}>Low Fare Tips</a></li>
              </ul>
            </div>
          </div>


          <div style={{ flex: "1", minWidth: "200px", textAlign: "center" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                marginBottom: "15px",
                cursor: "pointer",
              }}
            >
              <FaFacebookSquare size={24} />
              <FaInstagram size={24} />
              <FaTwitterSquare size={24} />
            </div>
            <h4 style={{ marginBottom: "10px" }}>Discover our app</h4>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
              <img src="apple-app-store-logo.jpg" alt="App Store" width="100" />
              <img src="playstore3.png" alt="Play Store" width="100" />
            </div>
            <p style={{ marginTop: "20px", color: "#888", fontSize: "0.8rem" }}>All rights reserved © webiyor.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
