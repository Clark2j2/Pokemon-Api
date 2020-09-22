import React, { useState } from 'react';
import './App.css';

function App() {
  const [results, setResults] = useState({});
  const PokeApi = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
            .then((res) => {
                return res.json();
            })
            .then((res2) => {
                console.log(res2);
                setResults(res2)
            })
            .catch((err) => console.log(err));
    };
    const Sprite = (index,url) => {
      console.log(index, url)
      fetch(url)
      .then((r) => {
        return r.json();
      })
      .then ((obj) => {
        let resultsCopy = JSON.parse(JSON.stringify(results))
        resultsCopy.results[index].sprite = (obj.sprites.front_default) ? obj.sprites.front_default : null;
        setResults(resultsCopy)
      })
      .catch((err) => console.log(err));
    };
    return (
      <div className="App">
        <button onClick={PokeApi}> Fetch Pokemon</button>
          {results.count ? (<div>
          {results.results.map((x,i) => (
            <ul>
            <li onClick={() => Sprite(i,x.url)} key = {i}>{x.name} </li>
            {x.sprite ? <img alt={x.name} src={x.sprite}></img> : null}
            </ul>
          ))}
          </div>
          ) : null}
          </div>
    );
    }
export default App;
