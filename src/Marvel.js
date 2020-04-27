import React, { Component } from 'react';
import ReactDOM from 'react-dom';
var md5 = require('md5');
class Marvel extends Component{
  
    state={
        characters: []
    }
 

   


componentDidMount() {
   var ts = new Date().getTime();
   var privateKey="b3a58e7d017a67cd56296d69e9f5f8e6cac7b922";
    var publicKey="9b1cc6a39bb31e0ac47bbc5972d42460";
   var hashText=ts.toString() + privateKey + publicKey
    var hash = md5(hashText);
    var baseUrl = 'https://gateway.marvel.com:443/v1/public/characters?';
     
    var url = baseUrl  + 'ts=' + ts + '&apikey=' + publicKey + '&hash=' +hash;
   
    if (!navigator.onLine) {
        if (localStorage.getItem('characters') === null)
            this.setState({ characters: ["loading..."] })
        else
            this.setState({ characters: localStorage.getItem('characters') });
    }
  
    fetch(url)
      .then(res => {
          return res.json();
      }).then(res => {
          var arr=[];
          res.data.results.forEach(char=>{console.log(char);arr.push(char)})
          this.setState({ characters: arr });
          localStorage.setItem('characters', arr);
          console.log(this.state.characters)
          console.log(url)
      });
  }

  render(){
      return(
          <div>
        <table >
            <thead>
                <th>Name</th>
                <th>Description</th>
         
            </thead>
            <tbody>
            {this.state.characters.map(( character, index ) => {
               return( <tr key={index}>
                    <td>{character.name}</td>
              <td>{character.description}</td>
                </tr>
            )})}
            </tbody>
        </table>
          
          </div>
      )
  }
}
export default Marvel;
