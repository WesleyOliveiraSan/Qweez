import React from 'react'

//Dependencies
import { MDBCardText, MDBCardBody, MDBProgress } from 'mdbreact'

function QuizHeader({ question, questionNumber, category, difficulty, score, timer, theme }) {

    return (
        <MDBCardBody className="bg-white rounded-top text-dark p-0">
            <MDBProgress value={timer / 120 * 100} animated color={theme} className="pb-2 bg-white" />
            <div className="m-2 ">
                <div className="text-right">
                    <p className={`mb-0 mr-3 h4 text-${theme}`}><span>{score}</span></p>
                </div>
                <div className="text-center my-3">
                    <h1 className={`mb-3 text-${theme}`}>Question <span>{questionNumber + 1}</span></h1>
                    <MDBCardText className="mb-0 mt-n4 mb-3">{category}</MDBCardText>
                    <p className="mb-0">{question}</p>
                </div>
                <div className="text-center">
                    <p className="mb-0">Difficulty: <span>{difficulty}</span></p>
                </div>
            </div>
        </MDBCardBody>
    )
}

export default React.memo(QuizHeader)
