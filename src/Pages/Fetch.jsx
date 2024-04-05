import axios from 'axios';
import React, { useEffect } from 'react'

const Fetch = () => {
    const API = 'https://jsonplaceholder.typicode.com';

    //using Fetch
    // const getData = (url) => {
    //   fetch(url, {
    //     method: POST,
    //     body : json.stringify({
    //       name: 'xyz',
          
    //     })
    //   })
    //   .then(response => response.json())
    //   .then((data)=> console.log(data))
    //   .catch((error) => {
    //     console.log(error);
    //   })
    // }
  
    // using axios
    const getData = (url) => {
      axios.get(url)
      .then((res) => {
        console.log('axios Response',res.data)
      })
      .catch((err) =>{
        console.log(err)
      })
    }
    useEffect(() => {
      getData(`${API}/users`);
    }, [])
    return (
      <div>
        <h1>
          Axios and Fetch Tutorial
        </h1>
      </div>
    );
}

export default Fetch
