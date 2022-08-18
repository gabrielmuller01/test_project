var pessoas = []
var element = document.querySelector(".family");
var include = document.getElementById('name')


function addPerson(name) {

    var pessoa = { nome: name, filhos: [] }

    pessoas.push(pessoa)

    element.innerHTML +=
    (
    `
    <tr style="max-widht: 300px; display: inline-block; text-align: center;">
        <td style="text-align:center; width: 200px; background-color: #848482;">
            ${pessoa.nome}
        </td>

        <td style="text-align:center; width: 100px; background-color:#848482;">
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
    closestTr.insertCell(2).appendChild(td) 

    table.innerHTML += 
    `<tr>
        <td style=" background-color: #B6B6B4; width: 200px; text-align: left;">
            ${sonName}
        </td>
        <td style=" background-color: #B6B6B4; widht: 100px">
            <button type="button" onclick="removeSon(this)"> Remover Filho</button>
        </td>
    </tr>`;

    closestTr.cells[2].style.cssText = 'display: flex'

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
    var closestTr = removeChildButton.closest('td');
    
    var closestFather = closestTable.closest('tr')
    var closestFatherarray = Array.from(element.rows)
    var j = closestFatherarray.indexOf(closestFather)

    var array = Array.from(closestTable.rows);
    var i = array.indexOf(closestTr);

    var findFather = removeChildButton.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;

    //console.log(findFather)

    pessoas[j].filhos.splice(i, 1)
    
    findFather.remove();

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



