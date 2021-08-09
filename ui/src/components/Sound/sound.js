import React from 'react'
import useSound from 'use-sound';
// import Audio from "/audio/234524_foolboymedia_notification-up-1 (online-audio-converter.com).mp3"

import sounds from "../../audio/sounds.mp3"

// const sound = require(Audio)


const PlaySound = () => {
    const [play] = useSound(sounds);
    return <button onClick={play}>Boop!</button>;
  }

export default PlaySound;