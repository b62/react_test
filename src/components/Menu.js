import React, {Component} from 'react';
import {Nav, Glyphicon, NavItem} from 'react-bootstrap';
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap';


import GlobalNav from './GlobalNav';

export default class Menu extends Component {
    render() {

        //TODO provide links to GlobalNav

        return (
            <div>
                <Nav bsStyle="pills">
                    <IndexLinkContainer to="/">
                        <NavItem>Home</NavItem>
                    </IndexLinkContainer>

                    <LinkContainer to="apps">
                        <NavItem>
                            Apps List
                        </NavItem>
                    </LinkContainer>

                    <LinkContainer to="user-edit">
                        <NavItem>
                            Add User <Glyphicon glyph="plus-sign" />
                        </NavItem>
                    </LinkContainer>
                </Nav>

                <GlobalNav links={[]} />

            </div>
        )
    }
}
