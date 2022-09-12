import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import axios from "axios";

function ListBeer () {
    const [beers, setBeers] = useState();
    const styles = {

    };

    useEffect (() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((response) => {
          setBeers(response.data);
        })
        .catch((err) => {
          console.log ("Unable to fetch list of beers from remote API: ",err)
        })
      }, []);

    return (
      <header>
        <NavLink to="/"> Home </NavLink>
        <div>

        </div>
      </header>
    )
  }
  
  export default ListBeer;