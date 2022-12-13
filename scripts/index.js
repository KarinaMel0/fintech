
const grafico = document.getElementById('myChart')
const lista = document.querySelector('.lista');

const fakeData = [
    {
        name: 'Mercado',
        value: 300,
        color: '#BA334D'
    },
    {
        name: 'Remedios',
        value: 95.5,
        color: '#B00022'
    },
    {
        name: 'Bar com os amigos',
        value: 200,
        color: '#C97B8A',
    }
]

let fakeLabels = [];
let fakeColor = [];
let fakeValues = [];

fakeData.forEach(actualItem =>{
    fakeLabels.push(actualItem.name);
    fakeValues.push(actualItem.value);
    fakeColor.push(actualItem.color);

    const itemLista = document.createElement('li');
    itemLista.classList.add('item-lista')
    const itemLista_name = document.createElement('p')
    itemLista_name.textContent = actualItem.name;
    itemLista_name.classList.add('item-lista_name')
    const itemLista_valor = document.createElement('p')
    itemLista_valor.textContent = `R$ ${actualItem.value}`
    itemLista_valor.classList.add('item-lista_value')

    itemLista.appendChild(itemLista_name);
    itemLista.appendChild(itemLista_valor);
    
    lista.appendChild(itemLista);

})

const mockDadosGrafico = {
    labels: fakeLabels,
    datasets: [{
        label: 'Valor',
        data: fakeValues,
        borderWidth: 1.5,
        backgroundColor: fakeColor,
        borderColor: 'white'
    }]
}

new Chart(grafico, {
    type: 'doughnut',
    data: mockDadosGrafico,

})

