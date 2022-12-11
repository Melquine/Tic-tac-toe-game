import { useState, useEffect } from 'react'
import { Patterns } from './patterns'
import Square from './components/Square'
import './App.css'

function App() {
  const [board, setBoard] = useState<string[]>(['', '', '', '', '', '', '', '', ''])
  const [player, setPlayer] = useState<string>('O')
  const [result, setResult] = useState({winner: 'none', status: 'none'})

  useEffect(() => {
    console.log('Board_Effect: ', board)
    checkWin()
    chekIfTie()
    player == 'X' ? setPlayer('O') : setPlayer('X')
    console.log('player: ', player)
  }, [board])

  useEffect(() => {
    console.log('result_Effect: ', result)
    result.status !== 'none' ? alert(`Winning player: ${result.winner}`) : null
    restarGame()
  }, [result])

  const chooseSquare = (square: number) => {
    setBoard(
      board.map((val:string, idx:number) => {
        if(idx == square && val == '') {
          return player
        }
        return val
      })
    )


  }

  const checkWin = () => {
    console.log('player actual ', player)
    Patterns.forEach((currentPattern: number[]) => {
      const firstPlayer = board[currentPattern[0]]
      if(firstPlayer == '') return
      let foundWinnigPattern = true
      currentPattern.forEach((idx: number) => {
        if(board[idx] != firstPlayer) {
          foundWinnigPattern = false
        }
      })
       
      if(foundWinnigPattern) {
        setResult({winner: player, status: 'won'})
      }
    })
  }

  const chekIfTie = () => {
    let filled = true
    board.forEach((square:string) => {
      square === '' ? filled = false : null
    })
    filled ? setResult({winner: 'No one', status: 'Tie'}) : null
  }

  const restarGame = () => {
    setBoard(['', '', '', '', '', '', '', '', ''])
    setPlayer('O')
  }

  return (
    <div className="App">
      <div className='board'>
        <div className='row'>
          <Square val={board[0]} chooseSquare={() => chooseSquare(0)} />
          <Square val={board[1]} chooseSquare={() => chooseSquare(1)} />
          <Square val={board[2]} chooseSquare={() => chooseSquare(2)} />
        </div>
        <div className='row'>
          <Square val={board[3]} chooseSquare={() => chooseSquare(3)} />
          <Square val={board[4]} chooseSquare={() => chooseSquare(4)} />
          <Square val={board[5]} chooseSquare={() => chooseSquare(5)} />
        </div>
        <div className='row'>
          <Square val={board[6]} chooseSquare={() => chooseSquare(6)} />
          <Square val={board[7]} chooseSquare={() => chooseSquare(7)} />
          <Square val={board[8]} chooseSquare={() => chooseSquare(8)} />
        </div>
      </div>
    </div>
  )
}

export default App
