'use client'
export default function Booking() {
   return (
     <main style={{ marginBottom: "50px", padding: "0 20px" }}>
       <div
         style={{
           display: "flex",
           flexWrap: "wrap",
           gap: "20px",
           alignItems: "flex-start",
         }}
       >
         <div
           style={{
             flex: "1 1 50%",
             minWidth: "300px",
             padding: "0 20px",
             boxSizing: "border-box",
           }}
         >
           <div style={{ marginLeft: "5%", marginTop: "90px" }}>
             <h5
               style={{
                 color: "#5e6282",
                 fontWeight: "700",
                 marginBottom: "1rem",
                 fontSize: "1.125rem",
               }}
             >
               Easy and Fast
             </h5>
             <h3
               style={{
                 fontSize: "2.5rem",
                 fontWeight: "700",
                 color: "#181e4b",
                 marginBottom: "5px",
                 lineHeight: "1.1",
                 marginTop: "0",
                 textTransform: "capitalize",
               }}
             >
               Book your next trip in 3 <br /> Easy steps
             </h3>
             <div style={{ display: "flex", alignItems: "center", marginTop: "30px" }}>
               <div
                 style={{
                   borderRadius: "13px",
                   marginRight: "1.8rem",
                   padding: "0.5rem",
                   backgroundColor: "#f1a601",
                 }}
               >
                 <img src="854894.png" alt="Choose Destination Icon" width="24" />
               </div>
               <div>
                 <h5
                   style={{
                     color: "#5e6282",
                     fontWeight: "700",
                     fontSize: "1rem",
                   }}
                 >
                   Choose Destination
                 </h5>
                 <p>
                   Choose your favorite place. No matter
                   <br />
                   where you travel inside.
                 </p>
               </div>
             </div>
             <div style={{ display: "flex", alignItems: "center", marginTop: "30px" }}>
               <div
                 style={{
                   borderRadius: "13px",
                   marginRight: "1.8rem",
                   padding: "0.5rem",
                   backgroundColor: "#df6951",
                 }}
               >
                 <img src="credit-card.png" alt="Payment Icon" width="24" />
               </div>
               <div>
                 <h5
                   style={{
                     color: "#5e6282",
                     fontWeight: "700",
                     fontSize: "1rem",
                   }}
                 >
                   Make Payment
                 </h5>
                 <p>
                   After finding your perfect spot, make your
                   <br />
                   payment and get ready to travel.
                 </p>
               </div>
             </div>
 
             <div style={{ display: "flex", alignItems: "center", marginTop: "30px" }}>
               <div
                 style={{
                   borderRadius: "13px",
                   marginRight: "1.8rem",
                   padding: "0.5rem",
                   backgroundColor: "#006380",
                 }}
               >
                 <img src="car-placeholder.png" alt="Airport Icon" width="24" />
               </div>
               <div>
                 <h5
                   style={{
                     color: "#5e6282",
                     fontWeight: "700",
                     fontSize: "1rem",
                   }}
                 >
                   Reach Airport on Selected Date
                 </h5>
                 <p>
                   Lastly, arrive at the airport on time
                   <br />
                   and enjoy your vacation.
                 </p>
               </div>
             </div>
           </div>
         </div>
 
         <div
           style={{
             flex: "1 1 50%",
             minWidth: "300px",
             display: "flex",
             justifyContent: "center",
             alignItems: "center",
           }}
         >
           <div
             style={{
               position: "relative",
               maxWidth: "100%",
               boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
               padding: "1rem",
               background: "#fff",
               borderRadius: "1.5rem",
               marginTop: "50px",
               transition: "0.3s",
             }}
           >
             <img
               src="bookingimg.png"
               alt="Booking Image"
               style={{
                 width: "100%",
                 borderRadius: "1.5rem",
               }}
             />
           </div>
         </div>
       </div>

       <style jsx>{`
         @media (max-width: 768px) {
           main {
             padding: 20px 10px;
           }
           h3 {
             font-size: 2rem;
           }
           .booking-steps div {
             flex-direction: column;
           }
           /* Stack sections vertically on small screens */
           .booking-section {
             flex-direction: column;
           }
         }
       `}</style>
     </main>
   );
 }
 

