const resource_names = ["VM ", "Kubernetes", "CDN", "VPC", "MongoDB", "Redis", "Watson"];
const platform_roles = ["Admin", "Editor", "Operator", "Viewer"];
const service_roles = ["Manager", "Reader", "Writer"];

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const getRandomItems = (arr, n) => {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

export const generate_resources = () => {
    let resources = {};
    const nodes = GRAPH.filter((element) => element.data.id !== undefined && element.data.id !== null);

    nodes.forEach((node) => {
        const id = node.data.id;
        const nb_resources = getRandomNumber(1, 4);
        const node_resources = getRandomItems(resource_names, nb_resources);

        let node_data = [];

        node_resources.forEach((node_resource) => {
            let node_resource_details = {};
            node_resource_details.resource_id = node_resource + " " + getRandomNumber(1, 100);
            node_resource_details.platform_role = platform_roles[getRandomNumber(0, platform_roles.length - 1)];
            node_resource_details.service_role = service_roles[getRandomNumber(0, service_roles.length - 1)];
            
            node_data.push(node_resource_details);
        });

        resources[id] = node_data;
    });

    return resources;
}

export const GRAPH = [
    // enterprise
    { data: { id: 'enterprise', label: 'Enterprise', owner: "root@ent.com" }, classes: 'root' },
    // Group 1
    { data: { id: 'group_1', label: 'Group 1', owner: "root@ent.com" },  classes: 'group' },
    { data: { id: 'account_1', label: 'Account 1', owner: "employee_1@ent.com" },  classes: 'account' },
    { data: { id: 'account_2', label: 'Account 2', owner: "employee_2@ent.com" },  classes: 'account' },
    { data: { id: 'account_3', label: 'Account 3', owner: "employee_3@ent.com" },  classes: 'account' },
    { data: { id: 'serviceId_1', label: 'ServiceID 1', owner: "employee_3@ent.com" },  classes: 'serviceId' },
    // Group 2
    { data: { id: 'group_2', label: 'Group 2', owner: "root@ent.com" },  classes: 'group' },
    { data: { id: 'account_4', label: 'Account 4', owner: "employee_4@ent.com" },  classes: 'account' },
    { data: { id: 'account_5', label: 'Account 5', owner: "employee_5@ent.com" },  classes: 'account' },
    { data: { id: 'account_6', label: 'Account 6', owner: "employee_6@ent.com" },  classes: 'account' },
    // Group 3
    { data: { id: 'group_3', label: 'Group 3', owner: "root@ent.com" },  classes: 'group' },
    { data: { id: 'account_7', label: 'Account 7', owner: "employee_7@ent.com" },  classes: 'account' },
    { data: { id: 'account_8', label: 'Account 8', owner: "employee_8@ent.com" },  classes: 'account' },
    { data: { id: 'account_9', label: 'Account 9', owner: "employee_9@ent.com" },  classes: 'account' },
    // Group 4
    { data: { id: 'group_4', label: 'Group 4', owner: "root@ent.com" },  classes: 'group' },
    { data: { id: 'account_10', label: 'Account 10', owner: "employee_10@ent.com" },  classes: 'account' },
    { data: { id: 'account_11', label: 'Account 11', owner: "employee_11@ent.com" },  classes: 'account' },
    // Group 5
    { data: { id: 'group_5', label: 'Group 5', owner: "root@ent.com" },  classes: 'group' },
    { data: { id: 'account_12', label: 'Account 12', owner: "employee_12@ent.com" },  classes: 'account' },
    { data: { id: 'account_13', label: 'Account 13', owner: "employee_13@ent.com" },  classes: 'account' },
    // Group 5
    { data: { id: 'group_6', label: 'Group 6', owner: "root@ent.com" },  classes: 'group' },
    { data: { id: 'account_14', label: 'Account 14', owner: "employee_14@ent.com" },  classes: 'account' },
    // enterprise Edges
    { data: { source: 'enterprise', target: 'group_1', label: 'Edge from Enterprise to Group_1' } },
    { data: { source: 'enterprise', target: 'group_2', label: 'Edge from Enterprise to Group_2' } },
    { data: { source: 'enterprise', target: 'group_3', label: 'Edge from Enterprise to Group_3' } },
    { data: { source: 'enterprise', target: 'group_4', label: 'Edge from Enterprise to Group_4' } },
    { data: { source: 'enterprise', target: 'group_5', label: 'Edge from Enterprise to Group_5' } },
    { data: { source: 'enterprise', target: 'group_6', label: 'Edge from Enterprise to Group_6' } },
    // Edges
    { data: { source: 'group_1', target: 'account_1', label: 'Edge from Group_1 to Account_1' } },
    { data: { source: 'group_1', target: 'serviceId_1', label: 'Edge from Group_1 to ServiceId_1' } },
    { data: { source: 'group_1', target: 'account_2', label: 'Edge from Group_1 to Account_2' } },
    { data: { source: 'group_1', target: 'account_3', label: 'Edge from Group_1 to Account_3' } },
    { data: { source: 'group_2', target: 'account_4', label: 'Edge from Group_2 to Account_4' } },
    { data: { source: 'group_2', target: 'account_5', label: 'Edge from Group_2 to Account_5' } },
    { data: { source: 'group_2', target: 'account_6', label: 'Edge from Group_2 to Account_6' } },
    { data: { source: 'group_3', target: 'account_1', label: 'Edge from Group_3 to Account_1' } },
    { data: { source: 'group_3', target: 'account_7', label: 'Edge from Group_3 to Account_7' } },
    { data: { source: 'group_3', target: 'account_8', label: 'Edge from Group_3 to Account_8' } },
    { data: { source: 'group_3', target: 'account_9', label: 'Edge from Group_3 to Account_9' } },
    { data: { source: 'group_4', target: 'account_7', label: 'Edge from Group_4 to Account_7' } },
    { data: { source: 'group_4', target: 'account_10', label: 'Edge from Group_4 to Account_10' } },
    { data: { source: 'group_4', target: 'account_11', label: 'Edge from Group_4 to Account_11' } },
    { data: { source: 'group_5', target: 'account_11', label: 'Edge from Group_5 to Account_11' } },
    { data: { source: 'group_5', target: 'account_12', label: 'Edge from Group_5 to Account_12' } },
    { data: { source: 'group_5', target: 'account_13', label: 'Edge from Group_5 to Account_13' } },
    { data: { source: 'group_6', target: 'account_13', label: 'Edge from Group_6 to Account_13' } },
    { data: { source: 'group_6', target: 'account_14', label: 'Edge from Group_6 to Account_14' } },
    { data: { source: 'group_6', target: 'account_5', label: 'Edge from Group_6 to Account_5' } },
];