import { useState, useRef } from "react";
import './style.css';

const Player = ({ audioSrc }) => {

    const [playing, setPlaying] = useState(false);

    const playRef = useRef();

    const handleClick = () => {
        if (playing) {
            playRef.current.pause();
        } else {
            playRef.current.play();
        };
        setPlaying(!playing);
    }

    return (
        <div>
            <h1>Fools Garden: Lemon Tree</h1>
            <audio src={audioSrc} ref={playRef}></audio>
            <div className="player-controls">
                <button className={!playing ? "play-button play": "play-button pause"} onClick={handleClick}></button>
            </div>
        </div>
    )
};

export default Player;