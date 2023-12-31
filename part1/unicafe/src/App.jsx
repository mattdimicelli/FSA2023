import { useState } from 'react'

const Header = ({title}) => <h1>{title}</h1>;
const Button = ({text, handleClick }) => <button onClick={handleClick}>{text}</button>;

const StatisticLine = ({text, value}) => (
    <tr>
        <td>{text}</td><td>{value}</td>
    </tr>
    );

const Statistics = ({good, neutral, bad}) => {
    const all = good + neutral + bad;

    if (good || neutral || bad) {
        return (
            <figure>
                <figcaption>statistics</figcaption>
                <br/>
                <table>
                    <tbody>
                        <StatisticLine text={'good'} value={good} />
                        <StatisticLine text={'neutral'} value={neutral} />
                        <StatisticLine text={'bad'} value={bad} />
                        <StatisticLine text={'all'} value={all} />
                        <StatisticLine text={'average'} value={all > 0 ? (good -bad) / all : 0} />
                        <tr><td>positive</td><td>{all > 0 ? (good / all) * 100 : 0} %</td></tr>
                    </tbody>
                </table>
            </figure>
        )
    } else {
        return <p>No feedback given</p>
    }

}


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
            <Statistics good={good} neutral={neutral} bad={bad} />
        </>
    )
}

export default App