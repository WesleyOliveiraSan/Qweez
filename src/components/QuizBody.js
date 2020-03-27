import React, { useState } from 'react'

//Dependencies
import { MDBBtn, MDBCardFooter } from 'mdbreact'

function QuizBody({ correct, incorrect, difficulty, setQuestionNumber, setCorrectAnswer, setScore, theme }) {

    const [style, setStyle] = useState({ color: theme, disabled: false })
    const [randomize, setRandomize] = useState(Math.floor(Math.random() * 4) + 1)

    const decodeHTML = (html) => {
        let txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    };

    let options = {}

    switch (randomize) {
        case 1:
            options = { 1: correct, 2: incorrect[0], 3: incorrect[1], 4: incorrect[2] }
            break;
        case 2:
            options = { 1: incorrect[0], 2: correct, 3: incorrect[1], 4: incorrect[2] }
            break;
        case 3:
            options = { 1: incorrect[0], 2: incorrect[1], 3: correct, 4: incorrect[2] }
            break;
        default:
            options = { 1: incorrect[0], 2: incorrect[1], 3: incorrect[2], 4: correct }
            break;
    }

    const handleAnswer = (newColor) => {
        setStyle({ color: newColor, disabled: true })
        setTimeout(() => {
            setStyle({ color: theme, disabled: false })
            setQuestionNumber(prevQuestionNumber => prevQuestionNumber + 1)
            setRandomize(Math.floor(Math.random() * 4) + 1)
        }, 500)
    }

    const handleClick = (option) => {

        if (option === correct) {
            handleAnswer('green')
            setCorrectAnswer(prevCorrectAnswer => prevCorrectAnswer + 1)
            switch (difficulty) {
                case 'easy':
                    setScore(prevScore => prevScore + 10)
                    break;
                case 'medium':
                    setScore(prevScore => prevScore + 20)
                    break;
                case 'hard':
                    setScore(prevScore => prevScore + 30)
                    break;
                default :
                    break;
            }
        } else {
            handleAnswer('red')
        }
    }

    return (
        <MDBCardFooter border="0" className={`bg-${theme}`}>
            <div className="bg-white rounded-pill">
                <MDBBtn className="w-100" onClick={() => handleClick(options[1])} {...style}><p className="mb-0">{decodeHTML(options[1])}</p></MDBBtn>
                <MDBBtn className="w-100" onClick={() => handleClick(options[2])} {...style}><p className="mb-0">{decodeHTML(options[2])}</p></MDBBtn>
                <MDBBtn className="w-100" onClick={() => handleClick(options[3])} {...style}><p className="mb-0">{decodeHTML(options[3])}</p></MDBBtn>
                <MDBBtn className="w-100" onClick={() => handleClick(options[4])} {...style}><p className="mb-0">{decodeHTML(options[4])}</p></MDBBtn>
            </div>
        </MDBCardFooter>
    )
}

export default React.memo(QuizBody)
