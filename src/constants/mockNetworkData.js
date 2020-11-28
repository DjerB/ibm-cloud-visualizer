export const VPCs = JSON.parse(`{
    "vpcs": [
        { 
            "created_at": "2019-01-25T12:28:30Z", "crn": "crn:[...]", 
            "default_network_acl": { 
                "href": "https://us-south.iaas.cloud.ibm.com/v1/network_acls/013feeda-7a13-4273-8e34-bd3d0619d407", 
                "id": "dcfd9b64-9119-48ea-8697-23f9f5fb6bd6", 
                "name": "my-network-acl-1" 
            }, 
            "href": "https://us-south.iaas.cloud.ibm.com/v1/vpcs/a0819609-0997-4f92-9409-86c95ddf59d3", 
            "id": "a0819609-0997-4f92-9409-86c95ddf59d3", 
            "name": "my-vpc-1", 
            "resource_group": { 
                "href": "https://us-south.iaas.cloud.ibm.com/v1/resource_groups/28bb38f8-4824-463c-a1b9-d04a3b2ab1ac",
                "id": "28bb38f8-4824-463c-a1b9-d04a3b2ab1ac" 
            }, 
            "status": "available" 
        }
    ]
}`);

export const SUBNETS = JSON.parse(`{ 
    "subnets": [ 
        { 
            "available_ipv4_address_count": 251, 
            "created_at": "2019-01-28T11:59:46Z", 
            "href": "https://us-south.iaas.cloud.ibm.com/v1/subnets/8722d01c-9c78-4555-82b5-53ad1266f959", 
            "id": "8722d01c-9c78-4555-82b5-53ad1266f959", 
            "ip_version": "ipv4", 
            "ipv4_cidr_block": "10.0.1.0/24", 
            "name": "my-subnet-1", 
            "network_acl": { 
                "href": "https://us-south.iaas.cloud.ibm.com/v1/network_acls/3217cb8b-5368-452a-9399-a84f14fb539d", 
                "id": "3217cb8b-5368-452a-9399-a84f14fb539d", 
                "name": "my-network-acl" 
            }, 
            "status": "pending", 
            "total_ipv4_address_count": 256, 
            "vpc": { 
                "crn": "crn:[...]", 
                "href": "https://us-south.iaas.cloud.ibm.com/v1/vpcs/a0819609-0997-4f92-9409-86c95ddf59d3", 
                "id": "a0819609-0997-4f92-9409-86c95ddf59d3", 
                "name": "my-vpc" 
            }, 
            "zone": { 
                "href": "https://us-south.iaas.cloud.ibm.com/v1/regions/us-south/zones/us-south-1", 
                "name": "us-south-1" 
            } 
        }, 
        { 
            "available_ipv4_address_count": 251, 
            "created_at": "2019-01-29T10:53:46Z", 
            "href": "https://us-south.iaas.cloud.ibm.com/v1/subnets/10a4a88a-f20f-4d3e-9582-499ea21bbaf3", 
            "id": "10a4a88a-f20f-4d3e-9582-499ea21bbaf3", 
            "ip_version": "ipv4", 
            "ipv4_cidr_block": "10.0.2.0/24", 
            "name": "my-subnet-2", 
            "network_acl": { 
                "href": "https://us-south.iaas.cloud.ibm.com/v1/network_acls/3989cb8b-5368-452a-9399-a84f14fb539d", 
                "id": "3989cb8b-5368-452a-9399-a84f14fb539d", 
                "name": "my-network-acl-2" 
            }, 
            "status": "pending", 
            "total_ipv4_address_count": 256, 
            "vpc": { 
                "crn": "crn:[...]", 
                "href": "https://us-south.iaas.cloud.ibm.com/v1/vpcs/a0819609-0997-4f92-9409-86c95ddf59d3", 
                "id": "a0819609-0997-4f92-9409-86c95ddf59d3", 
                "name": "my-vpc" 
            }, "zone": { 
                "href": "https://us-south.iaas.cloud.ibm.com/v1/regions/us-south/zones/us-south-1", 
                "name": "us-south-1" 
            } 
        },
        { 
            "available_ipv4_address_count": 251, 
            "created_at": "2019-01-28T11:59:46Z", 
            "href": "https://us-south.iaas.cloud.ibm.com/v1/subnets/9022d01c-9c78-4555-82b5-53ad1266f959", 
            "id": "9022d01c-9c78-4555-82b5-53ad1266f959", 
            "ip_version": "ipv4", 
            "ipv4_cidr_block": "10.0.1.0/28", 
            "name": "my-subnet-1", 
            "network_acl": { 
                "href": "https://us-south.iaas.cloud.ibm.com/v1/network_acls/3217cb8b-5368-452a-9399-a84f14fb539d", 
                "id": "3217cb8b-5368-452a-9399-a84f14fb539d", 
                "name": "my-network-acl" 
            }, 
            "status": "pending", 
            "total_ipv4_address_count": 256, 
            "vpc": { 
                "crn": "crn:[...]", 
                "href": "https://us-south.iaas.cloud.ibm.com/v1/vpcs/a0819609-0997-4f92-9409-86c95ddf59d3", 
                "id": "a0819609-0997-4f92-9409-86c95ddf59d3", 
                "name": "my-vpc" 
            }, 
            "zone": { 
                "href": "https://us-east.iaas.cloud.ibm.com/v1/regions/us-east/zones/us-east-1", 
                "name": "us-east-1"
            } 
        }, 
        { 
            "available_ipv4_address_count": 251, 
            "created_at": "2019-01-29T10:53:46Z", 
            "href": "https://us-south.iaas.cloud.ibm.com/v1/subnets/1a67ba88a-f20f-4d3e-9582-499ea21bbaf3", 
            "id": "1a67ba88a-f20f-4d3e-9582-499ea21bbaf3", 
            "ip_version": "ipv4", 
            "ipv4_cidr_block": "10.0.2.0/28", 
            "name": "my-subnet-2", 
            "network_acl": { 
                "href": "https://us-south.iaas.cloud.ibm.com/v1/network_acls/3989cb8b-5368-452a-9399-a84f14fb539d", 
                "id": "3989cb8b-5368-452a-9399-a84f14fb539d", 
                "name": "my-network-acl-2" 
            }, 
            "status": "pending", 
            "total_ipv4_address_count": 256, 
            "vpc": { 
                "crn": "crn:[...]", 
                "href": "https://us-south.iaas.cloud.ibm.com/v1/vpcs/a0819609-0997-4f92-9409-86c95ddf59d3", 
                "id": "a0819609-0997-4f92-9409-86c95ddf59d3", 
                "name": "my-vpc" 
            }, "zone": { 
                "href": "https://us-east.iaas.cloud.ibm.com/v1/regions/us-east/zones/us-east-1", 
                "name": "us-east-1" 
            } 
        }
    ] 
}`);

export const PUBLIC_GATEWAY = JSON.parse(`{
    "created_at": "2019-01-27T06:47:20Z",
    "crn": "crn[...]",
    "floating_ip": {
        "address": "192.0.2.2",
        "crn": "crn:[...]",
        "href": "https://us-south.iaas.cloud.ibm.com/v1/floating_ips/ad0cded3-53a3-4d4a-9809-8c59b50d2b80",
        "id": "ad0cded3-53a3-4d4a-9809-8c59b50d2b80",
        "name": "my-floating-ip"
    },
    "href": "https://us-south.iaas.cloud.ibm.com/v1/public_gateways/d4d3ef82-bebb-446e-bbe4-038bc82f6776",
    "id": "4fd00a61-fe63-4186-81c9-f7253b5c1cd7",
    "name": "my-public-gateway",
    "resource_group": {
        "href": "https://resource-controller.cloud.ibm.com/v2/resource_groups/abc2415acdef478903a1232356789def,",
        "id": "abc2415acdef478903a1232356789def,",
        "name": "default"
    },
    "resource_type": "public_gateway",
    "status": "available",
    "vpc": {
        "crn": "crn[...]",
        "href": "https://us-south.iaas.cloud.ibm.com/v1/vpcs/a0819609-0997-4f92-9409-86c95ddf59d3",
        "id": "a0819609-0997-4f92-9409-86c95ddf59d3",
        "name": "my-vpc"
    },
    "zone": {
        "href": "https://us-south.iaas.cloud.ibm.com/v1/regions/us-south/zones/us-south-1",
        "name": "us-south-1"
    }
}`);

export const RESOURCES = JSON.parse(`{
    "rows_count": 1,
    "next_url": "/v2/resource_instances?next_docid=g1AAAACkeJzLYWBgYMpgTmFQSklKzi9KdUhJMtTLTMrVTSouNjAw1EvOyS9NScwr0ctLLckBqc1jAZIMC4DU____92eBxdycyiQ6O2sOMCQxMLHnZKEaZ0qEcQ8gxv2HG-fo9M_-Asg4-TVZWQCZcDI1&limit=2&account_id=d86af7367f70fba4f306d3c19c7344b2",
    "resources": [
      {
        "id": "crn:v1:bluemix:public:cloud-object-storage:global:a/4329073d16d2f3663f74bfa955259139:8d7af921-b136-4078-9666-081bd8470d94::",
        "guid": "8d7af921-b136-4078-9666-081bd8470d94",
        "url": "/v2/resource_instances/8d7af921-b136-4078-9666-081bd8470d94",
        "created_at": "2018-04-19T00:18:53.302077457Z",
        "updated_at": "2018-04-19T00:18:53.302077457Z",
        "deleted_at": null,
        "created_by": "IBMid-5500093BHN",
        "updated_by": "IBMid-5500093BHN",
        "deleted_by": "",
        "scheduled_reclaim_at": null,
        "restored_at": null,
        "scheduled_reclaim_by": "",
        "restored_by": "",
        "name": "my-instance",
        "region_id": "global",
        "account_id": "4329073d16d2f3663f74bfa955259139",
        "resource_plan_id": "2fdf0c08-2d32-4f46-84b5-32e0c92fffd8",
        "resource_group_id": "0be5ad401ae913d8ff665d92680664ed",
        "resource_group_crn": "crn:v1:bluemix:public:resource-controller::a/4329073d16d2f3663f74bfa955259139::resource-group:0be5ad401ae913d8ff665d92680664ed",
        "target_crn": "crn:v1:bluemix:public:resource-catalog::a/9e16d1fed8aa7e1bd73e7a9d23434a5a::deployment:2fdf0c08-2d32-4f46-84b5-32e0c92fffd8%3Aglobal",
        "crn": "crn:v1:bluemix:public:cloud-object-storage:global:a/4329073d16d2f3663f74bfa955259139:8d7af921-b136-4078-9666-081bd8470d94::",
        "allow_cleanup": true,
        "state": "active",
        "type": "service_instance",
        "resource_id": "dff97f5c-bc5e-4455-b470-411c3edbe49c",
        "dashboard_url": "/objectstorage/crn%3Av1%3Abluemix%3Apublic%3Acloud-object-storage%3Aglobal%3Aa%2F4329073d16d2f3663f74bfa955259139%3A8d7af921-b136-4078-9666-081bd8470d94%3A%3A",
        "last_operation": null,
        "resource_aliases_url": "/v2/resource_instances/8d7af921-b136-4078-9666-081bd8470d94/resource_aliases",
        "resource_bindings_url": "/v2/resource_instances/8d7af921-b136-4078-9666-081bd8470d94/resource_bindings",
        "resource_keys_url": "/v2/resource_instances/8d7af921-b136-4078-9666-081bd8470d94/resource_keys",
        "plan_history": [
          {
            "resource_plan_id": "2fdf0c08-2d32-4f46-84b5-32e0c92fffd8",
            "start_date": "2018-04-19T00:18:53.302077457Z"
          }
        ],
        "migrated": false,
        "controlled_by": ""
      }
    ]
  }`);