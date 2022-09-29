import React, { Component } from "react";
import sound from '../../assets/sound/audio.mp3'

export default class Sound extends Component {
    render() {
        return (
          <>
          <audio controls autoPlay loop>
            <source src={ sound } type="audio/mpeg"></source>
          </audio>
        </>
        )
    }
}
