import React, {Component} from 'react';
import axios from 'axios';

class Router extends Component{
  state =[
    {
      name : 'Notebook',
      price : 12,
      userId : '5e686717e71fd118b2eade7d'
    },
    {
      name : 'Laptop',
      price : 4500,
      userId : '5e686717e71fd118b2eade7d'
    }
]

  componentDidMount(){
    this.getProduct();
    this.deleteProduct();
    this.addProduct();
  }

  getProduct = () =>{
    console.log('getProduct function is called')
    axios.get(`http://192.168.33.10:5000/showProducts`)
    .then(res =>{
      console.log(res.data);
    })

  }

  deleteProduct = () =>{
      console.log('deleteProduct function is called');
      axios.delete(`http://192.168.33.10:5000/deleteProduct/5e60440c55137d0cb3c42743`)
      .then(res => {
        console.log('deleted');
      });
  }

  addProduct = () =>{
    console.log('addProduct function is called');
    const post = {
      name : this.state[0].name,
      price : this.state[0].price,
      userId : this.state[0].userId
    }

    axios.post(`http://192.168.33.10:5000/addProduct`, post)
    .then(res => {
      console.log(res.data);

    })
  }

  render(){
    return(<h1> Get request to database </h1>)


  }


}

export default Router;
