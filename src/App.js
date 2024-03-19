import logo from './logo.svg';
import './App.css';
import Box from './component/Box'
import {useState} from 'react'


const choice = {
  rock:{
    name:'rock',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR24zKmlMXdcostPZi0GGKkZSkg3zL5A6mH2w&usqp=CAU'
  },
  scissors:{
    name:'scissors',
    img:'https://m.yarn-a.com/web/product/big/202206/724ce62e343ad83f1006d4bc0b2abaaa.jpg'
  },
  paper:{
    name:'paper',
    img:'https://i.etsystatic.com/19232050/r/il/6233a6/3092080944/il_570xN.3092080944_mra0.jpg'
  },
}

function App() {
  const [userSelect, setUserSelect] =useState(null)
  const play = (userChoice) =>{
    setUserSelect(choice[userChoice])
  }
  return (
    <>
    <div className='main'>
      <Box title="You" item={userSelect}/>
      {/* <Box title="computer"/> */}
    </div>
    <div className='main'>
      <button onClick={()=>play("scissors")}>가위</button>
      <button onClick={()=>play("rock")}>바위</button>
      <button onClick={()=>play("paper")}>보</button>
    </div>
    </>

  );
}

export default App;
