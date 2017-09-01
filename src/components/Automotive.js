import React, { Component } from 'react';
import {auto} from './data';
import {Link} from 'react-router-dom';

class Automotive extends Component {
  render() {
    return(
      <div className="item-wrap">
        {auto.map(function(item,i){
          return (
            <li key={"auto"+i} className="page-li">
              <h3>{item.title}</h3>
              <img src={item.image}/>
              <h5>{item.description}</h5>
              <h5>Price: ${item.price}</h5>
            </li>
            )
          })}
        <div className="foot">
          <Link activeClassName="active" to="./">Home</Link>
        </div>
      </div>
    )
  }
}

export default Automotive;