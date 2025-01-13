import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import User from "./components/User";

function App() {
    const colors = [
        {
            "color": "black",
            "category": "hue",
            "type": "primary",
            "code": {
                "rgba": [255, 255, 255, 1],
                "hex": "#000"
            }
        },
        {
            "color": "white",
            "category": "value",
            "code": {
                "rgba": [0, 0, 0, 1],
                "hex": "#FFF"
            }
        },
        {
            "color": "red",
            "category": "hue",
            "type": "primary",
            "code": {
                "rgba": [255, 0, 0, 1],
                "hex": "#FF0"
            }
        },
        {
            "color": "blue",
            "category": "hue",
            "type": "primary",
            "code": {
                "rgba": [0, 0, 255, 1],
                "hex": "#00F"
            }
        },
        {
            "color": "yellow",
            "category": "hue",
            "type": "primary",
            "code": {
                "rgba": [255, 255, 0, 1],
                "hex": "#FF0"
            }
        },
        {
            "color": "green",
            "category": "hue",
            "type": "secondary",
            "code": {
                "rgba": [0, 255, 0, 1],
                "hex": "#0F0"
            }
        },
    ];
    return (
        <div className="container">
            <div className="p-2">Toolbar</div>
            <div className="d-flex flex-row p-2">
                <User color={colors[0].color} colorName={colors[0].color}/>
                <User color={colors[1].color} colorName={colors[1].color}/>
                <User color={colors[2].color} colorName={colors[2].color}/>
                <User color={colors[3].color} colorName={colors[3].color}/>
                <User color={colors[4].color} colorName={colors[4].color}/>
            </div>
        </div>
    );
}

export default App;
