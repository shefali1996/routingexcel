import React, { Component } from 'react';
import '../../src/App.css';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <div >
                <div className="navbar">
                    <ul>
                        <Link to="/aboutus">
                            <li>About Us</li>
                        </Link>
                        <Link to="/contactus">
                            <li>Contact Us</li>
                        </Link>
                        <Link to="/messages">
                            <li>Message</li>
                        </Link>
                    </ul>
                </div>
            </div>
        )
    }
}
