// Define the Person interface
    interface Person {
        id: number;
        name: string;
        birthdate: string;
        children: number;
        country: string;
        can_program: boolean;
    }

    // Get the randomized data here and transform it into an array in a Javascript file
    const people: Person[] = [
        {
            id: 1,
            name: "Humfried Cohen",
            birthdate: "9/11/1992",
            children: 5,
            country: "Sweden",
            can_program: true
        },
        {
            id: 2,
            name: "Abramo Jesteco",
            birthdate: "7/13/1951",
            children: 5,
            country: "Russia",
            can_program: true
        },
        {
            id: 3,
            name: "Marena Matej",
            birthdate: "12/2/1997",
            children: 0,
            country: "China",
            can_program: false
        },
        {
            id: 4,
            name: "Matthias Bertrand",
            birthdate: "10/5/1950",
            children: 0,
            country: "China",
            can_program: true
        },
        {
            id: 5,
            name: "Jamie Gong",
            birthdate: "9/6/1964",
            children: 4,
            country: "Brazil",
            can_program: true
        },
        {
            id: 6,
            name: "Elvira Robjohns",
            birthdate: "5/10/1957",
            children: 1,
            country: "Russia",
            can_program: true
        },
        {
            id: 7,
            name: "Phip Champneys",
            birthdate: "9/18/1991",
            children: 3,
            country: "France",
            can_program: false
        },
        {
            id: 8,
            name: "Whitaker Sauven",
            birthdate: "3/25/1975",
            children: 0,
            country: "Indonesia",
            can_program: true
        },
        {
            id: 9,
            name: "Marcus Flisher",
            birthdate: "11/27/1955",
            children: 1,
            country: "Indonesia",
            can_program: true
        },
        {
            id: 10,
            name: "Babette Surplice",
            birthdate: "5/28/1969",
            children: 5,
            country: "Philippines",
            can_program: true
        }
    ];

    // Create a TypeScript file that, using console.log(): Outputs how many children all people have, in total (Ex.: Bia has 2 kids, Paul has 3, so the total 5)
    // Calculate total children
    const totalChildren = people.reduce((sum, person) => sum + person.children, 0);

    // Log the result
    console.log(`The total number of children for all people is: ${totalChildren}`);
}
// Outputs one string per person formatted as such: name: Age Output all properties of all people using for…in Ex.: name: Freddy McCready Birth Date:  7/1/1987 Children: 3 Country: Australia Can program: Yes

