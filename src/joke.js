import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class joke extends Component{

    state={
        joke:""
    }
 

componentDidMount() {
    if (!navigator.onLine) {
        if (localStorage.getItem('joke') === null)
            this.setState({ joke: "loading..." })
        else
            this.setState({ joke: localStorage.getItem('joke') });
    }
  
    fetch("https://api.chucknorris.io/jokes/random")
      .then(res => {
          return res.json();
      }).then(res => {
          this.setState({ joke: res.value });
          localStorage.setItem('joke', res.value);
      });
  }

  render(){
      return(
          <h1>{this.state.joke}</h1>
      )
  }
}
export default joke;
