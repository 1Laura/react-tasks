import './App.css';
import {useState} from "react";

function App() {
// Santa's Elf Gift-Wrapping Game

    const childrenList = [
        {name: "Alice", goodness_score: 85, gift: "🎁"},
        {name: "Bob", goodness_score: 32, gift: "🎉"},
        {name: "Charlie", goodness_score: 78, gift: "🍫"},
        {name: "Diana", goodness_score: 47, gift: "🎨"},
        {name: "Eve", goodness_score: 96, gift: "🎂"},
        {name: "Frank", goodness_score: 52, gift: "🧸"},
        {name: "Grace", goodness_score: 88, gift: "📚"},
        {name: "Hank", goodness_score: 74, gift: "🧩"},
        {name: "Ivy", goodness_score: 91, gift: "🌸"},
        {name: "Jack", goodness_score: 13, gift: "⚽"},
    ];

    const GOODNESS_THRESHOLD = 50;


    const [currentIndex, setCurrentIndex] = useState(0);
    const [correctDecisions, setCorrectDecisions] = useState(0);
    const [wrappedGifts, setWrappedGifts] = useState(0);
    const [givenCoal, setGivenCoal] = useState(0);

    const currentChild = childrenList[currentIndex];

    const handleDecision = (decision) => {
        const isGood = currentChild.goodness_score >= GOODNESS_THRESHOLD;
        const isCorrectDecision =
            (decision === "gift" && isGood) || (decision === "coal" && !isGood);

        if (isCorrectDecision) {
            setCorrectDecisions((prev) => prev + 1);
        }

        if (decision === "gift") {
            setWrappedGifts((prev) => prev + 1);
        } else {
            setGivenCoal((prev) => prev + 1);
        }

        if (currentIndex < childrenList.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        } else {
            alert(
                `Game Over!\nGifts Delivered: ${wrappedGifts}\nCoal Given: ${givenCoal}\nAccuracy: ${(
                    (correctDecisions / childrenList.length) *
                    100
                ).toFixed(2)}%`
            );
        }
    };

    return (
        <div style={{fontFamily: "Arial, sans-serif", textAlign: "center", padding: "20px"}}>
            <h1>🎄 Santa's Elf Gift-Wrapping Game 🎄</h1>
            {currentIndex < childrenList.length ? (
                <div>
                    <h2>
                        Child: {currentChild.name}
                    </h2>
                    <p>
                        Goodness Score: <strong>{currentChild.goodness_score}</strong>
                    </p>
                    <p>
                        Gift Wish: <span>{currentChild.gift}</span>
                    </p>
                    <p>What should we do?</p>
                    <button
                        style={{marginRight: "10px", padding: "10px", fontSize: "16px"}}
                        onClick={() => handleDecision("gift")}
                    >
                        🎁 Wrap the Gift
                    </button>
                    <button
                        style={{padding: "10px", fontSize: "16px"}}
                        onClick={() => handleDecision("coal")}
                    >
                        🪨 Give Coal
                    </button>
                </div>
            ) : (
                <div>
                    <h2>Great Job, Elf!</h2>
                    <p>Gifts Delivered: {wrappedGifts} 🎁</p>
                    <p>Coal Given: {givenCoal} 🪨</p>
                    <p>
                        Accuracy: {((correctDecisions / childrenList.length) * 100).toFixed(2)}%
                    </p>
                </div>
            )}
        </div>
    );
}

export default App;
