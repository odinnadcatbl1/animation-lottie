import Button from "../components/Button/Button";

import "./app.css";

function App() {
    const onButtonClick = () => {
        console.log(1);
    };

    return (
        <div className="app">
            <div className="container">
                <div className="app__inner">
                    <Button text={"Click me"} onClick={onButtonClick} />
                </div>
            </div>
        </div>
    );
}

export default App;
