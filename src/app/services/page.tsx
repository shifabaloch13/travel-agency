export default function Services() {
  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "2rem",
  
        }}
      >
        <h4
          style={{
            color: "#5e6282",
            fontSize: "1.125rem",
            marginBottom: "0",
          }}
        >
          CATEGORY
        </h4>
        <h3
          style={{
            margin: "0",
            fontSize: "2.5rem",
            textTransform: "capitalize",
            fontWeight: "400",
          }}
        >
          We Offer Best Services
        </h3>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {[
          { icon: "icon1.png", title: "Calculated Weather", description: "Built wicket longer admire do barton vanity itself do in it." },
          { icon: "icon2.png", title: "Best Flight", description: "Engrossed listening. Park sell they west hard for the." },
          { icon: "icon3.png", title: "Local Events", description: "Barton vanity itself do in it preferred to man it Engrossed listening." },
          { icon: "icon4.png", title: "Customization", description: "We deliver outsourced aviation services for military customers." },
        ].map((service, index) => (
          <div
            key={index}
            style={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "0.3s",
              padding: "2rem",
              textAlign: "center",
              backgroundColor: "#fff",
              border: "1px solid rgba(0, 0, 0, 0.125)",
              borderRadius: "1.5rem",
              flex: "1 1 250px",
              maxWidth: "300px",
            }}
          >
            <img src={service.icon} alt="service icon" width="75" />
            <h4 style={{ fontSize: "1.25rem", margin: "1rem 0" }}>{service.title}</h4>
            <p style={{ fontSize: "1rem", color: "#777" }}>{service.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
