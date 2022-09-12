import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import home from "../assets/home.js";
import axios from "axios";

function ListBeer () {
    const [beers, setBeers] = useState([]);
    const styles = {
      list: {
        display:        "flex",
        flexDirection:  "column",
        width:          "100vw"
      },
      item: {
        display:        "flex",
        alignItems:     "center",
        border:         ".2px solid lightgray",
        gap:            5
      },
      image: {
        display:        "flex",
        flexShrink:     0,
        justifyContent: "center",
        height:         "10vh",
        width:          "15vw",
        padding:        10
      },
      details: {
        display:        "flex",
        flexDirection:  "column",
        alignItems:     "start"
      },
      title: {
        margin:         0,
        textAlign:      "left",
        fontSize:       "1.2rem",
        fontWeight:     "light"
      },
      tagline: {
        margin:         0,
        textAlign:      "left",
        fontSize:       15,
        color:          "gray"
      },
      contribution: {
        margin:         0,
        textAlign:      "left",
        fontSize:       ".7rem"
      }
    };

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(response => {
          console.log(response.data);
          setBeers(response.data);
        })
        .catch((err) => {
          console.log ("Unable to fetch list of beers from remote API: ",err)
        })
      }, []);

    return (
      <div>
        <header className="header">
          <NavLink to="/">Home</NavLink>
        </header>
        <div style={styles.list}>
            {beers.map(beer => (
              <div style={styles.item}>
                <div style={styles.image}>
                  <img src={beer.image_url} />
                </div>
                <div style={styles.details}>
                  <p style={styles.title}>{beer.name}</p>
                  <p style={styles.tagline}>{beer.tagline}</p>
                  <p style={styles.contribution}><b>Contributed by: </b>{beer.contributed_by}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    )
  }
  
  export default ListBeer;