var pessoas = []
var element = document.querySelector(".family");
var include = document.getElementById('name')


function addPerson(name) {

    var pessoa = { nome: name, filhos: [] }

    pessoas.push(pessoa)

    element.innerHTML +=
    (
    `
    <tr style="max-widht: 300px; display: inline-block; text-align: center; margin-bottom:10px;">
        <td style="text-align:center; width: 200px; background-color: rgb(176, 173, 173)">
            ${pessoa.nome}
        </td>

        <td style="text-align:center; width: 100px; background-color: rgb(176, 173, 173)">
            <button type="button"  onclick="removePerson(this)"> Remover</button>
        </td>

        <td style="text-align:center; display: inline-block;">
            <button type="button" onclick="addChildPerson(this)"> Adicionar Filho</button>
        </td>
    </tr>
    `
    )
    
    callJson();
    return pessoa;
}

function addChildPerson(pessoa) {
    
    var sonName = prompt("Digite o nome do filho: ");
    var closestTr = pessoa.closest('tr');
    var array = Array.from(element.rows);
    var i = array.indexOf(closestTr);

    pessoas[i].filhos.push(sonName)

    var table = document.createElement('table'); 
    var td = document.createElement('td');
    td.appendChild(table)
    closestTr.insertCell(2).before(td) 

    table.innerHTML += 
    `<tr>
        <td style=" background-color: lightgray; width: 200px;">
            ${sonName}
        </td>
        <td style=" background-color: lightgray; width: 100px;">
            <button type="button" onclick="removeSon(this)"> Remover Filho</button>
        </td>
    </tr>`;

    closestTr.cells[2].style.cssText = 'display: flex; justify-content: center;'

    callJson();
}

function removePerson(removeButton) {

    var closestTr = removeButton.closest('tr');
    
    var array = Array.from(element.rows);
    var i = array.indexOf(closestTr);
    
    pessoas.splice(i, 1)
    
    element.rows[i].remove();

    callJson();
}

function removeSon(removeChildButton) {
    
    var closestTable = removeChildButton.closest('table');
    var closestTr = removeChildButton.closest('tr');
    var closestFather = closestTable.closest('tr')
    var closestFatherarray = Array.from(element.rows)
    var j = closestFatherarray.indexOf(closestFather)

    var array = Array.from(closestTable.rows);
    var i = array.indexOf(closestTr);
    
    console.log(i, 'esse aqui amigo')

    pessoas[j].filhos.splice(i, 1)
    
    closestTable.remove();

    callJson()
}

function callJson(){

    var textArea = document.getElementById('TextArea')

    textArea.value = JSON.stringify(pessoas)
}

console.log(include.value)

// var Joao = addPerson('Joao')
// var Will = addPerson('Will')
// var Rena = addPerson('Rena')

console.log(JSON.stringify(pessoas))



