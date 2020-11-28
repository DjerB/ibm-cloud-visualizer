import REGIONS from '../constants/mockRegions';
import ZONES from '../constants/mockZones';
import VPCs from '../constants/mockVPCs';
import SUBNETS from '../constants/mockSubnets';
import PUBLIC_GATEWAYS from '../constants/mockPublicGateways';
import INSTANCES from '../constants/mockInstances';
import CLASSIC_INFRASTRUCTURE from '../constants/mockClassicInfrastructure';

export const loadArchitecture = () => {
    // Nested architecture
    let architecture = {
        name: "IBM Cloud",
        type: "cloud"
    };
    // Links
    let links = [];

    let regions = [];

    REGIONS.regions.forEach(({ name, status, ...rest }) => {
        if (status === "available") {
            let region_vpcs = [];
            VPCs.vpcs.forEach((vpcProps) => {
                let vpc = {...vpcProps};
                if (vpc.resource_group.href.includes(name)) {

                    const vpc_subnets = SUBNETS.subnets.filter(({ vpc: sub_vpc }) => sub_vpc.id === vpc.id);
                    
                    let vpc_zones = [];
                    ZONES.zones.forEach(({ status: zone_status, name: zone_name }) => {
                        let zone_subnets = [];
                        if (zone_status === "available") {
                            vpc_subnets.forEach((subnet) => {
                                if (zone_name === subnet.zone.name) {
                                    subnet.type = "subnet";

                                    const subnet_instances = INSTANCES.instances.filter((instance) => {
                                        return instance.network_interfaces[0].subnet.id === subnet.id;
                                    });
                                    
                                    let instances = [];
                                    subnet_instances.forEach((instance) => {
                                        instances.push(instance);
                                    });

                                    subnet.instances = instances;

                                    zone_subnets.push(subnet);

                                    if (subnet.public_gateway) {
                                        links.push({
                                            from: subnet.id,
                                            to: subnet.public_gateway.id,
                                            forward: true,
                                            backward: false
                                        });
                                    }
                                }
                            });
                        }

                        vpc_zones.push({
                            type: "zone",
                            name: zone_name,
                            status: zone_status,
                            subnets: zone_subnets,
                            public_gateways: []
                        });
                    });

                    vpc.zones = vpc_zones;
                    vpc.type = "vpc";

                    region_vpcs.push(vpc);
                }
            });

            rest.classic_infrastructures = [];
            CLASSIC_INFRASTRUCTURE.classic_infrastructures.forEach((infra) => {
                if (infra.href.includes(name)) {
                    rest.classic_infrastructures.push(infra);
                }
            });

            if (region_vpcs.length > 0) {
                regions.push({
                    type: "region",
                    status,
                    vpcs: region_vpcs,
                    name,
                    ...rest
                });
            }
           
        }
    });

    PUBLIC_GATEWAYS.public_gateways.forEach((public_gateway) => {
        const regionIndex = regions.findIndex(({ vpcs }) => {
            let found = false;
            vpcs.forEach(({ id }) => {
                if (id === public_gateway.vpc.id) {
                    found = true;
                }
            });
            return found;
        });

        const vpcIndex = regions[regionIndex].vpcs.findIndex(({ id }) => id === public_gateway.vpc.id);

        const zoneIndex = regions[regionIndex].vpcs[vpcIndex].zones.findIndex(({ name }) => name === public_gateway.zone.name);

        regions[regionIndex].vpcs[vpcIndex].zones[zoneIndex].public_gateways.push({
            type: "public_gateway",
            ...public_gateway,
        });

        // TODO: Add link to links 
        
    });

    architecture.regions = regions;
    
    return architecture;

}