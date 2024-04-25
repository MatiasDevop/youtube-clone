import { useState } from "react";

import "./index.css";
import PageHeader from "./layout/PageHeader";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="max-h-screen flex flex-col">
        <PageHeader />
        <div className="">1</div>
        <div>122</div>
      </div>
    </>
  );
}

export default App;
