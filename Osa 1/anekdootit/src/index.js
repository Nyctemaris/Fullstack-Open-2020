import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>
    {text}
  </button>
);
const randomAnecdote = (selected) => {
  // Generate random number until it does not match the current anecdote number
  // We don't want to show the same anecdote twice in row

  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * Math.floor(anecdotes.length));
  } while (selected === randomNumber)
  return (
    randomNumber
  )
}
const handleVote = (selected, votes, mostVotes, setMostVoted) => {
// Copy the current votes Array
  let votesTemp = [...votes];
// add a new vote to the array
  votesTemp[selected] += 1;
// Check if most voted anecdote needs to be updated
  if (votesTemp[selected] > votesTemp[mostVotes]) {
    setMostVoted(selected)
  }
// return new votes array
  return (
    votesTemp
  )
}
const App = (props) => {
  const [selected, setSelected] = useState(0)

  // Create a new table that has size equal to anecdote amount and fill it with 0's
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const [mostVotes, setMostVoted] = useState(0);
  const mostVotesTitle = 'Anecdote with most votes';

  return (
    <div>
      <div>
        {props.anecdotes[selected]}
      </div>
      <div>
        {votes[selected]}
      </div>
      <div>
        <Button text='vote' handleClick={() => setVotes(handleVote(selected, votes, mostVotes, setMostVoted))} />
        <Button text='next anecdote' handleClick={() => setSelected(randomAnecdote(selected))} />
      </div>
      <div>
        <h4>{mostVotesTitle}</h4>
      </div>
      <div>
        {props.anecdotes[mostVotes]}
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)