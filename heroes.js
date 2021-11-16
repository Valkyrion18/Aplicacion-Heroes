let div = document.getElementById('divTable');

let heroes = [
    {
        id: 1,
        superHero: 'Spider Man',
        team: 'Avengers',
        publisher: 'Marvel Comics',
    },
    {
        id: 2,
        superHero: 'Iron man',
        team: 'Avengers',
        publisher: 'Marvel Comics',
    },
    {
        id: 3,
        superHero: 'Hulk',
        team: 'Avengers',
        publisher: 'Marvel Comics',
    },
    {
        id: 4,
        superHero: 'Wolverin',
        team: 'X-men',
        publisher: 'Marvel Comics',
    },
    {
        id: 5,
        superHero: 'Capitan America',
        team: 'Avengers',
        publisher: 'Marvel Comics',

    }

]

function pintarTable(heroes) {
    let myTable = `<table id="table-card">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>SuperHero</th>
                                <th>Team</th>
                                <th>Publisher</th>
                            </tr>
                        </thead>
                        <tbody>`;
    div.innerHTML = myTable;
    heroes.forEach(heroe => {
        myTable += `<tr>
                        <td>${heroe.id}</td>
                        <td>${heroe.superHero}</td>
                        <td>${heroe.team}</td>
                        <td>${heroe.publisher}</td>
                    </tr>
        `
    });
    myTable += `</tbody>
                </table>`
    div.innerHTML = myTable;
}

pintarTable(heroes)
