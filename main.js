let div = $('<div>Hello world</div>');

$('body').append(div);

div.on('click', function () {
    alert('Hello world');
});

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};

const myChart = new Chart(
    $('#myChart'),
    config
);

const mixedChart = new Chart(
    $('#mixChart'), {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Bar Dataset',
            data: [10, 20, 30, 40],
            order: 2
        }, {
            label: 'Line Dataset',
            data: [10, 10, 10, 10],
            type: 'line',
            order: 1
        }],
        labels: ['January', 'February', 'March', 'April']
    },
    options: {}
});
