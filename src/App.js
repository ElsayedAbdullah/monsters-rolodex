import { Component } from "react";
import CardList from "./components/CardList/CardList";
import Searchbox from "./components/Searchbox/Searchbox";
import "./index.css";

class App extends Component {
  state = {
    monsters: [],
    searchField: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchField } = this.state;

    const filteredResult = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    const handleSearch = e => {
      this.setState({ searchField: e.target.value });
    };

    return (
      <div className="App">

        <h1>Monsters Rolodex</h1>

        <div className="input">
          <Searchbox placeholder={"Search Monsters..."} handleSearch={handleSearch} />
        </div>

        <CardList monsters={filteredResult} />
      </div>
    );
  }
}

export default App;
