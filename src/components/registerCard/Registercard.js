import "./card.css";
import productiveImgD from "../assets/images/illustration-sign-up-desktop.svg";
import productiveImgM from "../assets/images/illustration-sign-up-mobile.svg";
import check from "../assets/images/icon-list.svg";
import { useEffect, useState } from "react";
export default function Card({ input, handleClick, message }) {
    let [width, updateWidth] = useState(() => { return window.innerWidth; })
    useEffect(() => {
        console.log("run");
        window.addEventListener("resize", () => {
            updateWidth(window.innerWidth);
        });
        return window.removeEventListener("resize", () => { width = window.innerWidth })
    }, []);
    console.log(width);
    return (
        <>
            <div className={width <= 800 ? " card fullScreen" : "card"} >
                <div className="detailsAndRegister">
                    <h1>Stay updated!</h1>
                    <p>Join 60,000+ product managers receiving monthly updates on:</p>
                    <ul>
                        <li><img src={check} alt="productivity image" /><span>Product discovery and building what matters</span></li>
                        <li><img src={check} alt="productivity image" /><span>Measuring to ensure updates are a succss</span></li>
                        <li><img src={check} alt="productivity image" /><span>And much more!</span></li>
                    </ul>
                    <div>
                        <form >
                            <div style={{position:"relative"}}>
                                <label>Email address</label>
                                <span ref={message} className="invalidMessage">valid email required</span>
                            </div>
                            <br />
                            <input type="text" ref={input} placeholder=" email@company.com" />
                            <br />
                            <button type="button" role="click to Subscribe to monthly newsletter" onClick={handleClick}>Subscribe to monthly newsletter</button>
                        </form>
                    </div>
                </div>
                <div className="imgContainer"><img src={width <= 800 ? productiveImgM : productiveImgD} alt="productivity image" /></div>
            </div>
        </>
    );
}