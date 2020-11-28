import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import ha from '../images/ha.svg';
import infra from '../images/infra.svg';
import kubernetes from '../images/kubernetes.svg';
import security from '../images/security.svg';
import enterprise from '../images/enterprise.svg';
import account from '../images/account.svg';

import menu from '../constants/routes';

const Nav = styled.nav`
	position: fixed;
	height: 10vh;
	width: 66%;
	left: 30%;
	background-color: transparent;
	display: grid;
	grid-template-columns: 4fr 1fr;
`;

const Menu = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;

	a {
		text-decoration: none;
		transition: all 100ms ease-in;
		font-size: 0.9em;
		font-weight: 400;
		&:hover {
			font-weight: 500;
		}
	}

	.logout {
		border: 1px solid #1E6DBB;
		padding: 1.5% 2%;;
		border-radius: 5px;
		color: #1E6DBB;
		text-align: center;
	}
`

const Account = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;

	span {
		font-weight: 500;
		font-size: 0.9em;
	}

	img {
		margin-left: 8%;
	}
`

const icons = [
	infra, 
	kubernetes,
	security,
	ha,
	enterprise
];

const NavBar = ({ history }) => {
    return (
        <Nav>
			<Menu>
				{menu.map((route, index) => (
					<Link key={index} to={route} style={{ display: "flex", alignItems: "center" }}>
						<img height="20px" src={icons[index]} alt={route} style={{ marginRight: "20%"}} />
						<span style={{ fontWeight: history.location.pathname === route ? "700" : "500" }}>
							{route.charAt(1).toUpperCase() + route.slice(2)}
						</span>
					</Link>
				))}
			</Menu>
			<Account>
				<span>My account</span>
				<img src={account} alt="me" height="30px" />
			</Account>
        </Nav>
    );
}

export default withRouter(NavBar);