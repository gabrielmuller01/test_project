var pessoas = []
var element = document.querySelector(".family");
var include = document.getElementById('name')


function addPerson(name) {

    var pessoa = { nome: name, filhos: [] }

    pessoas.push(pessoa)

    element.innerHTML +=
    (
    `
    <tr>
        <td style="text-align:center; width: 300px; background-color: lightgray;">
            ${pessoa.nome}
        </td>
        <td style="text-align:center; width: 300px; background-color: lightgray;">
            <button type="button" id="Remove" onclick="removePerson(this)"> Remover</button>
        </td>
    </tr>
    `
    )

    console.log(pessoas)

    return pessoa;
}

function addChildPerson(pessoa, sonName) {

    pessoa.filhos.push(sonName)

}

function removePerson(removeButton) {

    
    var closestTr = removeButton.closest('tr');
    
    var i = element.toString.rows.indexOf(closestTr)

    console.log(i)

    pessoas.splice(i, 1)

    
    element.rows.outerHTML = "";
     
}

function removeSon(pessoa, i) {

    pessoa.filhos.splice(i, 1)
}



console.log(include.value)

var Joao = addPerson('Joao')
var Will = addPerson('Will')
var Rena = addPerson('Rena')



addChildPerson(Rena, 'RenaJR')
addChildPerson(Rena, 'WillJR')
addChildPerson(Rena, 'JenniJR')

console.log(JSON.stringify(pessoas))
