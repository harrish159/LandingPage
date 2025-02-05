import React, { useState } from "react";
import { Email, Phone } from "@mui/icons-material";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Success");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "100%",
          maxWidth: "400px",
          borderTop: "6px solid #22c55e",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#374151",
            marginBottom: "20px",
          }}
        >
          Contact Us
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label style={{color: "#4b5563" }}>
              User Name:
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #d1d5db",
                borderRadius: "5px",
              }}
              required
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                color: "#4b5563",
              }}
            >
              <Email style={{ color: "#22c55e" }} /> E-mail:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #d1d5db",
                borderRadius: "5px",
              }}
              required
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                color: "#4b5563",
              }}
            >
              <Phone style={{ color: "#22c55e" }} /> Phone Number:
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #d1d5db",
                borderRadius: "5px",
              }}
              required
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#22c55e",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
