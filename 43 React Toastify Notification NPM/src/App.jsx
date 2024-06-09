import "./App.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const handlePlusButton = () => {
    toast(" + Plus Button Clicked");
  };

  const handleMinusButton = () => {
    toast(" - Minus Button is Clicked");
  };

  return (
    <div>
      <h2>Hello, Click Below</h2>
      <button onClick={handlePlusButton}>Click +</button>
      <button onClick={handleMinusButton}>Click -</button>
      <ToastContainer />
    </div>
  );
}

export default App;
