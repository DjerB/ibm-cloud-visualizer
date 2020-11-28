export const DATA = [
    {
        type: "single_zone",
        location: "Paris",
        title: "par01",
        latitude: 48.856614,
        longitude: 2.352222,
        resources: [
            {
                name: "92",
                type: "Redis",
                keywords: "Redis 92"
            },
            {
                name: "82",
                type: "CDN",
                keywords: "CDN Content Delivery Network 82"
            },
            {
                name: "85",
                type: "VM",
                keywords: "VM Virtual Machine 85"
            },
        ]
    },
    {
        type: "single_zone",
        location: "Washington, D.C.",
        title: "wdc04",
        latitude: 38.9101,
        longitude: -77.0147,
        resources: [
            {
                name: "Elementary",
                type: "Watson",
                keywords: "Watson Elementary"
            },
            {
                name: "my-sub",
                type: "Subnet",
                keywords: "Subnet my-sub"
            },
        ]
    },
    {
        type: "single_zone",
        location: "Lisbonne",
        title: "lis04",
        latitude: 38.7077507,
        longitude: -9.1365919,
        resources: [
            {
                name: "Elementary",
                type: "Watson",
                keywords: "Watson Elementary"
            },
            {
                name: "my-sub",
                type: "Subnet",
                keywords: "Subnet my-sub"
            },
        ]
    },
    {
        type: "single_zone",
        location: "Melbourne",
        title: "mel04",
        latitude: -37.8142176,
        longitude: 144.9631608,
        resources: [
            {
                name: "Elementary",
                type: "Watson",
                keywords: "Watson Elementary"
            },
            {
                name: "my-sub",
                type: "Subnet",
                keywords: "Subnet my-sub"
            },
        ]
    },
    {
        type: "multi_zone",
        location: "Francfort",
        latitude: 50.1106444,
        longitude: 8.6820917,
        zones: [
            {
                title: "fra02",
                resources: [
                    /* {
                        name: "my-vpc",
                        type: "VPC",
                        keywords: "VPC Virtual Private Cloud my-vpc"
                    },
                    {
                        name: "my-vpn",
                        type: "VPN",
                        keywords: "VPN Virtual Private Network my-vpn"
                    }, */
                    {
                        name: "kub1",
                        type: "Kubernetes",
                        keywords: "Kubernetes kub1"
                    },
                    {
                        name: "kub2",
                        type: "Kubernetes",
                        keywords: "Kubernetes kub2"
                    },
                ]
            },
            {
                title: "fra04",
                resources: [
                    {
                        name: "my-vpc-2",
                        type: "VPC",
                        keywords: "VPC Virtual Private Cloud my-vpc-2"
                    },
                    {
                        name: "my-vpn-2",
                        type: "VPN",
                        keywords: "VPN Virtual Private Network my-vpn-2"
                    },
                    {
                        name: "kub8",
                        type: "Kubernetes",
                        keywords: "Kubernetes kub8"
                    },
                    {
                        name: "kub20",
                        type: "Kubernetes",
                        keywords: "Kubernetes kub20"
                    },
                ]
            }
        ],
    },
    {
        type: "single_zone",
        location: "Montreal",
        title: "mon01",
        latitude: 45.4972159,
        longitude: -73.6103642,
        resources: [
            {
                name: "cand-1",
                type: "Cloudant",
                keywords: "Cloudant cand-1"
            },
            {
                name: "my-vpn-10",
                type: "VPN",
                keywords: "VPN Virtual Private Network my-vpn-10"
            },
            {
                name: "kub9",
                type: "Kubernetes",
                keywords: "Kubernetes kub9"
            },
        ]
    },
    {
        type: "multi_zone",
        location: "Tokyo",
        latitude: 35.6828387,
        longitude: 139.7594549,
        zones: [
            {
                title: "tok02",
                resources: [
                    {
                        name: "my-vpc",
                        type: "VPC",
                        keywords: "VPC Virtual Private Cloud my-vpc"
                    },
                    {
                        name: "my-vpn",
                        type: "VPN",
                        keywords: "VPN Virtual Private Network my-vpn"
                    },
                    {
                        name: "kub1",
                        type: "Kubernetes",
                        keywords: "Kubernetes kub1"
                    },
                    {
                        name: "kub2",
                        type: "Kubernetes",
                        keywords: "Kubernetes kub2"
                    },
                ]
            },
            {
                title: "tok04",
                resources: [
                    {
                        name: "my-vpc-2",
                        type: "VPC",
                        keywords: "VPC Virtual Private Cloud my-vpc-2"
                    },
                    {
                        name: "my-vpn-2",
                        type: "VPN",
                        keywords: "VPN Virtual Private Network my-vpn-2"
                    },
                    {
                        name: "kub8",
                        type: "Kubernetes",
                        keywords: "Kubernetes kub8"
                    },
                    {
                        name: "kub20",
                        type: "Kubernetes",
                        keywords: "Kubernetes kub20"
                    },
                ]
            },
            {
                title: "tok05",
                resources: [
                    {
                        name: "my-vpc-5",
                        type: "VPC",
                        keywords: "VPC Virtual Private Cloud my-vpc-5"
                    },
                    {
                        name: "my-vpn-27",
                        type: "VPN",
                        keywords: "VPN Virtual Private Network my-vpn-27"
                    },
                    {
                        name: "kub2",
                        type: "Kubernetes",
                        keywords: "Kubernetes kub2"
                    },
                    {
                        name: "kub30",
                        type: "Kubernetes",
                        keywords: "Kubernetes kub30"
                    },
                ]
            }
        ],
    },
    {
        type: "single_zone",
        location: "Sao Paulo",
        title: "sao01",
        latitude: -23.5506507,
        longitude: -46.6333824,
        resources: [
            {
                name: "cand-19",
                type: "Cloudant",
                keywords: "Cloudant cand-19"
            },
            {
                name: "my-vpn-11",
                type: "VPN",
                keywords: "VPN Virtual Private Network my-vpn-11"
            },
            {
                name: "kub90",
                type: "Kubernetes",
                keywords: "Kubernetes kub90"
            },
        ]
    },
    {
        type: "single_zone",
        location: "New Delhi",
        title: "nd01",
        latitude: 28.6138954,
        longitude: 77.2090057,
        resources: [
            {
                name: "cand-19",
                type: "Cloudant",
                keywords: "Cloudant cand-19"
            },
            {
                name: "my-vpn-11",
                type: "VPN",
                keywords: "VPN Virtual Private Network my-vpn-11"
            },
            {
                name: "kub90",
                type: "Kubernetes",
                keywords: "Kubernetes kub90"
            },
        ]
    },
    {
        type: "single_zone",
        location: "The Cap",
        title: "cap01",
        latitude: -33.928992,
        longitude: 18.417396,
        resources: [
            {
                name: "cand-19",
                type: "Cloudant",
                keywords: "Cloudant cand-19"
            },
            {
                name: "my-vpn-11",
                type: "VPN",
                keywords: "VPN Virtual Private Network my-vpn-11"
            },
            {
                name: "kub90",
                type: "Kubernetes",
                keywords: "Kubernetes kub90"
            },
        ]
    },
    {
        type: "multi_zone",
        location: "Cairo",
        latitude: 30.0443879,
        longitude: 31.2357257,
        zones: [
            {
                title: "cai01",
                resources: [
                    {
                        name: "my-vpc",
                        type: "VPC",
                        keywords: "VPC Virtual Private Cloud my-vpc"
                    },
                    {
                        name: "my-vpn",
                        type: "VPN",
                        keywords: "VPN Virtual Private Network my-vpn"
                    },
                    {
                        name: "kub1",
                        type: "Kubernetes",
                        keywords: "Kubernetes kub1"
                    },
                    {
                        name: "kub2",
                        type: "Kubernetes",
                        keywords: "Kubernetes kub2"
                    },
                ]
            },
            {
                title: "cai02",
                resources: [
                    {
                        name: "my-vpc-2",
                        type: "VPC",
                        keywords: "VPC Virtual Private Cloud my-vpc-2"
                    },
                    {
                        name: "my-vpn-2",
                        type: "VPN",
                        keywords: "VPN Virtual Private Network my-vpn-2"
                    },
                    {
                        name: "kub8",
                        type: "Kubernetes",
                        keywords: "Kubernetes kub8"
                    },
                    {
                        name: "kub20",
                        type: "Kubernetes",
                        keywords: "Kubernetes kub20"
                    },
                ]
            },
            {
                title: "cai04",
                resources: [
                    {
                        name: "my-vpc-5",
                        type: "VPC",
                        keywords: "VPC Virtual Private Cloud my-vpc-5"
                    },
                    {
                        name: "my-vpn-27",
                        type: "VPN",
                        keywords: "VPN Virtual Private Network my-vpn-27"
                    },
                    {
                        name: "kub2",
                        type: "Kubernetes",
                        keywords: "Kubernetes kub2"
                    },
                    {
                        name: "kub30",
                        type: "Kubernetes",
                        keywords: "Kubernetes kub30"
                    },
                ]
            }
        ],
    },
    {
        type: "multi_zone",
        location: "Oslo",
        latitude: 59.9133301,
        longitude: 10.7389701,
        zones: [
            {
                title: "osl01",
                resources: [
                    {
                        name: "my-vpc",
                        type: "VPC",
                        keywords: "VPC Virtual Private Cloud my-vpc"
                    },
                    {
                        name: "my-vpn",
                        type: "VPN",
                        keywords: "VPN Virtual Private Network my-vpn"
                    },
                    {
                        name: "kub1",
                        type: "Kubernetes",
                        keywords: "Kubernetes kub1"
                    },
                    {
                        name: "kub2",
                        type: "Kubernetes",
                        keywords: "Kubernetes kub2"
                    },
                ]
            },
            {
                title: "osl02",
                resources: [
                    {
                        name: "my-vpc-2",
                        type: "VPC",
                        keywords: "VPC Virtual Private Cloud my-vpc-2"
                    },
                    {
                        name: "my-vpn-2",
                        type: "VPN",
                        keywords: "VPN Virtual Private Network my-vpn-2"
                    },
                    {
                        name: "kub8",
                        type: "Kubernetes",
                        keywords: "Kubernetes kub8"
                    },
                    {
                        name: "kub20",
                        type: "Kubernetes",
                        keywords: "Kubernetes kub20"
                    },
                ]
            },
            {
                title: "osl04",
                resources: [
                    {
                        name: "my-vpc-5",
                        type: "VPC",
                        keywords: "VPC Virtual Private Cloud my-vpc-5"
                    },
                    {
                        name: "my-vpn-27",
                        type: "VPN",
                        keywords: "VPN Virtual Private Network my-vpn-27"
                    },
                    {
                        name: "kub2",
                        type: "Kubernetes",
                        keywords: "Kubernetes kub2"
                    },
                    {
                        name: "kub30",
                        type: "Kubernetes",
                        keywords: "Kubernetes kub30"
                    },
                ]
            }
        ],
    },
]