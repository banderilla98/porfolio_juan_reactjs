import React from 'react';

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // Change code below this line

    this.handleChange = this.handleChange.bind(this);

    // Change code above this line
  }

  // Change code below this line

  handleChange(event){
    this.setState({
      input: event.target.value
    })
  }

  // Change code above this line
  render() {
    return (
      <div>
        { /* Change code below this line */}
        
        <input value={this.state.input} onChange={this.handleChange} />

        { /* Change code above this line */}
        <h1>Controlled Input:</h1>
        <p>{this.state.input}</p>
      </div>
    );
  }
}



class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      submit: this.state.input
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.input}
            onChange={this.handleChange} />
          <button type='submit'>Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
};

const JSX = () => {
  return (
    <div>
      <h1>hola</h1>
      {/* to print this on website page front */}
      <ControlledInput /> 

      <MyForm/>
    </div>
  );
};

export default JSX;
