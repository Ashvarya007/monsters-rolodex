// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import SearchBox from './components/search-box/SearchComp';
import CardList from './components/card-list/card-list.component.jsx';


const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  console.log('render');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  
  }, []);
  

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);
  
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <p className='app-content'>Browse through the employees at monsters rolodex. They are not at all scary :xD.<br></br> You can filter by any character of their name</p>
      <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters...' className='monsters-search-box' />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}


export default App;
