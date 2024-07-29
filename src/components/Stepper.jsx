import { useState } from "react";

function Stepper({ steps }) {
    const [counter, setcounter] = useState(0);

    const stepNext = () => {
        if (counter < steps.length - 1) {
            setcounter(counter + 1)
        }
    }

    const stepBack = () => {
        if (counter > 0) {
            setcounter(counter - 1);
        }
    }

    return (
        <div className="stepper-container">
            <div>
                {steps.map((step, index) => {
                    return (
                        <div key={index} className="stepper">
                            {(index < steps.length - 1) && <div className={`line ${index <= counter - 1 ? "line-after" : ""}`}></div>}
                            <div className={`step-number ${index <= counter ? "active" : ""}`}>{index <= counter - 1 ? "✔" : index + 1}
                            </div>
                            <div className="step-content">{step.lable}</div>
                        </div>
                    );
                })}
            </div>
            <div className='stepper-content'>
                {steps[counter].content}
            </div>
            <div className="stepper-buttons">
                <button className="back-btn" onClick={stepBack} disabled={counter === 0}>Back</button>
                <button className="continue-btn" onClick={stepNext} disabled={counter === steps.length - 1}>Continue</button>
            </div>
        </div>
    )
}
export default Stepper;