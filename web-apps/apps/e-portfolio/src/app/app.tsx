// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { useEffect, useState } from "react";
import auth, { callback, getToken } from "./auth";
import axios from 'axios';

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
