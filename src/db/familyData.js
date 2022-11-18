import { v4 as uuid } from 'uuid';
const familyData = {
    id: uuid(),
    name: "Grand Father",
    spouse: "GrandFather's spouse",
    location: "Bhopal",
    birth_yr: "1985",
    addr: "123, Patel Rd. Bhopal",
    items: [
        {
            id: uuid(),
            name: "Daughter 1",
            spouse: "Daughter 1's spouse",
            location: "Surat",
            birth_yr: "1999",
            addr: "123, Patel Rd. Surat",
            items: [],
        },
        {
            id: uuid(),
            name: "Son 1",
            spouse: "Son 1's spouse",
            location: "Pune",
            birth_yr: "2000",
            addr: "123, Patel Rd. Pune",
            items: [{
                id: uuid(),
                name: "Daughter 1",
                spouse: "Daughter 1's spouse",
                location: "Mumbai",
                birth_yr: "2012",
                addr: "123, Patel Rd.Mumbai",
                items: [],
            }]
        },
        {
            id: uuid(),
            name: "Son 1",
            spouse: "Son 1's spouse",
            location: "Mumbai",
            birth_yr: "2000",
            addr: "123, Patel Rd. Mumbai",
            items: [{
                id: uuid(),
                name: "Son 1",
                spouse: "Son 1's spouse",
                location: "Mumbai",
                birth_yr: "2003",
                addr: "123, Patel Rd. Mumbai",
                items: [{
                    id: uuid(),
                    name: "Son 1",
                    spouse: "Son 1's spouse",
                    location: "Banglore",
                    birth_yr: "2022",
                    addr: "123, Patel Rd. Banglore",
                    items: [],
                }]
            }, {
                id: uuid(),
                name: "Son 2",
                spouse: "Son 2's spouse",
                location: "Pune",
                birth_yr: "2002",
                addr: "123, Patel Rd. Pune",
                items: [],
            }
            ]
        }]
}

export { familyData }