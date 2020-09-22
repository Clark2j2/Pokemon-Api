import React, { useEffect, useState } from 'react'

const PokeApi = (props) => {
    const [name, setName] = useState({});
 
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=1050&offset=0')
            // .then(response => response.json())
            // .then(response => setPeople(response.results))
            .then((res) => {
                return res.json();
            })
            .then((res2) => {
                console.log(res2);
                setName(res2)
            })
            .catch((err) => console.log(err));
    });
 
    return (
        <div>
            <button onClick={PokeApi} >Push here for Pokemon</button>
            <p>{name.name}</p>
            
            {/* {name.length > 807 && name.map((person, index)=>{
                return (<div key={index}>{person.name}</div>)
            })} */}
        </div>
    );
}


export default PokeApi;