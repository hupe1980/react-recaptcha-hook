import React from "react";
import { Recaptcha } from "./recaptcha";

function App() {
  return (
    <Recaptcha
      action="test"
      sitekey={process.env.REACT_APP_SITEKEY || "YOUR_SITEKEY"}
      onToken={(token: string) => console.log(token)}
    />
  );
}

export default App;
