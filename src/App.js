import React, { useState } from "react";

import Clock from "./Clock";

function App() {
  const [showClock, setShowClock] = useState(true);
  
 useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup function
    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div>
      {showClock ? <Clock /> : null}
      <button onClick={() => setShowClock(!showClock)}>Toggle Clock</button>
    </div>
  );
}

export default App;
