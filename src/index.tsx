import React from "react";
import { initializeWidget } from "@ones/plugin-sdk";
import { Setting } from "./setting";

export const HelloWorld: React.FC = () => {
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <div style={{ flexGrow: 1, overflow: "auto", padding: "0 8px" }}>
        hello，world 🚀
      </div>
      <Setting />
    </div>
  );
};

initializeWidget(HelloWorld, process.env.PLUGIN_PACKAGE_ID);
