import TheHangingMan from "./components/theHangingMan/theHangingMan"
import Word from "./components/word/word";
import Keyboard from "./components/keyboard/keyboard";
import { useRef, useState } from "react";
import './App.scss' ;
type ListContent = string[] ;
let contentArr:ListContent = ['hello','application','content','frontend','backend','api','code','bootcamp'] ;

function App() {
  const [data,setData] = useState('') ;
  const [numbData,setNumbData] = useState<number>(0) ;
  const [isDone,setIsDone] = useState<boolean>(false) ;
  let reRoll:number = Math.floor(Math.random()*contentArr.length) ;
  const dataSaved = useRef<string>(contentArr[reRoll]) ;
  return (
    <div className="wrapperAll">
      { isDone && <h1 className="contentWinLoose">CONGRATULATION ! , YOU WIN THE GAME</h1> }
      { numbData>=5 && <h1 className="contentWinLoose">YOU LOOSE ! , BETTER LUCK NEXT TIME</h1>}
      <TheHangingMan numbHanging={numbData}/>
      <Word name={dataSaved.current as string} content={data} funcSetNumb={setNumbData}
        setWinLoose={setIsDone}/>
      <Keyboard addData={setData}/>
    </div>
  )
}

export default App
