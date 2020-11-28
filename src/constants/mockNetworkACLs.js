const NETWORK_ACLS = {
    network_acls: [
      {
        created_at: '2019-01-29T06:26:17Z',
        href: 'https://us-south.iaas.cloud.ibm.com/v1/network_acls/e9d38838-7531-4383-bd01-662e10527f29',
        id: 'e9d38838-7531-4383-bd01-662e10527f29',
        name: 'my-network-acl-1',
        rules: [
          {
            action: 'allow',
            created_at: '2019-01-29T06:26:17Z',
            destination: '0.0.0.0/0',
            direction: 'inbound',
            href: 'https://us-south.iaas.cloud.ibm.com/v1/network_acls/3217cb8b-5368-452a-9399-a84f14fb539d/rules/cb19f11d-0e25-4650-a8ab-f4539da563ee',
            id: 'cb19f11d-0e25-4650-a8ab-f4539da563ee',
            ip_version: 'ipv4',
            name: 'my-allow-all-inbound-rule',
            protocol: 'all',
            source: '0.0.0.0/0'
          },
          {
            action: 'allow',
            created_at: '2019-01-29T06:26:17Z',
            destination: '0.0.0.0/0',
            direction: 'outbound',
            href: 'https://us-south.iaas.cloud.ibm.com/v1/network_acls/3217cb8b-5368-452a-9399-a84f14fb539d/rules/2c46afc9-b30a-4453-8897-1096383fb053',
            id: '2c46afc9-b30a-4453-8897-1096383fb053',
            ip_version: 'ipv4',
            name: 'my-allow-all-outbound-rule',
            protocol: 'all',
            source: '0.0.0.0/0'
          }
        ]
      },
      {
        created_at: '2019-01-29T07:21:17Z',
        href: 'https://us-south.iaas.cloud.ibm.com/v1/network_acls/a2ce7c07-7775-4aa6-b0c4-320ad5340f84',
        id: 'a2ce7c07-7775-4aa6-b0c4-320ad5340f84',
        name: 'my-network-acl-2',
        rules: [
          {
            action: 'allow',
            created_at: '2019-01-29T07:21:17Z',
            destination: '0.0.0.0/0',
            direction: 'inbound',
            href: 'https://us-south.iaas.cloud.ibm.com/v1/network_acls/3217cb8b-5368-452a-9399-a84f14fb539d/rules/cb19f11d-0e25-4650-a8ab-f4539da563ee',
            id: 'cb19f11d-0e25-4650-a8ab-f4539da563ee',
            ip_version: 'ipv4',
            name: 'my-allow-all-inbound-rule',
            protocol: 'all',
            source: '0.0.0.0/0'
          },
          {
            action: 'allow',
            created_at: '2019-01-29T07:21:17Z',
            destination: '0.0.0.0/0',
            direction: 'outbound',
            href: 'https://us-south.iaas.cloud.ibm.com/v1/network_acls/3217cb8b-5368-452a-9399-a84f14fb539d/rules/2c46afc9-b30a-4453-8897-1096383fb053',
            id: '2c46afc9-b30a-4453-8897-1096383fb053',
            ip_version: 'ipv4',
            name: 'my-allow-all-outbound-rule',
            protocol: 'all',
            source: '0.0.0.0/0'
          }
        ]
      }
    ]
};

export default NETWORK_ACLS;