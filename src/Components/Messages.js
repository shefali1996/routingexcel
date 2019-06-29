import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Messages extends Component {
    render() {
        return (
            <div>
               <div className="list">
                   <ul>
                       <li><h3>Messages</h3></li>
                       <Link to="/1">
                            <li>Message 1</li>
                        </Link>
                        <Link to="/2">
                            <li>Message 2</li>
                        </Link>
                        <Link to="/3">
                            <li>Message 3</li>
                        </Link>
                        <Link to="/4">
                            <li>Message 3</li>
                        </Link>
                        <Link to="/5">
                            <li>Message 4</li>
                        </Link>
                   </ul>
               </div>
            </div>
        )
    }
}
