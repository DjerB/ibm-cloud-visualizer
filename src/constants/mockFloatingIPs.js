const FLOATING_IPS = {
    floating_ips: [
      {
        address: '192.0.2.2',
        created_at: '2019-01-28T12:08:05Z',
        crn: 'crn:[...]',
        href: 'https://us-south.iaas.cloud.ibm.com/v1/floating_ips/4dd1852a-3373-46c0-9240-f9c7f0d0c1a3',
        id: '4dd1852a-3373-46c0-9240-f9c7f0d0c1a3',
        name: 'my-floating-ip-1',
        status: 'pending',
        target: {
          href: 'https://us-south.iaas.cloud.ibm.com/v1/instances/f2a2ab09-0c9e-4b2d-a1cf-7425d1c834b9/network_interfaces/bd5f7dc3-93c7-4d3a-89b4-26c4cc364a2',
          id: 'bd5f7dc3-93c7-4d3a-89b4-26c4cc364a2',
          name: 'my-network-interface-1',
          primary_ipv4_address: '10.0.1.9',
          subnet: {
            href: 'https://us-south.iaas.cloud.ibm.com/v1/subnets/1dfeccef-3ad6-4760-8653-a202bc795db4',
            id: '1dfeccef-3ad6-4760-8653-a202bc795db4',
            name: 'my-subnet-1'
          }
        },
        zone: {
          href: 'https://us-south.iaas.cloud.ibm.com/v1/regions/us-south/zones/us-south-1',
          name: 'us-south-1'
        }
      },
      {
        address: '198.51.100.1',
        created_at: '2019-01-29T12:08:05Z',
        crn: 'crn:[...]',
        href: 'https://us-south.iaas.cloud.ibm.com/v1/floating_ips/64580c28-713a-4cda-9993-53bc6a529bb4',
        id: '64580c28-713a-4cda-9993-53bc6a529bb4',
        name: 'my-floating-ip-2',
        status: 'pending',
        target: {
          href: 'https://us-south.iaas.cloud.ibm.com/v1/instances/f2a2ab09-0c9e-4b2d-a1cf-7425d1c834b9/network_interfaces/bd5f7dc3-93c7-4d3a-89b4-26c4cc364a32',
          id: 'bd5f7dc3-93c7-4d3a-89b4-26c4cc364',
          name: 'my-network-interface-1',
          primary_ipv4_address: '10.0.1.9',
          subnet: {
            href: 'https://us-south.iaas.cloud.ibm.com/v1/subnets/1dfeccef-3ad6-4760-8653-a202bc795db4',
            id: '1dfeccef-3ad6-4760-8653-a202bc795db4',
            name: 'my-subnet-1'
          }
        },
        zone: {
          href: 'https://us-south.iaas.cloud.ibm.com/v1/regions/us-south/zones/us-south-1',
          name: 'us-south-1'
        }
      }
    ]
}

export default FLOATING_IPS;