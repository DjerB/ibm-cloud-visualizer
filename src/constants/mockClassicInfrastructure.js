const CLASSIC_INFRASTRUCTURE = {
    classic_infrastructures: [
        {
            created_at: '2019-01-25T12:28:30Z',
            href: 'https://us-south.iaas.cloud.ibm.com/v1/infra/f5f0e-43b5-b276-0d1c39189488',
            id: '5f0e-43b5-b276-0d1c39189488',
            name: 'Classic Infra',
            status: 'available',
            type: "classic_infrastructure",
            classic_datacenters: [
                {
                    created_at: '2019-01-25T12:28:30Z',
                    href: 'https://us-south.iaas.cloud.ibm.com/v1/data_center/fdineicnrivnri-43b5-b276-0d1c39189488',
                    id: 'dineicnrivnri-43b5-b276-0d1c39189488',
                    name: 'Classic Datacenter',
                    status: 'available',
                    type: "classic_datacenter",
                    instances: [
                        {
                            type: "gateway_appliance",
                            name: "Gateway Appliance",
                            id: "1226c-buud99-pslc6789"
                        },
                        {
                            type: "classic_vsi",
                            name: "Classic VSI",
                            id: "330kc-buud99-pslc6789"
                        },
                        {
                            type: "bare_metal",
                            name: "Bare Metal",
                            id: "459d-buud99-pslc6789"
                        },
                    ]
                }
            ]
        }
    ]
}

export default CLASSIC_INFRASTRUCTURE;