import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Component2 from "./components/Component2";
import Component1 from "./components/Component1";

function App() {
    return (
        <div className="container">
            <div className="row ">
                <div className="col-6">
                    <Component1/>
                </div>
                <div className="col-6">
                    <Component2/>
                </div>
            </div>
        </div>
    );
}

export default App;
