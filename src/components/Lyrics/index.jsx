import { useState, useRef } from "react";
import './style.css'

const Lyrics = ({ lines, currentLineIndex }) => {

    console.log(lines);

    return (
        <div className="lyrics">
            {lines.map((line, index) => <p className={index+1 == currentLineIndex ? "current-line" : ""} key={line.time}>{line.text}</p>)}
        </div>
    )
};

export default Lyrics;