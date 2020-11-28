const VPN_GATEWAYS = {
    vpn_gateways: [
      {
        connections: {
          href: 'https://us-south.iaas.cloud.ibm.com/v1/vpn_gateways/bb7baa8f-e4e2-45f5-9286-aac4139d5e78/connections/9736b5a9-0244-475b-a008-ef75a4d72e67',
          id: '9736b5a9-0244-475b-a008-ef75a4d72e67',
          name: 'my-vpn-connection',
          resource_type: 'vpn_gateway_connection'
        },
        created_at: '2018-12-13T19:50:40.740442Z',
        crn: 'crn:[...]',
        href: 'https://us-south.iaas.cloud.ibm.com/v1/vpn_gateways/bb7baa8f-e4e2-45f5-9286-aac4139d5e78',
        id: 'bb7baa8f-e4e2-45f5-9286-aac4139d5e78',
        members: [
          {
            public_ip: {
              address: '0.0.0.0'
            },
            role: 'active',
            status: 'pending'
          },
          {
            public_ip: {
              address: '0.0.0.0'
            },
            role: 'standby',
            status: 'pending'
          }
        ],
        mode: 'policy',
        name: 'my-vpn-gateway-1',
        resource_group: {
          href: 'https://resource-manager.bluemix.net/v1/resource_groups/2093bc307ba540aabeea706937a26df7',
          id: '2093bc307ba540aabeea706937a26df7'
        },
        resource_type: 'vpn_gateway',
        status: 'pending',
        subnet: {
          href: 'https://us-south.iaas.cloud.ibm.com/v1/subnets/2d746293-8d39-4123-a966-cdb2ec50e7ba',
          id: '2d746293-8d39-4123-a966-cdb2ec50e7ba',
          name: 'my-subnet-1',
          resource_type: 'subnet'
        }
      },
      {
        connections: {
          href: 'https://us-south.iaas.cloud.ibm.com/v1/vpn_gateways/a7d258d5-be1e-491d-83db-526d8d9a2ce9/connections/b67efb2c-bd17-457d-be8e-7b46404062dc',
          id: 'b67efb2c-bd17-457d-be8e-7b46404062dc',
          name: 'my-vpn-connection',
          resource_type: 'vpn_gateway_connection'
        },
        created_at: '2018-12-13T19:38:05.70368Z',
        crn: 'crn:[...]',
        href: 'https://us-south.iaas.cloud.ibm.com/v1/vpn_gateways/a7d258d5-be1e-491d-83db-526d8d9a2ce9',
        id: 'a7d258d5-be1e-491d-83db-526d8d9a2ce9',
        members: [
          {
            public_ip: {
              address: '0.0.0.0'
            },
            role: 'active',
            status: 'pending'
          },
          {
            public_ip: {
              address: '0.0.0.0'
            },
            role: 'standby',
            status: 'pending'
          }
        ],
        mode: 'route',
        name: 'my-vpn-gateway-2',
        resource_group: {
          href: 'https://resource-manager.bluemix.net/v1/resource_groups/2093bc307ba540aabeea706937a26df7',
          id: '2093bc307ba540aabeea706937a26df7'
        },
        resource_type: 'vpn_gateway',
        status: 'pending',
        subnet: {
          href: 'https://us-south.iaas.cloud.ibm.com/v1/subnets/2d746293-8d39-4123-a966-cdb2ec50e7ba',
          id: '2d746293-8d39-4123-a966-cdb2ec50e7ba',
          name: 'my-subnet-1',
          resource_type: 'subnet'
        }
      }
    ]
}

export default VPN_GATEWAYS;