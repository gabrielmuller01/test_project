var pessoas = []
var pessoasJSON = {pessoas}
var element = document.querySelector(".family");
var include = document.getElementById('name')

document.onload(callJson())

function addPerson(name) {

    var pessoa = { nome: name, filhos: [] }

    pessoas.push(pessoa)

    element.innerHTML +=
    (
    `
    <tr style="display: inline-block; text-align: center;">
        <td style="text-align:center; width: 201px; background-color: #848482;">
            ${pessoa.nome}
        </td>

        <td style="text-align:center; width: 101px; background-color:#848482;">
            <button type="button"  onclick="removePerson(this)"> Remover</button>
        </td>
        <td style="display: flex; justify-content: center;">
            <table>
                <tbody>

                </tbody>
            </table>
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
    console.log(closestTr.cells[2].children)
    closestTr.cells[2].children[0].children[0].innerHTML += 
    `<tr>
        <td style=" background-color: lightgray; width: 200px;">
            ${sonName}
        </td>
        <td style=" background-color: lightgray; width: 100px;">
            <button type="button" onclick="removeSon(this)"> Remover Filho</button>
        </td>
    </tr>`;
    
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

    var closestTr = removeChildButton.closest('tr');

    var table = removeChildButton.closest('table')

    var paiTr = table.parentNode.parentNode

    var arrayPai = Array.from(element.rows);

    var p = arrayPai.indexOf(paiTr)

    var array = Array.from(table.rows);

    var i = array.indexOf(closestTr);
    
    table.rows[i].remove();

    pessoas[p].filhos.splice(i, 1)

    callJson()
}

function callJson(){

    var textArea = document.getElementById('TextArea')

    textArea.value = JSON.stringify(pessoasJSON, undefined, 8)
}
callJson();
console.log(include.value)
