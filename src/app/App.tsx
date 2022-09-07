import Button from "../components/Button/Button";
import Interface from "../components/Interface/Interface";
import { useState } from "react";
import { delay } from "../tools/delay";

import "./app.css";
import Loading from "../components/Loading/Loading";

function App() {
    const [buttonIsVisible, setButtonVisible] = useState(true);
    const [animationIsVisible, setAnimationIsVisible] = useState(false);

    const onButtonClick = () => {
        setButtonVisible(false);
        setAnimationIsVisible(true);

        delay(3000).then(() => {
            setAnimationIsVisible(false);
        });
    };

    return (
        <div className="app">
            <div className="container">
                <div className="app__inner">
                    {buttonIsVisible && (
                        <Button text={"Click me"} onClick={onButtonClick} />
                    )}

                    {animationIsVisible && <Loading />}

                    {!buttonIsVisible && !animationIsVisible && <Interface />}
                </div>
            </div>
        </div>
    );
}

export default App;
