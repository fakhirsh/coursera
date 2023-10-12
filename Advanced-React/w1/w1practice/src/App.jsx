
import { useState } from 'react';
import './App.css'

const data = [
    {
        id: 1,
        name: 'John Doe',
        age: 32,
        role: 'Software Engineer',
    },
    {
        id: 2,
        name: 'Winter Soldier',
        age: 30,
        role: 'Project Manager',
    },
    {
        id: 3,
        name: 'Tony Stark',
        age: 28,
        role: 'CEO',
    },
]

function App() {
    const [nameVal, setNameVal] = useState('');
    const [score, setScore] = useState(7);
    const [comment, setComment] = useState('');

    const topPeople = data.map(person  => {
        const personText =  `${person.name} is a ${person.role}`
        return  (
            <li key={person.id}>{personText}</li>
        )
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setNameVal('');
        console.log('submitting form:', nameVal, score);
    };

    return (
        <>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>

            <div className="flex flex-col">
                <ul>
                    {topPeople}
                </ul>
            </div>

            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className='Field'>
                        <label htmlFor='name'>Name:</label>
                        <input 
                            type='text' 
                            id='name' 
                            name='name' 
                            placeholder='name' 
                            value={nameVal}
                            onChange={e => setNameVal(e.target.value)}
                        />
                    </div>
                    <div className='Field'>
                        <label htmlFor='range'>Score: {score} </label>
                        <input 
                            type='range' 
                            id='range' 
                            name='range' 
                            min='0' 
                            max='10' 
                            step='1' 
                            defaultValue='5'
                            value={score}
                            onChange={e => setScore(e.target.value)}
                        />
                    </div>
                    <div className='Field'>
                        <label htmlFor='comment'>Comment:</label>
                        <textarea 
                            id='comment' 
                            name='comment' 
                            rows='4' 
                            cols='50' 
                            placeholder='comment' 
                            value={comment}
                            onChange={e => setComment(e.target.value)}
                        />
                    </div>
                    <button 
                        type='submit' 
                        className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 disabled:bg-gray-300 disabled:cursor-not-allowed'
                        disabled={!nameVal}  // or some condition that determines if the button should be disabled
                    >
                        Submit
                    </button>
                </fieldset>

            </form>

        </>
    )
}

export default App
