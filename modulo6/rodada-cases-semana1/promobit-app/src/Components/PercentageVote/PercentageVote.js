import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Percentage = ({ percentage }) => {

    return (
        <div >
            <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                ballStrokeWidth={25}
                background
                styles={buildStyles({
                    textColor: "#14FF00",
                    pathColor: "#14FF00",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    trailColor: "transparent",
                    textSize: "25px"
                })}
                strokeWidth={10}
            />
        </div>
    )
}
export default Percentage
