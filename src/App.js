import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import User from "./components/User";

function App() {

    return (
        <div className="container">
            <div className="p-2">Toolbar</div>
            <div className="d-flex flex-row p-2">
                <User/>
                <User/>
                <User/>
                <User/>
            </div>
        </div>
    );
}

export default App;
