import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import Infra from '../components/infra';
import NavBar from '../components/navBar';

import cloud from "../images/infrastructure/cloud.svg";
import cloud_bg from "../images/infrastructure/cloud_bg.svg";
import power from "../images/infrastructure/power.svg";
import public_load_balancer from "../images/infrastructure/public_load_balancer.svg";
import region from "../images/infrastructure/region.svg";
import region_bg from "../images/infrastructure/region_bg.svg";
import vpc from "../images/infrastructure/vpc.svg";
import vpc_bg from "../images/infrastructure/vpc_bg.svg";
import vsi from "../images/infrastructure/vsi.svg";
import zone from "../images/infrastructure/zone.svg";
import zone_bg from "../images/infrastructure/zone_bg.svg";
import subnet_bg from "../images/infrastructure/subnet_bg.svg";
import user from '../images/infrastructure/public_user.svg';
import enterprise_user from '../images/infrastructure/enterprise_user.svg';
import enterprise_data from '../images/infrastructure/enterprise_data.svg';
import enterprise_apps from '../images/infrastructure/enterprise_apps.svg';
import internet from '../images/infrastructure/internet.svg';
import vpn from '../images/infrastructure/vpn.svg';
import public_gateway from '../images/infrastructure/public_gateway.svg';
import public_network_bg from '../images/infrastructure/public_network_bg.svg';
import enterprise_network_bg from '../images/infrastructure/enterprise_network_bg.svg';
import bare_metal from '../images/infrastructure/bare_metal.svg';
import classic_datacenter_bg from '../images/infrastructure/classic_data_center_bg.svg';
import classic_vsi from '../images/infrastructure/classic_vsi.svg';
import gateway_appliance from '../images/infrastructure/gateway_appliance.svg';

import ibm from '../images/ibm.png';
import logout from '../images/logout.svg';
import minus from '../images/minus.png';

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
			overflow: hidden
		}
	}
`;

const ResourceDetails = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5%;
    border: 1px solid #bcc5cc;
	border-radius: 8px;
    margin-bottom: 5%;

    font-weight: 600;
    font-size: 0.8em;

    .attribute {
        color: #278de0;
        margin-bottom: 3%;
    }
`;

const ScrollView = styled.div`
    max-height: 47vh; 
    overflow-y: scroll;
    margin-top: 10%;
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

const resource_type_icon = {
	"vpc": vpc_bg,
	"region": region_bg,
	"cloud": cloud_bg,
	"zone": zone_bg,
	"subnet": subnet_bg,
	"VSI": vsi,
	"power": power,
	"user": user,
	"VPN": vpn,
	"public_gateway": public_gateway,
	"enterprise_user_directory": enterprise_user,
	"enterprise_user": user,
	"enterprise_data": enterprise_data,
	"enterprise_apps": enterprise_apps,
	"internet": internet,
	"public_network": public_network_bg,
	"enterprise_network": enterprise_network_bg,
	"bare_metal": bare_metal,
	"classic_vsi": classic_vsi,
	"classic_datacenter": classic_datacenter_bg,
	"classic_infrastructure": vpc_bg,
	"gateway_appliance": gateway_appliance
};

class Infrastructure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            infos: {}
		}
		
		this.onChange = this.onChange.bind(this);
	}
	
	onChange(infos) {
		this.setState({
			infos: {}
		}, () => {
			this.setState({ infos });
		});
	}

    render() {
		const { infos } = this.state;
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
					{Object.keys(infos).length > 0 ?
					<Details>
						<h5 style={{ margin: "0 0 10% 0" }}>Informations</h5>
						<ResourceTitle>
							<img src={resource_type_icon[infos.type]} alt="icon" height="100%" />
							<div>
								<span>{infos.type}</span>
								<h2 style={{ color: "#0b172d" }}>{infos.name}</h2>
							</div>
						</ResourceTitle>
						{/* <Owner>
							<h6>
								Owner
							</h6>
							<h5>
								{owner}
							</h5>
						</Owner> */}
						<ScrollView>
							{Object.keys(infos).map((key, index) => {
                                return (Array.isArray(infos[key]) || typeof infos[key] === 'object') ?
                                null :
								<ResourceDetails key={index}>
									<span className="attribute">{key}</span>
                                    <span className="value">{infos[key]}</span>
								</ResourceDetails>
                            })}
						</ScrollView>
					</Details>
					: 
					<NoSelection>
						Click on the diagram's nodes to display their infos. <br /> <br />
						Your enterprise's whole architecture is represented here: you can see how your system is linked to the outside world and your enterprise network. <br /> <br />
						Your IBM Cloud infrastructure is fetched using API calls to the IBM Cloud VPC API and parsed into a user-friendly readable format. Connections between services and subinfrastructures are shown. <br /> <br />
						For clarity purposes, you can expand or close groups by clicking on the <img style={{ width: "1em", height: "1em" }} src={minus} alt="minus" /> button. That helps focus on specific parts of the architecture without overcharging the visualization.
					</NoSelection>}
					<Footer>
						<Divider />
						<div className="logout">
							<img src={logout} alt="logout" height="20px" />
							<span>Log out</span>
						</div>
					</Footer>
				</Panel>
                <Infra onClick={this.onChange}/>
			</Container>
		);
    }
}

export default Infrastructure;