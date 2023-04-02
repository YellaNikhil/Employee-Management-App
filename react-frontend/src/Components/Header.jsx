import React, { Component } from 'react';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                        <div><a href='http://localhost:3000' className='navbar-brand'>Employee Management App</a></div>
                        <button className='navbar-toggler' type='button'>
                            <span className='navbar-toggler-icon'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                        </button>
                        <div className="collapse navbar-collapse" itemID="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className='nav-item'>
                                    <a className='nav-link' href='http://localhost:3000/employees'>Employees</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='http://localhost:3000/add-employee'>Add Employee</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;