import React, { Component } from 'react';
import axios from 'axios';

class ImgForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: null};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState(
          {value: event.target.files[0],
            loaded: 0
          });
        
      }

      handleSubmit(event) {
        event.preventDefault();
        let data = new FormData;
        // data.append('file', file);
        data.append('file', this.state.value);

        axios.post('http://localhost:5000/docs', data)
        .then(respose=>console.log(respose))
        .catch(err => console.log(err))
      }

    render() {
        const formElement = 
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="documentId"> Inserer une image</label><br/>
                <br/>
                <input type="file" name="file" id="documentId" onChange={this.handleChange} /><br/>
                <br/>
                <button type="submit">Valider</button>                
            </form>
      return formElement;
    }
  }

export default ImgForm;