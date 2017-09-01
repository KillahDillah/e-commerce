import React, { Component } from 'react';
import {clothing} from './data';

class Clothing extends Component {
  render() {
    return(
      <div className="item-wrap">
        {clothing.map(function(item,i){
          return (
            <li key={"clothing"+i} className="page-li">
              <h3>{item.title}</h3>
              <img src={item.image}/>
              <h5>{item.description}</h5>
              <h5>Price: ${item.price}</h5>
            </li>
            )
        })}
      </div>
    )
  }
}

export default Clothing