import { v4 as uuid } from 'uuid';
const familyData = {
    id: uuid(),
    name: "Great Grand Father",
    items: [
        {
            id: uuid(),
            name: "Daughter 1",
            items: [],
        },
        {
            id: uuid(),
            name: "Son 1",
            items: [{
                id: uuid(),
                name: "Daughter 1",
                items: [],
            }]
        },
        {
            id: uuid(),
            name: "Son 1",
            items: [{
                id: uuid(),
                name: "Son 1",
                items: [{
                    id: uuid(),
                    name: "Son 1",
                    items: [],
                }]
            }, {
                id: uuid(),
                name: "Son 2",
                items: [],
            }
            ]
        }]
}

export { familyData }