import React, { Component } from 'react';

class ImgForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }

      handleSubmit(event) {
        event.preventDefault();
        console.log(event.target[0].files);
      }

    render() {
        const formElement = 
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="documentId"> Inserer une image</label><br/>
                <br/>
                <input type="file" name="document" id="documentId" onChange={this.handleChange} /><br/>
                <br/>
                <button type="submit">Valider</button>                
            </form>
      return formElement;
    }
  }

export default ImgForm;