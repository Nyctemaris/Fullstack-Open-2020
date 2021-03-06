import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>
    {text}
  </button>
);
const getAll = (props) => {

  return (
    props.good + props.neutral + props.bad
  )
}
const getAverage = (props) => {
  return (
    (props.good * 1 + props.bad * -1) / getAll(props)
  )
}
const getPositive = (props) => {
  return (
    props.good / getAll(props) * 100
  )
}
const Statistics = (props) => {
  let statisticsContent =
    <div>
      <h4>
        Statistics
      </h4>
      <h6>
        No feedback given
      </h6>
    </div>;
  if (getAll(props) !== 0) {
    statisticsContent =
      <div>
        <h4>
          Statistics
        </h4>
        <table>
          <tbody>
            <StatisticsLine text='Good' value={props.good} />
            <StatisticsLine text='Neutral' value={props.neutral} />
            <StatisticsLine text='Bad' value={props.bad} />
            <StatisticsLine text='All' value={getAll(props)} />
            <StatisticsLine text='Average' value={getAverage(props)} />
            <StatisticsLine text='Positive' value={getPositive(props) + '%'} />
          </tbody>
        </table>
      </div>;
  }
  return (
    <div>
      {statisticsContent}
    </div>)
}
const StatisticsLine = ({ text, value }) => (

  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>

);
const App = () => {
  // tallenna napit omaan tilaansa
  const header = 'Give Feedback'
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>
        {header}
      </h2>
      <div>
        <Button text='Good' handleClick={() => setGood(good + 1)} />
        <Button text='Neutral' handleClick={() => setNeutral(neutral + 1)} />
        <Button text='Bad' handleClick={() => setBad(bad + 1)} />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
