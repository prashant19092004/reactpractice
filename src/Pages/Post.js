import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Post = () => {

    const [data, setData] = useState([]);

    const [row, setRow] = useState({
        name : "",
        address : ""
    })


    function onNameChangeHandler(event){
        setRow({...row, name:event.target.value});
    }

    function onAddressChangeHandler(event){
        setRow({...row, address:event.target.value});
    }

    function onDataChangeHandler(){
        setData([...data,row]);
        console.log(data);
    }

    function postData(){
        axios({
            method: 'post',
            url: 'https://660fb7e2356b87a55c522c31.mockapi.io/React',
            data: data
          });
    }

    useEffect(() => postData(), [data]);
  return (
    <div>
        <p>Name</p>
        <input type='text' onChange={onNameChangeHandler}/>
        <p>Address</p>
        <input type='text' onChange={onAddressChangeHandler}/>
        <button onClick={onDataChangeHandler}>Submit</button>
        {
            data.map((item) => {
                return (
                    <h1>{item.name}</h1>
                )
            })
        }
    </div>
  )
}

export default Post