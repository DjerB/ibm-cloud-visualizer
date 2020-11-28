const PUBLIC_GATEWAYS = {
    public_gateways: [
      {
        created_at: '2019-01-27T06:47:20Z',
        floating_ip: {
          address: '192.0.2.2',
          crn: 'crn:[...]',
          href: 'https://us-south.iaas.cloud.ibm.com/v1/floating_ips/ad0cded3-53a3-4d4a-9809-8c59b50d2b80',
          id: 'ad0cded3-53a3-4d4a-9809-8c59b50d2b80',
          name: 'my-floating-ip-1'
        },
        href: 'https://us-south.iaas.cloud.ibm.com/v1/public_gateways/ba1b3bf9-27ab-498d-8aac-c30b09b5555b',
        id: 'f94a91c7-95db-42f2-9949-93a7e8fb63fb',
        name: 'my-public-gateway-1',
        status: 'available',
        vpc: {
          crn: 'crn:[...]',
          href: 'https://us-south.iaas.cloud.ibm.com/v1/vpcs/f64efe74-a5a2-45c7-b37d-5071d2dd6339',
            id: '882a7764-5f0e-43b5-b276-0d1c39189488',
            name: 'my-vpc-1',
        },
        zone: {
          href: 'https://us-south.iaas.cloud.ibm.com/v1/regions/us-south/zones/us-south-1',
          name: 'us-south-1'
        }
      },
      /* {
        created_at: '2019-01-28T06:47:20Z',
        floating_ip: {
          address: '192.0.2.2',
          crn: 'crn:[...]',
          href: 'https://us-south.iaas.cloud.ibm.com/v1/floating_ips/ad0cded3-53a3-4d4a-9809-8c59b50d2b80',
          id: 'f5380e82-cba3-4efa-b17c-ef0993936e05',
          name: 'my-floating-ip-1'
        },
        href: 'https://us-south.iaas.cloud.ibm.com/v1/public_gateways/e2928e82-e23f-4f31-92b3-5c154e58da09',
        id: 'ec132615-75a5-417b-a720-dec1d27b22ff',
        name: 'my-public-gateway-2',
        status: 'available',
        vpc: {
          crn: 'crn:[...]',
          href: 'https://us-south.iaas.cloud.ibm.com/v1/vpcs/a0819609-0997-4f92-9409-86c95ddf59d3',
          id: 'a0819609-0997-4f92-9409-86c95ddf59d3',
          name: 'my-vpc-1'
        },
        zone: {
          href: 'https://us-south.iaas.cloud.ibm.com/v1/regions/us-south/zones/us-south-1',
          name: 'us-south-1'
        }
      } */
    ]
}

export default PUBLIC_GATEWAYS;