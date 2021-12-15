import React from 'react';
import './App.css';
import axios from "axios";
import Header from './components/Header';
import Navbar from './components/Navbar';
import {Container, Row, Col} from "./components/Grid";


class App extends React.Component {
  state = {
    employees: [],
  };
  componentDidMount() {
      axios.get(`https://randomuser.me/api/?results=20&nat=Aus`)
        .then(res => {
          this.setState({ employees: res.data.results});
        });
  }


  render() {
    return ( 
  <Container>
    <Header />
    {this.state.employees.length > 0 &&
    <Navbar employees={this.state.employees}/>}
  </Container>
    );
  }
}

export default App;
