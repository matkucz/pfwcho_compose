import React, { useState, useEffect } from "react";
import './App.css';
import { postRequest, getRequest } from './api'

class Fibonacci extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      n: 1,
      fibVal: {},
      indexes: []
    };
  }

  componentDidMount = () => {
    this.getCalculatedValues();
    this.getIndexes();
  }

  handleChange = (e) => {
    this.setState({n: parseInt(e.target.value)});
  }


  calculateFib = (e) => {
    if (this.state.n >= 0 && this.state.n <= 20) {
        if(!this.state.indexes.includes(this.state.n)) {
            postRequest("/fibonacci/" + this.state.n)
            .then(data => {
                console.log("Message", data);
            }).catch((error) => {
                console.log(error);
            });
        }        
    }
  }

  getCalculatedValues = () => {
    getRequest("/fibonacci/current")
        .then(data => {
            for (const item of data) {
              for (const [key, value] of Object.entries(item)) {
                this.setState({fibVal: {...this.state.fibVal, [key]: value}})
              }
            }
        }).catch((error) => {
            console.log(error);
        });
  }

  getIndexes = () => {
    getRequest("/fibonacci")
        .then(data => {
            for (const obj of data) {
              this.setState({indexes: [...this.state.indexes, obj.number]})
            }
        }).catch((error) => {
            console.log(error);
        });
  }

  renderSeenIndexes = () => {
    return (
      this.state.indexes.join(', ')
    );
  }

  renderCalculatedValues = () => {
    return Object.entries(this.state.fibVal).map(([key, value]) => {
        return (
          <div key={key}>
            <br/>
            <span >Dla indeksu {key} wyliczono wartość {value}</span>             
          </div>
        )
    });
  }

  render = () => {
    return (
      <div id="test" className="App">
        <header className="App-header">
          <p>
            Program do obliczania n-tego elementu ciągu Fibonacciego.
          </p>
          <p>
            <a href="/">Strona główna</a>
          </p>
          <p>
            <a href="/docs">Dokumentacja projektu</a>
          </p>
          <label htmlFor="num">Który element ciągu obliczyć?</label>
          <input 
              placeholder="Wprowadź liczbę naturalną dodatnią"
              className="App-input"
              type="number"
              id="num"
              value={this.state.n}
              onChange={this.handleChange}
          ></input>
          <button 
              className="App-button" 
              onClick={ (e) => this.calculateFib(e) }
          >
            Oblicz wartość
          </button>
          <div>
              W trakcie działania usługi napotkałem na następujące indeksy: <br/>
              {
                  this.renderSeenIndexes()
              }
          </div>
          <div>
              W trakcie działania usługi obliczono nastepujace wartości:
              {
                  this.renderCalculatedValues()
              }
          </div>
          <p>
          </p>
        </header>
      </div>
    );
  }
}

export default Fibonacci;