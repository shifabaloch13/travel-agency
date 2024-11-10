export default function Testimonials() {
  return (
    <main style={{ marginTop: "2rem", marginBottom: "2rem" }}>
      <div
        style={{
          maxWidth: "1320px",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "0 1rem",
        }}
      >
        <div
          style={{
            background: "rgba(223,215,249,0.2)",
            borderRadius: "129px 20px 20px 20px",
            textAlign: "center",
            padding: "5rem 2.5rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div>
            <img
              src="send.png"
              alt="send icon"
              style={{
                float: "left",
                left: "100%",
                top: "0",
                position: "absolute",
                width: "30px",
                height: "30px",
              }}
            />
          </div>
          <div
            style={{
              zIndex: "-1",
              bottom: "0",
              top: "0",
              position: "absolute",
              left: "1rem",
            }}
          >
          </div>
          <div
            style={{
              zIndex: "-1",
              right: "0",
              top: "0",
              position: "absolute",
            }}
          >
            <img
              src="shape-bg2.png"
              alt="background shape"
              style={{
                verticalAlign: "middle",
                width: "15vw",
                maxWidth: "264px",
              }}
            />
          </div>
          <div
            style={{
              width: "90%",
              maxWidth: "800px",
              margin: "auto",
              padding: "0 1rem",
            }}
          >
            <div style={{ display: "block", width: "100%" }}>
              <h2
                style={{
                  color: "#5e6282",
                  lineHeight: "1.7rem",
                  marginBottom: "2rem",
                  fontSize: "1.4rem",
                }}
              >
                Subscribe to get information, latest news, and other interesting
                offers about Cobhum
              </h2>
            </div>
            <form
              action=""
              style={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <input
                type="email"
                placeholder="Enter your Email"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "10px",
                  color: "#39425d",
                  padding: "1rem",
                  fontSize: "14px",
                  border: "none",
                  flex: "1 1 200px",
                  minWidth: "200px",
                  maxWidth: "300px",
                }}
              />
              <button
                style={{
                  backgroundColor: "#5e6282",
                  color: "#ffffff",
                  padding: "1rem 2rem",
                  borderRadius: "10px",
                  fontSize: "14px",
                  border: "none",
                  cursor: "pointer",
                  flex: "0 1 auto",
                  minWidth: "120px",
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
