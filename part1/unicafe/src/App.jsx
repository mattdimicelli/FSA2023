import { useState } from 'react'

const Header = ({title}) => <h1>{title}</h1>;
const Button = ({text, handleClick }) => <button onClick={handleClick}>{text}</button>;
    const Stats = ({good, neutral, bad}) => (
        <>
            <h2>statistics</h2>
            <br/>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
        </>
    )

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <>
            <Header title={'give feedback'} />
            <br />
            <Button text={'good'} handleClick={() => setGood(good + 1)} />
            <Button text={'neutral'} handleClick={() => setNeutral(neutral + 1)} />
            <Button text={'bad'} handleClick={() => setBad(bad + 1)} />
            <br />
            <Stats good={good} neutral={neutral} bad={bad} />
        </>
    )
}

export default App