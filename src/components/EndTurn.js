import React, { memo } from 'react'

export const EndTurn = memo((props = {}) => {
    const {history, setHistory, currentTurn, setCurrentTurn, setCurrentMove, setSelectedCell, playerOnTurn, board, winner, setSelected, setEnemySelected, setEnemySelectedRow, setEnemySelectedCell} = props
    const nextHistory = history.map(turns => turns.map(move => Object.assign({}, move)))
    const nextPlayerOnTurn = playerOnTurn === 'gold' ? 'silver' : 'gold'
    const nextBoard = board.map(row => [...row])
    
    const handleClick = () => {
        nextHistory.push([{
            playerOnTurn: nextPlayerOnTurn,
            movesLeft: 4,
            winner,
            board: nextBoard
        }])
        setHistory(nextHistory)
        
        setCurrentTurn(currentTurn + 1)
        setCurrentMove(0)
        setSelectedCell([])
        setSelected([])
        setEnemySelected([])
        setEnemySelectedRow([])
        setEnemySelectedCell([])
        return 
    }
    
    return (
        <>{
            <button onClick={handleClick} type="button" className="end-turn-btn">
                End Turn
            </button>
            }
        </> 
    )
})