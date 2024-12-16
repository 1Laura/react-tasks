import logo from './logo.svg';
import './App.css';

function App() {
    const data = [
        {
            city: "New York",
            population: 8419600,
            profit: 12500000,
            size: 468.9 // in square miles
        },
        {
            city: "Tokyo",
            population: 13929286,
            profit: 17800000,
            size: 622.99 // in square miles
        },
        {
            city: "Paris",
            population: 2161000,
            profit: 8900000,
            size: 40.7 // in square miles
        },
        {
            city: "Mumbai",
            population: 12478447,
            profit: 10300000,
            size: 233.0 // in square miles
        },
        {
            city: "Sydney",
            population: 5312163,
            profit: 5600000,
            size: 12368 // in square miles
        }
    ];

    return (
        <div className="App">
            <div className="card">
                {/*<h4>{Object.keys(data[0].name)}: {data[0].city}</h4>*/}
                <h4>{data[0].Object.keys(data[0].name)}: {data[0].city}</h4>
                <p>population: {data[0].population}:</p>
                <p>profit: {data[0].profit}:</p>
                <p>size: {data[0].size}:</p>
            </div>
        </div>
    );
}

export default App;
