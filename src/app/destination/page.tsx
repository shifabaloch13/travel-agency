export default function Destination() {
  return (
    <main style={{ marginBottom: "50px" }}>
      <div
        style={{
          textAlign: "center",

        }}
      >
        <h4
          style={{
            color: "#5e6282",
            fontSize: "1.125rem",
            marginBottom: "0px",
          }}
        >
          Top selling
        </h4>
        <h3
          style={{
            margin: "0",
            fontSize: "3.24rem",
            textTransform: "capitalize",
            fontWeight: "400",
          }}
        >
          We offer the best services
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: "0 20px",
          gap: "20px",
        }}
      >
        {[
          {
            img: "dest1 (1).jpg",
            location: "Rome, Italy",
            price: "$5.24k",
            description: "Lost in the timeless beauty of Rome, where every corner tells a story 🇮🇹.",
          },
          {
            img: "dest2.jpg",
            location: "London, UK",
            price: "$5.24k",
            description: "Chasing iconic sights and cozy corners in London town 🇬🇧.",
          },
          {
            img: "dest3.jpg",
            location: "Full Europe",
            price: "$5.24k",
            description: "Exploring the Heart of History and Culture: A Journey Across Europe.",
          },
        ].map((destination, index) => (
          <div
            key={index}
            style={{
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              transition: "0.3s",
              width: "100%",
              maxWidth: "300px",
              padding: "1.5rem",
              textAlign: "center",
              backgroundColor: "#fff",
              border: "1px solid rgba(0,0,0,0.125)",
              borderRadius: "1.5rem",
            }}
          >
            <img
              src={destination.img}
              alt={destination.location}
              style={{
                width: "100%",
                height: "auto",
                borderTopLeftRadius: "1.5rem",
                borderTopRightRadius: "1.5rem",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "1rem",
              }}
            >
              <h4
                style={{
                  color: "#5e6282",
                  fontWeight: "500",
                  fontSize: "1.26rem",
                  margin: "0",
                }}
              >
                {destination.location}
              </h4>
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "1.125rem",
                  color: "#414141",
                }}
              >
                {destination.price}
              </span>
            </div>
            <p style={{ fontSize: "1rem", color: "#414141" }}>
              {destination.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
