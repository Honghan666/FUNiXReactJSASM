import React from 'react';
import {Navbar, NavbarBrand, Nav, NavItem} from 'reactstrap';
import '../App.css'

function Header() {
    return(
        <div>
            <Navbar dark className='color'>
                <NavbarBrand><img width='50' src="assets/images/logo.png" alt='logo'/></NavbarBrand>
                <div className='container'>
                <Nav>
                    <NavItem>
                        <span className='ti-user'></span> Nhân viên
                    </NavItem>
                    <NavItem>
                        <span className='ti-id-badge'></span> Phòng ban
                    </NavItem>
                    <NavItem>
                        <span className='ti-money'></span> Bảng lương
                    </NavItem>
                </Nav>
                </div>
            </Navbar>
        </div>
    );
}

export default Header;