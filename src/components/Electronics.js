import React, { Component } from 'react';
import {electronics} from './data';

class Electronics extends Component {
  render() {
    return(
      <div className="item-wrap">
        {electronics.map(function(item,i){
          return (
            <li key={"electronics"+i} className="page-li">
              <h3>{item.title}</h3>
              <img src={item.image}/>
              <h5>{item.description}</h5>
              <h5>Price:{item.price}</h5>
            </li>
            )
        })}
      </div>
    )
  }
}

export default Electronics