import React, { Component } from "react";
import video from '../../assets/video/video.mp4'

export default class Video extends Component {
    render() {
        return (
            <>
              <video controls autoPlay loop>
                <source src={ video } type="video/mp4"></source>
              </video>
            </>
        )
    }
}
