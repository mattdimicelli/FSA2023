import { useState } from 'react'

const AnecdoteMostVotes = ({votes, anecdotes}) => {
    let mostVotesIndex;
    let mostVotes;
    if (Object.keys(votes).length > 0) {
        mostVotesIndex = 0;
        mostVotes = 0;
        Object.entries(votes).forEach(([k, v]) => {
            if (v > mostVotes) {
                mostVotes = v;
                mostVotesIndex = k;
            }
        });
    }
    if (mostVotes !== undefined) {
        return (
            <>
                <h2>Anecdote with the most votes</h2>
                <p>{anecdotes[mostVotesIndex]}</p>
            </>
        )
    } else {
        return null;
    }

}
const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const [selected, setSelected] = useState(0);
    const [votes, setVotes] = useState({});

    const handleClickNext = () => setSelected(Math.floor(Math.random() * (anecdotes.length)));
    const handleClickVote = () => {
        let newVotes = {...votes};
        if (votes[selected] === undefined) {
            newVotes[selected] = 1;
            setVotes(newVotes);
        } else {
            newVotes[selected]++;
            setVotes(newVotes);
        }
    };


    return (
        <>
            <h2>Anecdote of the day</h2>
            <br />
            <p>{anecdotes[selected]}</p>
            <p>has {votes[selected] === undefined ? 0 : votes[selected]} votes</p>
            <button onClick={handleClickVote}>vote</button>
            <button onClick={handleClickNext}>next anecdote</button>
            <br/>
            <AnecdoteMostVotes votes={votes} anecdotes={anecdotes} />
        </>
    )
}

export default App