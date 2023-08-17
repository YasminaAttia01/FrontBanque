import React from "react";
import { ColorScheme } from "../utils/theme";

const Home = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: ColorScheme.PRIMARY,
        marginTop: "-48px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          style={{
            color: ColorScheme.WHITE,
            textTransform: "uppercase",
            letterSpacing: 10,
            fontSize: 64,
            fontWeight: "bold",
          }}
        >
          MY BANK
        </div>
        <div style={{ color: ColorScheme.WHITE, letterSpacing: 8 }}>
          Banking made easy.
        </div>
      </div>
    </div>
  );
};

export default Home;
