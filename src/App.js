import React from "react";
import "./App.css";
import Gift from './Gift/Gift'
import { max_number } from './helpers'

export default class App extends React.Component {
  state = {
    gifts: []
  };
  handleClick = () => {
    const { gifts } = this.state;
    const ids = gifts.map(x => x.id)
    const max_id = max_number(ids)
    gifts.push({ id: max_id + 1 ,person:'',present:''})
    this.setState({ gifts })
  }
  removeGift = (id) => {
    let { gifts } = this.state
    gifts = this.state.gifts.filter(x => x.id !== id)
    this.setState({ gifts })
  }

  updateGift = (gift) => {
    let state = { ...this.state }
    const index = state.gifts.findIndex(x => x.id === gift.id)
    state.gifts[index] = gift
    this.setState(state)
  }

  render() {
    const { gifts } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h2>Welcome to Gift Giver App</h2>
          <ul className="gift-list">
            {gifts && gifts.map(item => <Gift key={item.id} className="gift"
              gift={item}
              updateGift={this.updateGift}
              removeGift={this.removeGift} />)}
          </ul>
          <button className="addNewItem" onClick={this.handleClick}> Add New Item </button>
        </header>
      </div>
    );
  }
}
