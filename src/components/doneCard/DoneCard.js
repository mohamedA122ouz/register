import "./card.css";
import productiveImgD from "../assets/images/icon-success.svg";
import productiveImgM from "../assets/images/icon-success.svg";
import { useEffect, useState } from "react";
export default function Card({ emailAddress, update }) {
    let [width, updateWidth] = useState(() => { return window.innerWidth; })
    useEffect(() => {
        console.log("run");
        window.addEventListener("resize", () => {
            updateWidth(window.innerWidth);
        });
        return window.removeEventListener("resize", () => { width = window.innerWidth })
    }, []);
    console.log(emailAddress);
    return (
        <>
            <div className={width <= 800 ? " cardD fullScreenD" : "cardD"} >
                <div className="text">
                    <h1>Thanks for subscribing!</h1>
                    <p>A confirmation email has been sent to <strong>{emailAddress}</strong>.
                        Please open it and click the button inside to confirm your subscription.
                    </p>
                    <div>
                            <button className="doneB" type="button" role="click to Dismiss message" onClick={() => { update(false) }}>Dismiss message</button>
                    </div>
                </div>
                <div className="imgContainer"><img src={width <= 800 ? productiveImgM : productiveImgD} alt="check mark" /></div>
            </div>
        </>
    );
}