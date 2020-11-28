const SUBNETS = {
    subnets: [
      // ZONE 1
      {
        available_ipv4_address_count: 251,
        created_at: '2019-01-28T11:59:46Z',
        href: 'https://us-south.iaas.cloud.ibm.com/v1/subnets/8722d01c-9c78-4555-82b5-53ad1266f959',
        id: '8722d01c-9c78-4555-82b5-53ad1266f959',
        ip_version: 'ipv4',
        ipv4_cidr_block: '10.0.1.0/24',
        name: 'my-subnet-1',
        network_acl: {
          href: 'https://us-south.iaas.cloud.ibm.com/v1/network_acls/3217cb8b-5368-452a-9399-a84f14fb539d',
          id: '3217cb8b-5368-452a-9399-a84f14fb539d',
          name: 'my-network-acl'
        },
        status: 'pending',
        total_ipv4_address_count: 256,
        vpc: {
          crn: 'crn:[...]',
          href: 'https://us-south.iaas.cloud.ibm.com/v1/vpcs/f64efe74-a5a2-45c7-b37d-5071d2dd6339',
            id: '882a7764-5f0e-43b5-b276-0d1c39189488',
            name: 'my-vpc-1',
        },
        zone: {
          href: 'https://us-south.iaas.cloud.ibm.com/v1/regions/us-south/zones/us-south-1',
          name: 'us-south-1'
        },
        public_gateway: {
            href: 'https://us-south.iaas.cloud.ibm.com/v1/public_gateways/ba1b3bf9-27ab-498d-8aac-c30b09b5555b',
            id: 'f94a91c7-95db-42f2-9949-93a7e8fb63fb',
            name: 'my-public-gateway-1',
            resource_type: "public_gateway"
        }
      },
      {
        available_ipv4_address_count: 251,
        created_at: '2019-01-29T10:53:46Z',
        href: 'https://us-south.iaas.cloud.ibm.com/v1/subnets/10a4a88a-f20f-4d3e-9582-499ea21bbaf3',
        id: '10a4a88a-f20f-4d3e-9582-499ea21bbaf3',
        ip_version: 'ipv4',
        ipv4_cidr_block: '10.0.2.0/24',
        name: 'my-subnet-2',
        network_acl: {
          href: 'https://us-south.iaas.cloud.ibm.com/v1/network_acls/jknckfn98b-5368-452a-9399-a84f14fb539d',
          id: 'jknckfn98b-5368-452a-9399-a84f14fb539d',
          name: 'my-network-acl-2'
        },
        status: 'pending',
        total_ipv4_address_count: 256,
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


      
      // ZONE 2
      {
        available_ipv4_address_count: 251,
        created_at: '2019-01-28T11:59:46Z',
        href: 'https://us-south.iaas.cloud.ibm.com/v1/subnets/3890d01c-9c78-4555-82b5-53ad1266f959',
        id: '3890d01c-9c78-4555-82b5-53ad1266f959',
        ip_version: 'ipv4',
        ipv4_cidr_block: '10.0.1.0/24',
        name: 'my-subnet-3',
        network_acl: {
          href: 'https://us-south.iaas.cloud.ibm.com/v1/network_acls/3217cb8b-5368-452a-9399-a84f14fb539d',
          id: '3217cb8b-5368-452a-9399-a84f14fb539d',
          name: 'my-network-acl'
        },
        status: 'pending',
        total_ipv4_address_count: 256,
        vpc: {
          crn: 'crn:[...]',
          href: 'https://us-south.iaas.cloud.ibm.com/v1/vpcs/f64efe74-a5a2-45c7-b37d-5071d2dd6339',
            id: '882a7764-5f0e-43b5-b276-0d1c39189488',
            name: 'my-vpc-1',
        },
        zone: {
          href: 'https://us-south.iaas.cloud.ibm.com/v1/regions/us-south/zones/us-south-2',
          name: 'us-south-2'
        }
      },
      {
        available_ipv4_address_count: 251,
        created_at: '2019-01-29T10:53:46Z',
        href: 'https://us-south.iaas.cloud.ibm.com/v1/subnets/cjdncidia88a-f20f-4d3e-9582-499ea21bbaf3',
        id: 'cjdncidia88a-f20f-4d3e-9582-499ea21bbaf3',
        ip_version: 'ipv4',
        ipv4_cidr_block: '10.0.2.0/24',
        name: 'my-subnet-4',
        network_acl: {
          href: 'https://us-south.iaas.cloud.ibm.com/v1/network_acls/jknckfn98b-5368-452a-9399-a84f14fb539d',
          id: 'jknckfn98b-5368-452a-9399-a84f14fb539d',
          name: 'my-network-acl-2'
        },
        status: 'pending',
        total_ipv4_address_count: 256,
        vpc: {
            crn: 'crn:[...]',
            href: 'https://us-south.iaas.cloud.ibm.com/v1/vpcs/f64efe74-a5a2-45c7-b37d-5071d2dd6339',
            id: '882a7764-5f0e-43b5-b276-0d1c39189488',
            name: 'my-vpc-1',
        },
        zone: {
          href: 'https://us-south.iaas.cloud.ibm.com/v1/regions/us-south/zones/us-south-2',
          name: 'us-south-2'
        }
      }
    ]
}

export default SUBNETS;