import React from "react";
import { ColorScheme } from "../utils/theme";

const Home = () => {
  return (
    <div
      style={{
        height: "calc(100vh - 72px)",
        backgroundColor: ColorScheme.PRIMARY,
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
