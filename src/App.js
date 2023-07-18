import React from "react";
import {nanoid} from 'nanoid'
import Die from './die.js'


function App() {
  const [dice, setDice] = React.useState(allNewDice())
    const [tenzie, setTenzie] = React.useState(false)
    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allValue = dice.every(die => die.value === firstValue)
        if (allHeld && allValue){
            setTenzie(true)
        console.log("You won")}
    }, [dice])
    function generateDie(){
        return{value:Math.floor(Math.random() * 6) + 1, 
            isHeld: false,
            id: nanoid()
            }
        
    }
   
    function rollDice(){
        if(tenzie === false){
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld ? die :
            generateDie()
        } ))}else{
            setTenzie(false)
            setDice(allNewDice())
        }
    } 
    function allNewDice(){
        const newDice = []
        for (let i=0; i < 10; i++){
            newDice.push({
                value:Math.floor(Math.random() * 6) + 1, 
                isHeld: false,
                id: nanoid()})
        }
        return newDice
        
    }
    function isHold(id){
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? {
                ...die, isHeld: !die.isHeld
            } : die
        }))
    }
     const diceElements = dice.map(die => (
         <Die key={die.id} isHeld={die.isHeld} value={die.value} isHold={() => isHold(die.id)} />))
    
    return(
        <main>
        <div className="container">
        {diceElements}
        <button className="die-roll" onClick={rollDice}>{tenzie ? "New" : "Roll"}</button>
        </div>
        
        </main>
    )
}

 

export default App;


    