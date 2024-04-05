import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Output = () => {
    const [data, setData] = useState([]);

    function getData(){
        axios({
            method: "get",
            url: "https://660fb7e2356b87a55c522c31.mockapi.io/React",
          }).then(function (response) {
            console.log(response.data);
            setData(response.data)
          });
    }

    useEffect(()=>getData(), []);
  return (
    <div>
        <div className='output'>
            {
                data.map((item) => {
                    return(
                        <div className='card'>
                            <p>{item.name}</p>
                            <p>{item.address}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Output;