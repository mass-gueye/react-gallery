import './App.css';
import Container from './component/container/container.component';
import React, { Component } from 'react';
import Footer from './component/footer/footer.component';

class App extends Component {

  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch(`https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_API_ACCESS_KEY}&count=30`)
      .then(response => response.json())
      .then(data => this.setState({
        data: data
      }))

  }

  render() {
    const { data } = this.state
    return (
      <div>
      <h1>Gallery</h1>
        <Container data={data}/>
        <Footer />
      </div>
    )
  }
}


export default App;
