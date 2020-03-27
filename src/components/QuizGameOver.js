import React from 'react'

//Dependencies
import { MDBProgress } from 'mdbreact'

function QuizGameOver({ name, score, correctAnswer, questionNumber, timer }) {

    let result = correctAnswer / questionNumber * 100

    const resultFeedback = () => {
        if (questionNumber < 10) {
            return result === 0 ? "You didn't get any right! :(" : result < 50 ? "You could do way better!" : result < 100 ? "you played well! :)" : "You got all of them right, congratz! :)"
        } else {
            return result === 0 ? "You didn't get any right! :(" : result < 10 ? "You almost didn't got any right! :/" : result < 25 ? "You could've done better! :/" : result < 50 ? "Keep it up, you can do better!" : result < 75 ? "You played well! :)" : result < 90 ? "You did great! :)" : result < 100 ? "That was Awesome!" : "You got all fo them right! :O you won me!"
        }
    }

    return (
        <div className="m-2">
            <div className="text-center mt-md-5 mt-4">
                <h1 className="text-danger mb-4">Game Over</h1>
                <h1 className="text-info d-md-block d-none">Congratulations{name && <span>,<br />{name}</span>}!</h1>
                <h2 className="text-info d-md-none d-block">Congratulations{name && <span>,<br />{name}</span>}!</h2>
                <p className="grey-text mt-4">In {Math.floor((120 - timer) / 60)}:{((120 - timer) % 60) < 10 ? `0${(120 - timer) % 60}` : (120 - timer) % 60} {Math.floor((120 - timer) / 60) > 0 ? "Minutes": "Seconds"}, you answered {questionNumber} questions, and scored {score} points</p>
            </div>
            <div className="text-center mt-5">
                <p>Your result:</p>
                <MDBProgress value={result} color="success" className="bg-danger" >
                    {correctAnswer > 0 && `${correctAnswer}/${questionNumber}`}
                </MDBProgress>
                <p className="grey-text mt-4">{resultFeedback()}</p>
            </div>
            <div className="text-center mt-5">
                <a href="" onClick={() => window.location.reload()} className="text-info">I Wanna Play Again</a>
            </div>
        </div>
    )
}

export default QuizGameOver
