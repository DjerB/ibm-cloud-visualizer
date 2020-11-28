import React, { Component } from 'react';
import cytoscape from 'cytoscape';
import CytoscapeComponent from 'react-cytoscapejs';
//import popper from 'cytoscape-popper';
import COSEBilkent from 'cytoscape-cose-bilkent';
//import Tippy from 'tippy.js';

import user from '../images/enterprise/user_green.svg';
import chip from '../images/enterprise/chip.svg';
import cloud from '../images/enterprise/cloud.svg';
import group from '../images/enterprise/group.svg';

import { GRAPH } from '../constants/fake';

cytoscape.use(COSEBilkent);

class Network extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }
    // #F5F9FF
    render() {
        const iconBasicSize = window.innerWidth > 1500 ? 30 : 25;
        return (
            <CytoscapeComponent 
					cy={this.props.loadRef}
					elements={GRAPH} 
					layout={{ name: 'cose-bilkent' }}
					maxZoom={2}
					minZoom={0.75}
					style={ { width: '100%', height: '80vh', backgroundColor: "#edf4f9", borderRadius: "40px", marginTop: "12vh" } }
					stylesheet={[
						{
							selector: 'node',
							style: {
								"background-height": "100%",
								"background-width": "100%",
								'background-opacity': 0,
								'border-width': 0,
								'background-clip': 'none',
								"overlay-opacity": 0,
								
							}
						},
						{
							selector: '.account',
							style: {
								width: iconBasicSize,
								height: iconBasicSize,
								"background-image": user,
							}
						},
						{
							selector: '.serviceId',
							style: {
								width: iconBasicSize,
								height: iconBasicSize,
								"background-image": chip,
							}
						},
						{
							selector: '.root',
							style: {
								width: iconBasicSize + 10,
								height: iconBasicSize + 10,
								"background-image": cloud,
							}
						},
						{
							selector: '.group',
							style: {
								width: iconBasicSize + 5,
								height: iconBasicSize + 5,
								"background-image": group,
							}
						},
						{
							selector: 'edge',
							style: {
								width: 2,
								"line-style": 'dashed'
							}
						},
						/* {
							selector: 'node:selected',
							style: {
							
							  'background-color': 'yellow',
							  'line-color': 'yellow',
							  'target-arrow-color': 'black',
							  'source-arrow-color': 'black',
							}
						},
						{
							selector: 'edge:selected',
							style: {
							  'width': 20
							}
						}, */
					]} />
        )
    }
}

export default Network;

