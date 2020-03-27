import React from 'react'

//Dependencies
import { MDBInput, MDBBtn } from 'mdbreact'

function QuizMenu({ name, setName, setCategory, setPlaying }) {

    return (
        <div className="m-2">
            <div className="mt-md-5 mt-4">
                <h1 className="text-info text-center d-md-block d-none">Let's Play Qweez!</h1>
                <h2 className="text-info text-center d-md-none d-block">Let's Play Qweez!</h2>
                <p className="text-center grey-text mt-4 mx-2">How many questions can you answer in 2 minutes?!</p>
            </div>
            <MDBInput className="mb-n3 mt-5" outline label="Your name" value={name} onChange={(e) => setName(e.target.value)} />
            <select className="browser-default custom-select mb-2" name="category" onChange={(e) => setCategory(e.target.value)} >
                <option value="0">Any Category</option>
                <option value="9">General Knowledge</option>
                <option value="10">Entertainment: Books</option>
                <option value="11">Entertainment: Film</option>
                <option value="12">Entertainment: Music</option>
                <option value="14">Entertainment: Television</option>
                <option value="15">Entertainment: Video Games</option>
                <option value="16">Entertainment: Board Games</option>
                <option value="17">Science &amp; Nature</option>
                <option value="18">Science: Computers</option>
                <option value="21">Sports</option>
                <option value="22">Geography</option>
                <option value="23">History</option>
                <option value="27">Animals</option>
                <option value="28">Vehicles</option>
                <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                <option value="32">Entertainment: Cartoon &amp; Animations</option>
            </select>
            <div className="text-center mt-5">
                <MDBBtn color="info" onClick={() => setPlaying(true)}>Play!</MDBBtn>
            </div>
            <div className="text-center mt-5">
                {name.length >= 3 && <p>Good luck, <span className="text-info"><span>{name}</span>!</span> =)</p>}
            </div>
        </div>
    )
}

export default QuizMenu
