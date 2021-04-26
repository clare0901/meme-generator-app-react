import React, { Component } from "react";

class MemeGenerator extends Component {
  state = {
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
    memeImages: [],
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const memes = this.state.memeImages.memes;
    const randomMemeImg = memes[Math.floor(Math.random() * memes.length)];
    this.setState({
      randomImg: randomMemeImg.url,
    });
  };

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        // console.log(data)
        this.setState({
          memeImages: response.data,
        });
      });
  }

  render() {
    return (
      // console.log(this.state.memeImages)
      <div className="mainDiv">
        <form className="textDiv" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Top Text"
            name="topText"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Bottom Text"
            name="bottomText"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button className="generate_button">Gen</button>
        </form>

        <div className="memeDiv">
          <img
            className="image"
            src={this.state.randomImg}
            alt="MemeImage"
          ></img>
          <h2 className="topText">{this.state.topText}</h2>
          <h2 className="bottomText">{this.state.bottomText}</h2>
          {/* <button className="download_button">Download</button> */}
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
