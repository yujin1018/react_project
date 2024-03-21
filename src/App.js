import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

const choice = {
  rock: {
    name: "Rock",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR24zKmlMXdcostPZi0GGKkZSkg3zL5A6mH2w&usqp=CAU'
  },
  scissors: {
    name: "Scissors",
    img: 'https://m.yarn-a.com/web/product/big/202206/724ce62e343ad83f1006d4bc0b2abaaa.jpg',
  },
  paper: {
    name: "Paper",
    img: 'https://i.etsystatic.com/19232050/r/il/6233a6/3092080944/il_570xN.3092080944_mra0.jpg'
  },
};
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState('');
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    console.log("item array", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    console.log("random value", randomItem);
    let final = itemArray[randomItem];
    return choice[final];
  };
  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);

    if (user.name == computer.name) {
      return "tie";
    } else if (user.name == "Rock")
      return computer.name == "Scissors" ? "win" : "lose";
    else if (user.name == "Scissors")
      return computer.name == "Paper" ? "win" : "lose";
    else if (user.name == "Paper")
      return computer.name == "Rock" ? "win" : "lose";
  };
  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위✌️</button>
        <button onClick={() => play("rock")}>바위✊</button>
        <button onClick={() => play("paper")}>보✋</button>
      </div>
    </div>
  );
}

export default App;

