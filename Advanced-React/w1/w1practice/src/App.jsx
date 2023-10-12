
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

    const topPeople = data.map(person  => {
        const personText =  `${person.name} is a ${person.role}`
        return  (
            <li key={person.id}>{personText}</li>
        )
    });

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

        </>
    )
}

export default App
