import React from 'react';
import {Navbar, NavbarBrand, Nav, NavItem} from 'reactstrap';
import {NavLink} from "react-router-dom"
import '../App.css'

function Header() {
    return(
        <div>
            <Navbar dark expand='md' className='color'>
                <NavbarBrand><img width='50' src="assets/images/logo.png" alt='logo'/></NavbarBrand>
                <div className='container'>
                <Nav>
                    <NavItem>
                        <NavLink className='nav-link' to='/nhanvien'><span className='ti-user'></span> Nhân viên</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/departments'><span className='ti-id-badge'></span> Phòng ban</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/salary'><span className='ti-money'></span> Bảng lương</NavLink>
                    </NavItem>
                </Nav>
                </div>
            </Navbar>
        </div>
    );
}

export default Header;