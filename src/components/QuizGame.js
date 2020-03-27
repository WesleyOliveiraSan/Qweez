import React, { useState, useEffect, useRef } from 'react';

//Dependecies
import { } from 'mdbreact';
import axios from 'axios';

//Components
import QuizHeader from './QuizHeader';
import QuizBody from './QuizBody';
import QuizLoading from './QuizLoading'
import QuizGameOver from './QuizGameOver'

function QuizGame({ name, category }) {

    const [loading, setLoading] = useState(true)
    const [gameOver, setGameOver] = useState(false)

    const [questions, setQuestions] = useState([])
    const [question, setQuestion] = useState({})
    const [questionNumber, setQuestionNumber] = useState(0)
    const [correctAnswer, setCorrectAnswer] = useState(0)
    const [score, setScore] = useState(0)
    const [timer, setTimer] = useState(120)
    const [theme, setTheme] = useState('info')
    const intervalRef = useRef()

    const decodeHTML = (html) => {
        let txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    };

    const randomTheme = () => {
        let random = Math.floor(Math.random() * 4) + 1
        switch (random) {
            case 1:
                setTheme('info')
                break;
            case 2:
                setTheme('success')
                break;
            case 3:
                setTheme('danger')
                break;
            default:
                setTheme('warning')
                break;
        }
    }

    useEffect(() => {
        axios.get(`https://opentdb.com/api.php?amount=50&category=${category}&type=multiple`)
            .then(res => {
                setQuestions(res.data.results)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        setQuestion(questions[questionNumber])
        randomTheme()
    }, [questions, questionNumber])

    useEffect(() => {
        if (!loading) {
            intervalRef.current = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1)
            }, 1000)
            return (() => {
                clearInterval(intervalRef.current)
            })
        }
    }, [loading])

    useEffect(() => {
        if (timer <= 0) {
            clearInterval(intervalRef.current)
            setGameOver(true)
        }
    }, [timer])

    useEffect(() => {
        if (questionNumber >= 50) {
            clearInterval(intervalRef.current)
            setGameOver(true)
        }
    }, [questionNumber])

    return (
        <>
            {loading ?
                <QuizLoading />
                :
                gameOver ?
                    <QuizGameOver
                        name={name}
                        score={score}
                        correctAnswer={correctAnswer}
                        questionNumber={questionNumber}
                        timer={timer}
                    />
                    :
                    <>
                        <QuizHeader
                            question={decodeHTML(question.question)}
                            questionNumber={questionNumber}
                            category={question.category}
                            difficulty={question.difficulty}
                            score={score}
                            timer={timer}
                            theme={theme}
                        />
                        <QuizBody
                            correct={question.correct_answer}
                            incorrect={question.incorrect_answers}
                            difficulty={question.difficulty}
                            setQuestionNumber={setQuestionNumber}
                            setCorrectAnswer={setCorrectAnswer}
                            setScore={setScore} theme={theme}
                        />
                    </>
            }
        </>
    );
}

export default QuizGame;
