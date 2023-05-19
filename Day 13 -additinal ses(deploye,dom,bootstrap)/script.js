
let data = [
    {Sno:1,Name:'c',Mark:80,Result:'pass'},
    {Sno:2,Name:'c++',Mark:60,Result:'pass'},
    {Sno:3,Name:'Java',Mark:70,Result:'pass'},
    {Sno:4,Name:'DS',Mark:60,Result:'pass'}
]



let container = document.getElementById('container');

let table = document.createElement('table');

let tableheader = Object.keys(data[0]);

let tableheaderrow = document.createElement('tr');

tableheader.forEach(heading=>{
    let th = document.createElement('th');
    th.textContent=heading;
    tableheaderrow.appendChild(th);
})
table.appendChild(tableheaderrow);

data.forEach(Obt=>{
    let tr = document.createElement('tr');

    Object.values(Obt).forEach(values=>{

        let td = document.createElement('td');

        td.textContent=values;

        tr.appendChild(td);
    });

    table.appendChild(tr);
});



container.appendChild(table);

table.classList.add('table','table-info','table-bordered');