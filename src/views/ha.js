import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import NavBar from '../components/navBar';
import Map from '../components/map';

import multi_zone_bg from '../images/ha/multi_zone_bg.svg';
import single_zone_bg from '../images/ha/single_zone_bg.svg';
import resource from '../images/ha/resource.svg';
import search from '../images/ha/search.svg';
import arrow from '../images/ha/arrow.svg';

import ibm from '../images/ibm.png';
import logout from '../images/logout.svg';

import { DATA } from '../constants/mockMap';

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


const ZoneTitle = styled.div`
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

const SubZoneTitle = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr 1fr;
	column-gap: 5%;
    align-items: center;
    margin-bottom: 5%;
    cursor: pointer;

	div {
		display: flex;
		flex-direction: column;

		span {
			font-size: 1em;
			color: #278de0;
			opacity: 0.5;
		}

		h2 {
			margin: 1.5% 0;
			font-size: 1.5em;
		}
	}

	.arrow {
		width: 30%;
		transition: transform 200ms ease-in;

		&.open {
			transform: rotate(-180deg);
		}
	}
`;

const SubZoneContent = styled.div`
    overflow: hidden;
    transition: max-height 200ms ease-in;
    width: 90%;
	margin-left: 5%;
`;

const ResourceDetails = styled.div`
    display: flex;
    align-items: center;
    padding: 5%;
    border: 1px solid #bcc5cc;
	border-radius: 8px;
    margin-bottom: 5%;

    font-weight: 600;
    font-size: 0.8em;

    span {
        margin-left: 6%;
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

const SearchBar = styled.div`
	position: absolute;
	background-color: white;
	width: 25%;
	padding: 0.8% 1.5%;
	right: 5%;
	top: 17vh;
	border-radius: 8px;
	animation: ${fadein} 500ms ease-in;

	display: flex;
	flex-direction: column;

	.searchBar {
		display: grid;
		grid-template-columns: 1fr 7fr;

		input {
			border: none;
			outline: none;
			font-size: 0.8em;
		}
	}

	#search-results {
		flex-direction: column;
		padding-top: 3%;
		font-weight: 600;
		font-size: 0.7em;

		max-height: 0;
		transition: max-height 1s ease-in-out;
		display: none;
		overflow: hidden;

		&.active {
			max-height: 400px;
			display: flex;
		}

		.border {
			border-top: 1px solid #CECFD2;
			margin-bottom: 3%;
		}

		&>span {
			margin-bottom: 1%;
			cursor: pointer;
		}

		span {
			margin: 2px 0;
		}

		.name {
			color: #46A7E6;
		}
	}
`;

class HA extends Component {
    constructor(props) {
        super(props);
        this.state = {
			infos: {},
			results: []
        }

        this.onChange = this.onChange.bind(this);
	}
	
	componentDidMount() {
		const search_container = document.getElementById("search-container");
		const search_results = document.getElementById("search-results");
		const search_bar = document.getElementById("search");
		search_container.addEventListener("focusout", () => {
			search_results.classList.remove("active");
		});
		search_container.addEventListener("focusin", () => {
			if (search_bar.value.length > 0) {
				search_results.classList.add("active");
			}
		});
	}

    onChange(infos) {
		this.setState({
			infos: null,
		}, () => {
			this.setState({ infos });
		});
	}
	
	onSearch(e) {	
		const query = e.target.value.toLowerCase();
		/* let results = [];
		DATA.forEach((zone) => {
			let keywords = [];
			if (zone.type === "multi_zone") {
				if (zone.location.includes(query)) {
					results.push(zone);
				}
				
				zone.zones.forEach((z) => {
					if (z.title.includes(query)) {
						results.push(z);
					}
					z.resources.forEach((res) => {
						keywords.push(...res.keywords);
					});
				})
			}
		}) */
		
		if (query.length > 0) {
			document.getElementById("search-results").classList.add("active");
		} else {
			document.getElementById("search-results").classList.remove("active");
		}
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
					{infos && Object.keys(infos).length > 0 ?
					<Details>
						<h5 style={{ margin: "0 0 10% 0" }}>Informations</h5>
						<ZoneTitle>
							<img src={infos.type === "multi_zone" ? multi_zone_bg : single_zone_bg} alt="icon" height="100%" />
							<div>
								<span>{infos.type === "multi_zone" ? "Multi zone" : "Zone"}</span>
                                <h2 style={{ color: "#0b172d" }}>{infos.type === "multi_zone" ? infos.location : infos.title}</h2>
							</div>
						</ZoneTitle>
						<ScrollView>
                            {infos.type === "multi_zone" ?
                            infos.zones.map((zone, index) => (
                                <div style={{ marginTop: "3%" }} key={index}>
                                    <SubZoneTitle onClick={(e) => {
											document.getElementById(`arrow-${index}`).classList.toggle("open");

											const content = document.getElementById(index);
											if (content.style.maxHeight === "0px") {
												content.style.maxHeight = `${100*zone.resources.length}px`;
											} else {
												content.style.maxHeight = "0px";
											}
										}}>
                                        <img src={single_zone_bg} alt="icon" height="100%" />
                                        <div>
                                            <span>Zone</span>
                                            <h2 style={{ color: "#0b172d" }}>{zone.title}</h2>
                                        </div>
										<div style={{ display: "flex", alignItems: "center", width: "100%" }}>
											<img id={`arrow-${index}`} className="arrow" src={arrow} alt="expand" />
										</div>
                                    </SubZoneTitle>
                                    <SubZoneContent id={index} style={{ maxHeight: "0px" }}>
                                        {zone.resources.map((res, index2) => (
                                            <ResourceDetails key={index2}>
                                                <img src={resource} alt="resource" width="15%" />
                                                <span>Resource {res.type} {res.name}</span>
                                            </ResourceDetails>
                                        ))}
                                    </SubZoneContent>
                                </div>
                            ))
                            :
                            infos.resources.map((res, index) => (
                                <ResourceDetails key={index}>
                                    <img src={resource} alt="resource" width="15%" />
                                    <span>Resource {res.type} {res.name}</span>
                                </ResourceDetails>
                            ))
                            }
						</ScrollView>
					</Details>
					: 
					<NoSelection>
						Click on the map's markers to display their infos. <br /> <br />
						Each marker represents a multi-zone or single-zone region. By clicking on one of the markers, you can 
						see which resources are linked to a particular zone. 
					</NoSelection>}
					<Footer>
						<Divider />
						<div className="logout">
							<img src={logout} alt="logout" height="20px" />
							<span>Log out</span>
						</div>
					</Footer>
				</Panel>
                <Map onChange={this.onChange} />
				<SearchBar id="search-container">
					<div className="searchBar">
						<img src={search} alt="search" height="100%" />
						<input
							id="search"
							placeholder="Enter a resource or a location..." 
							onChange={this.onSearch} 
						/>
					</div>
					<div id="search-results">
						<div className="border"></div>
						<span>Virtual Private Network <span className="name">my-vpn</span></span>
						<span>Virtual Private Cloud <span className="name">my-vpn</span></span>
						<span>Virtual Machine <span className="name">my-vm</span></span>
					</div>
				</SearchBar>
			</Container>
		);
    }
}

export default HA;