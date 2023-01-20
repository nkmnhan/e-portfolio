// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { useEffect } from "react";
import auth, { callback } from "./auth";

export function App() {
  return (
    <>
      <button onClick={auth}>click</button>
      <button onClick={callback}>reload</button>
      <div />
    </>
  );
}
export default App;
