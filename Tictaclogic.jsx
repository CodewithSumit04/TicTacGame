import { use, useState } from "react";

function TicTac() {
    const [board, setboard] = useState(Array(9).fill(null));
    const [move, setmove] = useState(true);
    let handleclick = (i) => {
        if (board[i]) {
            return;
        }
        let newboard = [...board];
        newboard[i] = move ? "X" : "O";
        setboard(newboard);
        setmove(!move);
        calculatewin();
    };

    const calculatewin = () => {
        let pattern = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < pattern.length; i++) {
            const [a, b, c] = pattern[i];
            if (board[a] != null && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            } 
        }

        return false;
    };
    let winner = calculatewin();

    const ResetGame = () => {
        setboard(Array(9).fill(null))
        setmove(true)
    }

    return (
        <>
            {winner ? <h1>{winner} win</h1> : winner}
            <br />
            <h2>Tic Tac Toe Game</h2>
            <div className="content">
                <button onClick={() => handleclick("0")}>{board[0]}</button>
                <button onClick={() => handleclick("1")}>{board[1]}</button>
                <button onClick={() => handleclick("2")}>{board[2]}</button>
                <button onClick={() => handleclick("3")}>{board[3]}</button>
                <button onClick={() => handleclick("4")}>{board[4]}</button>
                <button onClick={() => handleclick("5")}>{board[5]}</button>
                <button onClick={() => handleclick("6")}>{board[6]}</button>
                <button onClick={() => handleclick("7")}>{board[7]}</button>
                <button onClick={() => handleclick("8")}>{board[8]}</button>
                <br />
            </div>
            <button className="reset" onClick={() => {
                ResetGame()
            }}>Reset Game</button>
        </>
    );
}

export default TicTac
