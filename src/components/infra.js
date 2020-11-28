import React, { Component } from 'react';
import styled from 'styled-components';
import * as go from 'gojs';
import { ReactDiagram } from 'gojs-react';

import { PUBLIC_GATEWAY, SUBNETS, VPCs } from '../constants/mockNetworkData';

import { loadArchitecture } from '../utils/infra';

import cloud from '../images/infrastructure/cloud.svg';
import power from '../images/infrastructure/power.svg';
import public_load_balancer from '../images/infrastructure/public_load_balancer.svg';
import public_gateway from '../images/infrastructure/public_gateway.svg';
import region from '../images/infrastructure/region.svg';
import vpc from '../images/infrastructure/vpc.svg';
import vpn from '../images/infrastructure/vpn.svg';
import vsi from '../images/infrastructure/vsi.svg';
import zone from '../images/infrastructure/zone.svg';
import subnet from '../images/infrastructure/subnet.svg';
import user from '../images/infrastructure/public_user.svg';
import enterprise_user from '../images/infrastructure/enterprise_user.svg';
import enterprise_data from '../images/infrastructure/enterprise_data.svg';
import enterprise_apps from '../images/infrastructure/enterprise_apps.svg';
import internet from '../images/infrastructure/internet.svg';
import public_network from '../images/infrastructure/public_network.svg';
import enterprise_network from '../images/infrastructure/enterprise_network.svg';
import bare_metal from '../images/infrastructure/bare_metal.svg';
import classic_datacenter from '../images/infrastructure/classic_data_center.svg';
import classic_vsi from '../images/infrastructure/classic_vsi.svg';
import gateway_appliance from '../images/infrastructure/gateway_appliance.svg';

// a collection of colors
const colors = {
    blue: "#2a6dc0",
    orange: "#ea2857",
    green: "#1cc1bc",
    gray: "#5b5b5b",
    white: "#FFFFFF"
}

const images = {
    cloud, 
    power,
    public_load_balancer,
    public_gateway,
    region,
    vpc,
    "VSI": vsi,
    zone,
    subnet,
    user,
    enterprise_apps,
    enterprise_data,
    enterprise_user,
    internet,
    "VPN": vpn,
    enterprise_network,
    public_network,
    classic_vsi,
    classic_datacenter,
    bare_metal,
    gateway_appliance,
    classic_infrastructure: vpc
};

function handleModelChange(changes) {
    return
}

const Zoom = styled.div`
    position: absolute;
    top: 20vh; 
    right: 10%;
    z-index: 1000;
    display: flex;
    align-items: center;
    background-color: #edf4f9;
    padding: 0.7em 1em;
    border-radius: 10px;

    label {
        font-size: 0.8em;
        font-weight: 500;
        margin-right: 0.4em;
    }

    input {
        height: 0.3em;
    }

    /* input[type=range]::-webkit-slider-thumb, input[type=range]::-moz-range-thumb, input[type=range]::-ms-thumb {
        -webkit-appearance: none;
        height: 0.4em;
        width: 0.4em;
        cursor: pointer;
    } */
`;

class Infra extends Component {
    constructor(props) {
        super(props);
        this.state = {
            infra: [],
            links: []
        }

        this.loadData = this.loadData.bind(this);
        this.initDiagram = this.initDiagram.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    initDiagram() { // init for these samples -- you don't need to call this
        var $ = go.GraphObject.make;

        const myDiagram =
            $(go.Diagram,
                {
                    initialContentAlignment: go.Spot.Center,
                    minScale: 0.2,
                    maxScale: 2,
                    initialScale: 0.5,
                    layout:  // Diagram has simple horizontal layout
                        $(go.GridLayout,
                            { wrappingWidth: Infinity, alignment: go.GridLayout.Position, cellSize: new go.Size(1, 1), spacing: new go.Size(40, 10) }
                        ),
                    "commandHandler.archetypeGroupData": { isGroup: true, text: "Group", horiz: false },
                    "undoManager.isEnabled": true,
                    model: $(go.GraphLinksModel, {
                        linkKeyProperty: 'key',  // this should always be set when using a GraphLinksModel
                        linkFromPortIdProperty: "fromPort",
                        linkToPortIdProperty: "toPort",
                    }),
                    allowMove: false,
                    allowDrop: false
                }
            );

        const self = this;

        myDiagram.addDiagramListener("ObjectSingleClicked",
            function(e) {
                var part = e.subject.part;
                if (!(part instanceof go.Link) && !e.subject._buttonFillNormal) {
                    self.props.onClick(part.data.data);
                };
        });

        // The one template for Groups can be configured to be either layout out its members
        // horizontally or vertically, each with a different default color.

        function makeLayout(horiz) {  // a Binding conversion function
            if (horiz) {
                return $(go.GridLayout,
                    {
                        wrappingWidth: Infinity, alignment: go.GridLayout.Position, wrappingColumn: 2,
                        cellSize: new go.Size(1, 1), spacing: new go.Size(40, 40)
                    }
                );
            } else {
                return $(go.GridLayout,
                    {
                        wrappingColumn: 1, alignment: go.GridLayout.Position,
                        cellSize: new go.Size(1, 1), spacing: new go.Size(40, 40)
                    }
                );
            }
        }

        function defaultColor(horiz) {  // a Binding conversion function
            return horiz ? "#FFDD33" : "#33D3E5";
        }

        function defaultFont(horiz) {  // a Binding conversion function
            return horiz ? "bold 20px" : "bold 20px";
        }

        myDiagram.groupTemplate =
            $(go.Group, "Auto",
                {
                    background: "transparent",
                    padding: new go.Margin(20, 20, 20, 20)
                },
                new go.Binding("layout", "horiz", makeLayout),
                $(go.Shape, "RoundedRectangle",
                    { fill: null, stroke: defaultColor(false), strokeWidth: 5 },
                    new go.Binding("background", "bgColor"),
                    new go.Binding("stroke", "borderColor"),
                    new go.Binding("stroke", "color")
                ),
                $(go.Panel, "Vertical",  // title above Placeholder
                    $(go.Panel, "Horizontal",  // button next to TextBlock
                        { stretch: go.GraphObject.Horizontal, background: defaultColor(false), padding: new go.Margin(5, 5), cursor: "pointer" },
                        new go.Binding("background", "borderColor"),
                        new go.Binding("background", "color"),
                        /* $(go.Shape,
                            { 
                                margin: 3,
                                strokeWidth: 0, 
                                desiredSize: new go.Size(25, 25),
                                background: colors["white"],
                            },
                            new go.Binding("fill", "borderColor"),
                            new go.Binding("geometry", "geo", geoFunc)
                        ), */
                        $(go.Panel, 
                            $(go.Shape, "RoundedRectangle",
                                {
                                    height: 25,
                                    width: 25,
                                    fill: colors["white"],
                                },
                                new go.Binding("stroke", "borderColor"),
                            ),
                            $(go.Picture,
                                {   
                                    width: 25,
                                    height: 25,
                                },
                                new go.Binding("source", "icon", (icon) => images[icon]), 
                            ),
                        ),
                        $(go.TextBlock,
                            {
                                alignment: go.Spot.Left,
                                editable: false,
                                margin: new go.Margin(3, 5, 0, 5),
                                font: defaultFont(false),
                                stroke: colors["white"],
                            },
                            new go.Binding("font", "horiz", defaultFont),
                            new go.Binding("text", "text").makeTwoWay()
                        ),
                        $("SubGraphExpanderButton",
                            { 
                                alignment: go.Spot.Right, 
                                margin: new go.Margin(0, 0, 0, 0),
                                desiredSize: new go.Size(20, 20),
                                "ButtonBorder.fill": "white",
                                "ButtonBorder.stroke": "white",
                                '_buttonFillNormal': "white",
                                '_buttonStrokeNormal': "white",
                                '_buttonFillOver': "white",
                                '_buttonStrokeOver': "white",
                                '_buttonFillPressed': "white",
                                '_buttonStrokePressed': "white",
                                '_buttonFillDisabled': "white",
                            },
                            new go.Binding("stroke", "borderColor"),
                            new go.Binding("ButtonIcon.stroke", "borderColor"),
                        ),
                    ),  // end Horizontal Panel
                    $(go.Placeholder,
                        { padding: 5, alignment: go.Spot.TopLeft }
                    )
                ),  // end Vertical Panel
            );

        myDiagram.nodeTemplate =
            $(go.Node, "Auto",
                {
                    desiredSize: new go.Size(100, 80),
                    margin: new go.Margin(20, 0, 20, 10),
                    cursor: "pointer"
                },
                $(go.TextBlock,  // the text label
                    {
                        textAlign: "center",
                        font: "bold"
                    },
                    new go.Binding("text", "text"),
                    new go.Binding("stroke", "color")
                ),
                $(go.Panel, 
                    $(go.Picture,
                        {   
                            width: 50,
                            height: 50,
                        },
                        new go.Binding("source", "icon", (icon) => images[icon]), 
                    ),
                ),
                /* $(go.Shape,
                    { margin: 3, fill: colors["white"], strokeWidth: 0 },
                    new go.Binding("geometry", "geo", geoFunc)
                ),
                // Each node has a tooltip that reveals the name of its icon
                {
                    toolTip:
                    $("ToolTip",
                        { "Border.stroke": colors["gray"], "Border.strokeWidth": 2 },
                        $(go.TextBlock, { margin: 8, stroke: colors["gray"], font: "bold 16px" },
                            new go.Binding("text", "geo")
                        )
                    )
                } */
                /* $(go.TextBlock,
                    {
                        margin: 0,
                        editable: false,
                        font: "bold 13px sans-serif",
                        opacity: 0.75,
                        stroke: "#404040"
                    },
                    new go.Binding("text", "text").makeTwoWay()
                ), */
        );

        function makeArrowForward(forward) {
            return forward ? "Standard" : "";
        }

        function makeArrowBackward(backward) {
            return backward ? "Backward" : "";
        }

        myDiagram.linkTemplate =
            $(go.Link,  // the whole link panel
            {
                selectionAdorned: true,
                layerName: "Foreground",
                reshapable: true,
                routing: go.Link.Orthogonal,
                corner: 5,
                curve: go.Link.JumpOver
            },
            $(go.Shape,  // the link shape
                { stroke: "#CECECE", strokeWidth: 2.5 }),
            $(go.TextBlock,  // the "from" label
                {
                textAlign: "center",
                font: "bold 14px sans-serif",
                stroke: "#1967B3",
                segmentIndex: 0,
                segmentOffset: new go.Point(NaN, NaN),
                segmentOrientation: go.Link.OrientUpright
                },
                new go.Binding("text", "text")),
            $(go.TextBlock,  // the "to" label
                {
                textAlign: "center",
                font: "bold 14px sans-serif",
                stroke: "#1967B3",
                segmentIndex: -1,
                segmentOffset: new go.Point(NaN, NaN),
                segmentOrientation: go.Link.OrientUpright
                },
                new go.Binding("text", "toText")),
                $(go.Shape,
                    {
                        fill: "#CECECE",
                        stroke: "#CECECE"
                    },
                    new go.Binding("toArrow", "forward", makeArrowForward)
                ),
                $(go.Shape, 
                    {
                        fill: "#CECECE",
                        stroke: "#CECECE"
                    },
                    new go.Binding("fromArrow", "backward", makeArrowBackward)
                ),
            );


        /* function makePort(name, align, spot, output, input) {
            var horizontal = align.equals(go.Spot.Top) || align.equals(go.Spot.Bottom);
            // the port is basically just a transparent rectangle that stretches along the side of the node,
            // and becomes colored when the mouse passes over it
            return $(go.Shape,
            {
                fill: "transparent",  // changed to a color in the mouseEnter event handler
                strokeWidth: 0,  // no stroke
                width: horizontal ? NaN : 8,  // if not stretching horizontally, just 8 wide
                height: !horizontal ? NaN : 8,  // if not stretching vertically, just 8 tall
                alignment: align,  // align the port on the main Shape
                stretch: (horizontal ? go.GraphObject.Horizontal : go.GraphObject.Vertical),
                portId: name,  // declare this object to be a "port"
                fromSpot: spot,  // declare where links may connect at this port
                fromLinkable: output,  // declare whether the user may draw links from here
                toSpot: spot,  // declare where links may connect at this port
                toLinkable: input,  // declare whether the user may draw links to here
                cursor: "pointer",  // show a different cursor to indicate potential link point
                mouseEnter: function(e, port) {  // the PORT argument will be this Shape
                if (!e.diagram.isReadOnly) port.fill = "rgba(255,0,255,0.5)";
                },
                mouseLeave: function(e, port) {
                port.fill = "transparent";
                }
            });
        } */
        
        function reexpand(e) {
            myDiagram.commit(function(diag) {
                var level = parseInt(document.getElementById("levelSlider").value);
                diag.findTopLevelGroups().each(function(g) { expandGroups(g, 0, level); })
            } ,"reexpand");
        }

        function expandGroups(g, i, level) {
            if (!(g instanceof go.Group)) return;
            g.isSubGraphExpanded = i < level;
            g.memberParts.each(function(m) {
                expandGroups(m, i + 1, level);
            });
        }

        // FOR CONTROLLING THE LEVEL OF NESTING (DEPTH)
        const slider = document.getElementById("levelSlider");
        slider.addEventListener('change', reexpand);
        slider.addEventListener('input', reexpand);
        
        return myDiagram;
    }

    loadData() {
        let count = 1;
        let keys = {};
        let infra = [];
        let links = [];

        const addKey = (id, key) => {
            keys[id] = key;
        }

        const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);
        
        const colors = {
            internet: "#2A43DA",
            public_vpn: "#2CDF55",
            user: "#20CEC9",
            network: "#20CEC9",
            cloud: "#7529E2",
            region: "#4C9EFF",
            vpc: "#7529E2",
            classic_infrastructure: "#7529E2",
            zone: "#4C9EFF",
            classic_datacenter: "#4C9EFF",
            subnet: "#149B04",
            public_gateway: "#31E063",
            vpc_gateway: "#31E063",
            VSI: "#2AE055",
            gateway_appliance: "#2AE055",
            classic_vsi: "#2AE055",
            bare_metal: "#2AE055",
            power: "#339DA9",
            enterprise_apps: "#2B45E0",
            enterprise_data: "#2AE055",
            enterprise_user_directory: "#2B45E0"
        }

        const architecture = loadArchitecture();

        // Public Network
        infra.push({ data: { type: "public_network", name: "Public Network" }, horiz: false, key: count, isGroup: true, text: "Public Network", borderColor: colors["network"], icon: "public_network" });
        addKey("public_network", count);
        count += 1;

        infra.push({ data: { type: "user", name: "User" }, key: count, color: colors["network"], text: "User", group: keys["public_network"], icon: "user" });
        addKey("user", count);
        count += 1;

        infra.push({ data: { type: "internet", name: "Internet" }, key: count, color: colors["internet"], text: "Internet", group: keys["public_network"], icon: "internet" });
        addKey("internet", count);
        count += 1;

        infra.push({ data: { type: "VPN", name: "VPN connection" }, key: count, color: colors["public_vpn"], text: "VPN connection", group: keys["public_network"], icon: "VPN" });
        addKey("public_vpn", count);
        count += 1;

        links.push({ from: keys["user"], to: keys["internet"], forward: true, backward: true });
        links.push({ from: keys["internet"], to: keys["public_vpn"], forward: true, backward: true });


        // IBM Cloud 
        infra.push({ data: { type: "cloud", name: "IBM Cloud" }, key: count, isGroup: true, text: "IBM Cloud", horiz: true, borderColor: colors["cloud"], icon: "cloud" });
        addKey("cloud", count);
        count += 1;

        architecture.regions.forEach((region) => {
            infra.push({ data: region, key: count, isGroup: true, text: `${capitalize(region.type)} ${region.name}`, horiz: true, group: keys["cloud"], borderColor: colors[region.type], icon: "region" });
            addKey(region.name, count);
            count += 1;

            region.vpcs.forEach((vpc) => {
                infra.push({ data: vpc, key: count, isGroup: true, text: `${vpc.type.toUpperCase()} ${vpc.name}`, horiz: true, group: keys[region.name], borderColor: colors[vpc.type], icon: "vpc" });
                addKey(vpc.id, count);
                count += 1;

                vpc.zones.forEach((zone) => {
                    const horiz = zone.public_gateways.length + zone.subnets.length > 2;
                    infra.push({ data: zone, key: count, isGroup: true, text: `${capitalize(zone.type)} ${zone.name}`, horiz, group: keys[vpc.id], borderColor: colors[zone.type], icon: "zone" });
                    addKey(`${vpc.id}-${zone.name}`, count);
                    count += 1;

                    zone.public_gateways.forEach((public_gateway) => {
                        infra.push({ data: public_gateway, key: count, color: colors[public_gateway.type], text: capitalize(public_gateway.type), group: keys[`${vpc.id}-${zone.name}`], icon: public_gateway.type });
                        links.push({ from: count, to: keys["internet"], forward: true, backward: false });
                        addKey(public_gateway.id, count);
                        count += 1;
                    });

                    zone.subnets.forEach((subnet) => {
                        infra.push({ data: subnet, key: count, isGroup: true, text: `${capitalize(subnet.type)} ${subnet.ipv4_cidr_block}: ACL ${subnet.network_acl.name}`, horiz: true, group: keys[`${vpc.id}-${zone.name}`], borderColor: colors[subnet.type], icon: "subnet"  });
                        if (subnet.public_gateway) {
                            links.push({ from: count, to: keys[subnet.public_gateway.id], forward: true, backward: false });
                        }
                        addKey(subnet.id, count);
                        count += 1;

                        subnet.instances.forEach((instance) => {
                            infra.push({ data: instance, key: count, color: colors[instance.type], text: capitalize(instance.type), group: keys[subnet.id], icon: instance.type });
                            addKey(instance.id, count);
                            count += 1;
                        });
                    });
                });
            });

            region.classic_infrastructures.forEach((classic_infra) => {
                infra.push({ data: classic_infra, key: count, isGroup: true, text: `${classic_infra.name}`, horiz: true, group: keys[region.name], borderColor: colors[classic_infra.type], icon: "classic_infrastructure" });
                addKey(classic_infra.id, count);
                count += 1;

                classic_infra.classic_datacenters.forEach((data_center) => {
                    infra.push({ data: data_center, key: count, isGroup: true, text: `${data_center.name}`, horiz: false, group: keys[classic_infra.id], borderColor: colors[vpc.type], icon: "classic_datacenter" });
                    addKey(data_center.id, count);
                    count += 1; 

                    data_center.instances.forEach((instance) => {
                        infra.push({ data: instance, key: count, color: colors[instance.type], text: capitalize(instance.type), group: keys[data_center.id], icon: instance.type });
                        addKey(instance.id, count);
                        count += 1;
                    })
                });

            });
        });

        // Public Network
        infra.push({ data: { type: "enterprise_network", name: "Enterprise Network" }, horiz: false, key: count, isGroup: true, text: "Enterprise Network", borderColor: colors["network"], icon: "enterprise_network" });
        addKey("enterprise_network", count);
        count += 1;

        infra.push({ data: { type: "enterprise_user_directory", name: "Enterprise User Directory" }, key: count, color: colors["enterprise_user_directory"], text: "Enteprise User Directory", group: keys["enterprise_network"], icon: "enterprise_user" });
        addKey("enterprise_user_directory", count);
        count += 1;

        infra.push({ data: { type: "enterprise_user", name: "Enterprise User" }, key: count, color: colors["user"], text: "Enteprise User", group: keys["enterprise_network"], icon: "user" });
        addKey("enterprise_user", count);
        count += 1;

        infra.push({ data: { type: "enterprise_apps", name: "Enterprise Applications" }, key: count, color: colors["enterprise_apps"], text: "Enterprise Applications", group: keys["enterprise_network"], icon: "enterprise_apps" });
        addKey("enterprise_apps", count);
        count += 1;

        infra.push({ data: { type: "enterprise_data", name: "Enterprise Data" }, key: count, color: colors["enterprise_data"], text: "Enterprise Data", group: keys["enterprise_network"], icon: "enterprise_data" });
        addKey("enterprise_data", count);
        count += 1;

        links.push({ from: keys["enterprise_user_directory"], to: keys["enterprise_user"], forward: true, backward: true });
        links.push({ from: keys["enterprise_user"], to: keys["enterprise_apps"], forward: true, backward: true });
        links.push({ from: keys["enterprise_apps"], to: keys["enterprise_data"], forward: true, backward: true });

        links.push({ from: keys["enterprise_apps"], to: keys["882a7764-5f0e-43b5-b276-0d1c39189488"], forward: true, backward: true });


        this.setState({
            infra,
            links
        });
    }

    loadDataBackup() {

        let key = 1;
        let parentKey;
        let infra = [];
        let links = [];

        // PUBLIC NETWORK
        const publicKey = key;
        infra.push({ key, isGroup: true, text: "Public Network", horiz: false, borderColor: "#A98D76" });
        key += 1;
        infra.push({ geo: "user", color: colors["blue"], text: "User", group: publicKey, key });
        key += 1;
        infra.push({ geo: "earth", color: colors["blue"], text: "Internet", group: publicKey, key });
        links.push({ from: key, to: key-1, forward: true, backward: true });
        links.push({ from: key, to: key+1, forward: true, backward: true });
        key += 1;
        infra.push({ geo: "file", color: colors["blue"], text: "VPN Connection", group: publicKey, key });

        // IBM CLOUD
        key += 1
        infra.push({ key, isGroup: true, text: "IBM Cloud", horiz: true, borderColor: "#A98D76" });
        parentKey = key;

        // REGION 
        key += 1;
        infra.push({ key, isGroup: true, text: "Region", horiz: true, group: parentKey, borderColor: "#A98D76" });
        parentKey = key;

        VPCs.vpcs.forEach((vcpProps) => {
            key += 1;
            // ADD VPC
            infra.push({ key, isGroup: true, text: `VPC ${vcpProps.name}`, horiz: true, group: parentKey, borderColor: "#A98D76", ...vcpProps });
            parentKey = key;

            // ADD ZONES AND SUBNETS
            const subnets = SUBNETS.subnets.filter(({ vpc }) => vpc.id === vcpProps.id);
            let zonesNames = new Set([]);
            subnets.forEach(({ zone }) => zonesNames.add(zone.name));
            let index = 0;
            zonesNames.forEach((name) => {
                key += 1;
                const zoneKey = key;
                infra.push({ key: zoneKey, isGroup: true, text: `Zone ${name}`, horiz: false, group: parentKey, borderColor: "#A98D76", bgColor: "#e4e4e4" })

                // API GET PUBLIC GATEWAY FOR A PARTICULAR SUBNET
                if (index === 0) {
                    key += 1;
                    infra.push({ geo: "file", color: colors["blue"], text: "Public Gateway", group: zoneKey, key, ...PUBLIC_GATEWAY })
                }

                // SUBNETS
                subnets.filter(({ zone }) => zone.name === name).forEach((subnetProps, index) => {
                    key += 1;
                    const subnetKey = key;
                    infra.push({  key, isGroup: true, text: `Subnet ${subnetProps.name} ${subnetProps.ipv4_cidr_block} : ACL ${subnetProps.network_acl.name}`, horiz: true, group: zoneKey, borderColor: "#A98D76",  bgColor: "#E8F2E5", ...subnetProps });
                    
                    const geo = index % 2 === 0 ? "download" : "switch";
                    const text = index % 2 === 0 ? "VSI" : "Power";

                    key += 1;
                    infra.push({ geo, color: colors["blue"], text, group: subnetKey, key });
                    key += 1;
                    infra.push({ geo, color: colors["blue"], text, group: subnetKey, key });
                });

                if (index === 0) {
                    links.push({ from: zoneKey+1, to: zoneKey+2, forward: false, backward: true })
                    links.push({ from: 3, to: zoneKey+1, forward: false, backward: true });
                }
                
                index += 1;
            });

        });


        // ENTERPRISE NETWORK
        key += 1;
        const enterpriseKey = key;
        infra.push({ key, isGroup: true, text: "Enterprise Network", horiz: false, borderColor: "#A98D76" });
        key += 1;
        infra.push({ geo: "user", color: colors["blue"], text: "Enterprise User Directory", group: enterpriseKey, key });
        key += 1;
        infra.push({ geo: "user", color: colors["blue"], text: "Enterprise User", group: enterpriseKey, key });
        links.push({ from: key, to: key-1, forward: true, backward: true });
        links.push({ from: key, to: key+1, forward: true, backward: true });
        key += 1;
        infra.push({ geo: "user", color: colors["blue"], text: "Enterprise Applications", group: enterpriseKey, key });
        key += 1;
        infra.push({ geo: "user", color: colors["blue"], text: "Enterprise Data", group: enterpriseKey, key });
        links.push({ from: key-1, to: key, forward: true, backward: true });

        this.setState({ infra, links });

    }

    loadData1() {
        let key = 1;
        let infra = { key, isGroup: true, text: "IBM Cloud", horiz: true };
        // { created_at, crn, default_network_acl, href, id, name, resource_group, status }
        VPCs.vpcs.forEach((vcpProps) => {
            key += 1;
            let vpc = { key, ...vcpProps };
            // HERE QUERY ZONES AND RESOURCES FOR THIS PARTICULAR VPC
            const subnets = SUBNETS.subnets.filter(({ vpc }) => vpc.id === vcpProps.id);
            let zonesNames = new Set([]);
            subnets.forEach(({ zone }) => zonesNames.add(zone.name));
            let zones = [];
            zonesNames.forEach((name) => {
                key += 1;
                const zoneKey = key;
                let zoneSubnets = []
                subnets.filter(({ zone }) => zone.name === name).forEach((subnetProps) => {
                    key += 1;
                    zoneSubnets.push({ key, ...subnetProps });
                });
                zones.push({
                    key,
                    name,
                    subnets: zoneSubnets
                });
            });
            infra.push()
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.infra.length !== this.state.infra.length || nextState.links.length !== this.state.links.length;
    }

    render() {
        const { infra, links } = this.state;
        return (
            <>
                <ReactDiagram
                    initDiagram={this.initDiagram}
                    divClassName='diagram-component'
                    nodeDataArray={infra}
                    linkDataArray={links}
                    onModelChange={handleModelChange}
                    />
                <Zoom>
                    <label htmlFor="levelSlider">Semantic Level Zoom</label>
                    <input 
                        name="levelSlider" 
                        id="levelSlider" 
                        type="range" 
                        min="0" 
                        max="5" 
                    />
                </Zoom>
            </>
        );
    }
}

/*
nodeDataArray={[
    { key: 1, isGroup: true, text: "Public Network", horiz: true },
    { key: 2, isGroup: true, text: "IMB Cloud", horiz: true },
    { key: 3, isGroup: true, text: "Enterprise Network", horiz: true },
    { key: 4, isGroup: true, text: "Region", group: 2 },
    { key: 4, isGroup: true, text: "Group B", group: 1 },
    { key: 5, isGroup: true, text: "Group C", group: 2 },
    { key: 6, isGroup: true, text: "Group D", group: 2 },
    { key: 7, isGroup: true, text: "Group E", group: 6 },
    { text: "first A", group: 3, key: -7 },
    { text: "second A", group: 3, key: -8 },
    { text: "first B", group: 4, key: -9 },
    { text: "second B", group: 4, key: -10 },
    { text: "third B", group: 4, key: -11 },
    { text: "first C", group: 5, key: -12 },
    { text: "second C", group: 5, key: -13 },
    { text: "first D", group: 6, key: -14 },
    { text: "first E", group: 7, key: -15 }
]}
*/
export default Infra;