import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import user from '../images/enterprise/user_green.svg';
import user_bg from '../images/enterprise/user_bg.svg';
import chip from '../images/enterprise/chip.svg';
import chip_bg from '../images/enterprise/chip_bg.svg';
import cloud from '../images/enterprise/cloud.svg';
import cloud_bg from '../images/enterprise/cloud_bg.svg';
import group_bg from '../images/enterprise/group_bg.svg';
import group from '../images/enterprise/group.svg';
import resource from '../images/enterprise/resource.svg';
import ibm from '../images/ibm.png';

import logout from '../images/logout.svg';

import writer from '../images/enterprise/writer.svg';
import editor from '../images/enterprise/editor.svg';
import manager from '../images/enterprise/manager.svg';
import admin from '../images/enterprise/admin.svg';
import operator from '../images/enterprise/operator.svg';
import reader from '../images/enterprise/reader.svg';
import viewer from '../images/enterprise/viewer.svg';

import Network from '../components/network';
import NavBar from '../components/navBar';

import { generate_resources } from '../constants/fake';

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 3fr;
	column-gap: 4%;
	padding: 1% 0%;
	height: 100%;
	width: 100%;
`;

const Panel = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 5%;
	position: relative;
`;

const PanelHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 10vh;

	div {
		display: flex;
		align-items: flex-end;

		h2 {
			margin: 0;
			margin-left: 10px;
		}

		h4 {
			margin-left: 5%;
			font-weight: 500;
		}
	}
`;

const Divider = styled.div`
	height: 0;
	border-bottom: 1px solid #e4e4e4;
	width: 100%;
`;

const anim = keyframes`
	from {
		margin-top: 13%;
		opacity: 0;
	}
	to {
		margin-top: 10%;
		opacity: 1;
	}
`;

const Details = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 13%;
	opacity: 0;
	animation: ${anim} 300ms ease-in;
	animation-fill-mode: forwards; 
`;

const ResourceTitle = styled.div`
	display: grid;
	grid-template-columns: 1fr 3fr;
	column-gap: 5%;
	align-items: end;

	div {
		display: flex;
		flex-direction: column;

		span {
			font-size: 1.1em;
			color: #278de0;
			opacity: 0.5;
		}

		h2 {
			margin: 1.5% 0;
			font-size: 1.7em;
		}
	}
`;

const Owner = styled.div`
	margin: 10% 0 5% 0;

	h6 {
		color: #278de0;
		opacity: 0.5;
	}

	h5, h6 {
		margin: 0; 
	}
`;

const ResourceDetails = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 6%;
	border: 1px solid #bcc5cc;
	border-radius: 8px;
	padding: 3% 4%;

	&>div {
		display: flex;
		max-height: 5vh;
		align-items: center;

		img {
			margin-right: 3%;
		}
	}
`;

const Roles = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	width: 90%;
	margin-top: 3% !important;
	max-height: 5vh;
	margin-left: 10%;

	div {
		height: 100%;
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 3fr;
		align-items: center;
		column-gap: 7%;

		div {
			display: flex;
			flex-direction: column;
			padding: 3% 0;
			align-items: flex-start;

			span {
				font-weight: 600;
				font-size: 0.6em;
				color: #278de0;
				opacity: 0.5;
			}

			h2 {
				font-size: 1em;
				font-weight: 600;
				margin: 1% 0;
			}
		}
	}

	svg {
		height: 100%;
		width: 100%;

		text {
			font-family: 'Montserrat' !important;
		}
	}
`;

const fadein = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

const NoSelection = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 13%;
	animation: ${fadein} 500ms ease-in;
	text-align: justify;
	font-size: 0.9em;
`;

const Legend = styled.div`
	position: absolute;
	top: 17vh;
	right: 56vw;
	background-color: #f5f9ff;
	height: 22vh;
	width: 13vw;
	display: flex;
	flex-direction: column;
	border-radius: 20px;
	padding: 3vh;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

	div {
		height: 4vh;
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 4fr;
		column-gap: 1.5vw;
		align-items: center;

		span {
			font-size: 0.8em;
			font-weight: 600;
		}
	}
`;

const Footer = styled.div`
	position: absolute;
	bottom: 0;
	width: 90%;
	height: 6%;

	.logout {
		margin-top: 6%;
		display: flex;
		align-items: center;

		img {
			margin-right: 5%;
			cursor: pointer;
		}

		span {
			font-weight: 400;
			cursor: pointer;
		}
	}
`;

const all_resources = generate_resources();

const resource_type_icon = {
	"Enterprise": cloud_bg,
	"Group": group_bg,
	"Account": user_bg,
	"ServiceID": chip_bg
};

const role_icon = {
	"Manager": manager,
	"Reader": reader,
	"Writer": writer,
	"Editor": editor,
	"Admin": admin,
	"Operator": operator,
	"Viewer": viewer
};

class Enterprise extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cy: null,
			type: null,
			id: null,
			resources: null,
			owner: null
		}

		this.loadRef = this.loadRef.bind(this);
	}

	loadRef = (cy) => {
		if (this.state.cy === null) {
			const self = this;
			cy.on('mouseover', (event) => {
				if(event.cy.container()) {
				  	event.cy.container().style.cursor = 'pointer';
				}
			});
			cy.on('mouseout', (event) => {
				if(event.cy.container()) {
				  	event.cy.container().style.cursor = 'default';
				}
			});
			cy.on('tap', 'node', function(evt) {
				self.setState({ 
					type: null,
					id: null,
					resources: null
				})
				var node = evt.target;
				const data = all_resources[node.id()];
				self.setState({
					resources: data,
					type: node.data().label.split(' ')[0],
					owner: node.data().owner,
					id: node.id(),
				});
			});
		}
	}

	render () {
		const { id, resources, type, owner } = this.state;
		return (
			<Container>
                <NavBar />
				<Panel>
					<PanelHeader>
						<div>
							<img src={ibm} alt="ibm" width="20%" />
							<h2>Cloud</h2>
						</div>
					</PanelHeader>
					<Divider />
					{id && resources ?
					<Details>
						<h5 style={{ margin: "0 0 10% 0" }}>Informations</h5>
						<ResourceTitle>
							<img src={resource_type_icon[type]} alt="icon" height="100%" />
							<div>
								<span>{type}</span>
								<h2 style={{ color: "#0b172d" }}>{id}</h2>
							</div>
						</ResourceTitle>
						<Owner>
							<h6>
								Owner
							</h6>
							<h5>
								{owner}
							</h5>
						</Owner>
						<div style={{ maxHeight: "43vh", overflowY: "scroll" }}>
							{resources.map(({ resource_id, platform_role, service_role }, index) => (
								<ResourceDetails key={index}>
									<div>
										<img src={resource} alt="icon" width="15%" />
										<span style={{ fontWeight: "600", fontSize: "1em" }}>Resource {resource_id}</span>
									</div>
									<Roles>
										<div>
											<img src={role_icon[platform_role]} alt={platform_role} width="100%"/>
											<div>
												<span>Platform Role</span>
												<h2>{platform_role}</h2>
											</div>
										</div>
										<div>
											<img src={role_icon[service_role]} alt={service_role} width="100%"/>
											<div>
												<span>Service Role</span>
												<h2>{service_role}</h2>
											</div>
										</div>
									</Roles>
								</ResourceDetails>
							))}
						</div>
					</Details>
					: 
					<NoSelection>
						Click on the graph's nodes to display their infos. <br /> <br />
						Here, you'll find the IAM users hierarchy related to your enterprise root account. Users may or may not belong to an access group. <br /> <br />
						Each user can find out the resources they have access to and their corresponding roles with respect to those resources.
					</NoSelection>}
					<Footer>
						<Divider />
						<div className="logout">
							<img src={logout} alt="logout" height="20px" />
							<span>Log out</span>
						</div>
					</Footer>
				</Panel>
				<Network loadRef={this.loadRef} />
				<Legend>
					<div>
						<img src={user} alt="icon" height="100%" />
						<span>Account</span>
					</div>
					<div>
						<img src={chip} alt="icon" height="100%" />
						<span>Service ID</span>
					</div>
					<div>
						<img src={group} alt="icon" height="100%" />
						<span>Acces Group</span>
					</div>
					<div>
						<img src={cloud} alt="icon" height="100%" />
						<span>Enterprise</span>
					</div>
				</Legend>
			</Container>
		);
	}
}

export default Enterprise;