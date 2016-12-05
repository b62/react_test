import  React, {Component} from 'react';
import {Link} from 'react-router';

// import VisibleUserMenu from "../containers/VisibleUserMenu";


const GlobalNav = ({
    links,
    onNavLinkClick
}) => (
    <div className="row">
        <div className="root col-lg-10">
            <ul className="menu">
                {links.map((link, id) =>
                    <li key={id}><Link to={link.to}>{link.text}</Link></li>
                )}
            </ul>
        </div>
        <div className="col-lg-2">
            {/*<VisibleUserMenu />*/}
        </div>
    </div>
);

export default GlobalNav;
