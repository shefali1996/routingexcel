import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Message1 from './Message1'
import Message2 from './Message2'
import Message3 from './Message3'

export default class Messages extends Component {
    render() {
        return (
            <div className="row">            
              <div className="list">
                   <ul>
                       <li><h3>Messages</h3></li>
                       <Link to="/messages/1">
                            <li>Message 1</li>
                        </Link>
                        <Link to="/messages/2">
                            <li>Message 2</li>
                        </Link>
                        <Link to="/messages/3">
                            <li>Message 3</li>
                        </Link>
                        <Link to="/messages/4">
                            <li>Message 4</li>
                        </Link>
                        <Link to="/messages/5">
                            <li>Message 5</li>
                        </Link>
                   </ul>
               </div>
            <Route  path="/messages/1" component={Message1}/>
            <Route  path="/messages/2" component={Message2}/>
            <Route  path="/messages/3" component={Message3}/> 
            <Route  path="/messages/4" component={Message3}/>   
            <Route  path="/messages/5" component={Message3}/>     
            </div>
        )
    }
}
