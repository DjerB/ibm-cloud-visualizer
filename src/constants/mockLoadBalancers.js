const LOAD_BALANCERS = {
    load_balancers: [
      {
        created_at: '2018-12-16T16:29:30.160929Z',
        crn: 'crn:[...]',
        hostname: '7b6dc78d.lb.appdomain.cloud',
        href: 'https://us-south.iaas.cloud.ibm.com/v1/load_balancers/7b6dc78d-49f3-435f-b767-e05f9affd3ca',
        id: '7b6dc78d-49f3-435f-b767-e05f9affd3ca',
        is_public: true,
        listeners: [
          {
            href: 'https://us-south.iaas.cloud.ibm.com/v1/load_balancers/7b6dc78d-49f3-435f-b767-e05f9affd3ca/listeners/a8433879-cb79-4b62-af8f-7b3329eac465',
            id: 'a8433879-cb79-4b62-af8f-7b3329eac465'
          },
          {
            href: 'https://us-south.iaas.cloud.ibm.com/v1/load_balancers/7b6dc78d-49f3-435f-b767-e05f9affd3ca/listeners/6a034f25-06b4-4cc3-8e3f-6a372616798b',
            id: '6a034f25-06b4-4cc3-8e3f-6a372616798b'
          }
        ],
        name: 'my-load-balancer-1',
        operating_status: 'online',
        pools: [
          {
            href: 'https://us-south.iaas.cloud.ibm.com/v1/load_balancers/7b6dc78d-49f3-435f-b767-e05f9affd3ca/pools/2c431ab3-0151-11e9-a178-22dd3503b06c',
            id: '2c431ab3-0151-11e9-a178-22dd3503b06c',
            name: 'add-prod-servers-http'
          },
          {
            href: 'https://us-south.iaas.cloud.ibm.com/v1/load_balancers/7b6dc78d-49f3-435f-b767-e05f9affd3ca/pools/c3629207-014f-11e9-a178-22dd3503b06c',
            id: 'c3629207-014f-11e9-a178-22dd3503b06c',
            name: 'my-prod-servers-tcp'
          },
          {
            href: 'https://us-south.iaas.cloud.ibm.com/v1/load_balancers/7b6dc78d-49f3-435f-b767-e05f9affd3ca/pools/c35ce451-014f-11e9-a178-22dd3503b06c',
            id: 'c35ce451-014f-11e9-a178-22dd3503b06c',
            name: 'update-prod-servers-http'
          }
        ],
        private_ips: [
          {
            address: '10.0.0.32'
          },
          {
            address: '10.0.0.35'
          }
        ],
        provisioning_status: 'active',
        public_ips: [
          {
            address: '192.0.0.56'
          },
          {
            address: '192.0.0.44'
          }
        ],
        resource_group: {
          id: '6eb23aa499254c66917dc265c374eca9'
        },
        subnets: [
          {
            href: 'https://us-south.iaas.cloud.ibm.com/v1/subnets/3ff9fac4-7989-4c2e-ba7a-fad3bbdfaa96',
            id: '3ff9fac4-7989-4c2e-ba7a-fad3bbdfaa96',
            name: 'subnet-1'
          }
        ]
      },
      {
        created_at: '2018-12-13T18:00:11.896545Z',
        crn: 'crn:[...]',
        hostname: '1bf28ca5.lb.appdomain.cloud',
        href: 'https://us-south.iaas.cloud.ibm.com/v1/load_balancers/1bf28ca5-3037-4b96-b4a0-f22e82eae3db',
        id: '1bf28ca5-3037-4b96-b4a0-f22e82eae3db',
        is_public: true,
        listeners: [
          {
            href: 'https://us-south.iaas.cloud.ibm.com/v1/load_balancers/1bf28ca5-3037-4b96-b4a0-f22e82eae3db/listeners/72cdbc3e-f8ac-4c74-8b91-75a4e6648242',
            id: '72cdbc3e-f8ac-4c74-8b91-75a4e6648242'
          }
        ],
        name: 'my-load-balancer-2',
        operating_status: 'online',
        pools: [
          {
            href: 'https://us-south.iaas.cloud.ibm.com/v1/load_balancers/1bf28ca5-3037-4b96-b4a0-f22e82eae3db/pools/efa7abe9-ff00-11e8-a9c9-5a9d1cc77531',
            id: 'efa7abe9-ff00-11e8-a9c9-5a9d1cc77531',
            name: 'pool-1'
          }
        ],
        private_ips: [
          {
            address: '10.0.0.21'
          },
          {
            address: '10.0.0.41'
          }
        ],
        provisioning_status: 'active',
        public_ips: [
          {
            address: '192.0.0.51'
          },
          {
            address: '192.0.0.55'
          }
        ],
        resource_group: {
          id: '6eb23aa499254c66917dc265c374eca9'
        },
        subnets: [
          {
            href: 'https://us-south.iaas.cloud.ibm.com/v1/subnets/3ff9fac4-7989-4c2e-ba7a-fad3bbdfaa96',
            id: '3ff9fac4-7989-4c2e-ba7a-fad3bbdfaa96',
            name: 'subnet-1'
          }
        ]
      },
      {
        id: '73dcbc1f-ba88-4f15-9d5 b-148c78a506a7'
      }
    ]
}

export default LOAD_BALANCERS;