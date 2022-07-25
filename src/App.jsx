import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import users from "./json/users.json";
import colors from "./utils/colors";
import QuoteBox from "./components/QuoteBox";

function App() {
  // _-------------
  const getElementUsers = (arr) => {
    const indexRandom = Math.floor(Math.random() * users.length);
    return arr[indexRandom];
  };

  let userRandom = getElementUsers(users);
  let colorRandom = getElementUsers(colors);

  const [randomUsers, setRandomUsers] = useState(userRandom);
  const [randomColors, setRandomColors] = useState(colorRandom);

  const getRandomAll = () => {
    setRandomUsers(getElementUsers(users));
    setRandomColors(getElementUsers(colors));
  };
  console.log(randomUsers, randomColors);
  // _-------------
  const objStyle = {
    backgroundColor: randomColors,
  };
  return (
    <div className="App" style={objStyle}>
      <QuoteBox
        randomUsers={randomUsers}
        randomColors={randomColors}
        getRandomAll={getRandomAll}
      />
    </div>
  );
}

export default App;
