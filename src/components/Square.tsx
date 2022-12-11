import React from 'react'
import '../App.css'

interface IProps {
    val: string;
    chooseSquare: () => void;
}

const Square = ({val, chooseSquare}: IProps) => {
    return (
        <div className='square' onClick={chooseSquare}>
            {val}
        </div>
    )
}

export default Square