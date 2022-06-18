import React from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Wedge } from "react-konva";

const App = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Wedge
          x={100}
          y={100}
          radius={70}
          angle={60}
          fill={"red"}
          stroke={"black"}
          strokeWidth={4}
          rotation={-120}
        />
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
