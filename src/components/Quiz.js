import React, { useState } from 'react';

//Dependencies
import { MDBCard, MDBCol } from 'mdbreact';

//Components
import QuizGame from './QuizGame'
import QuizMenu from './QuizMenu'

function Quiz() {

  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [playing, setPlaying] = useState(false)

  return (
    <MDBCol className="mt-md-0" lg="4" md="6" size="12">
      <MDBCard style={{ minHeight: "75vh" }}>
        {playing ?
          <QuizGame name={name} category={category} />
          :
          <QuizMenu name={name} setName={setName} setCategory={setCategory} setPlaying={setPlaying} />
        }
      </MDBCard>
      <div className="text-right">
        <a href="https://www.linkedin.com/in/wesleyoliveiras/" target="_blank" rel="noopener noreferrer" className="text-info mb-0"><small>Qweez!</small></a>
      </div>
    </MDBCol>
  );
}

export default Quiz;
