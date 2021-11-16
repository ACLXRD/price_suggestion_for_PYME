const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Oct 1", "Oct 2", "Oct 3", "Oct 4", "Oct 5", "Oct 6", "Oct 7", "Oct 8","Oct 9", "Oct 10", "Oct 11", "Oct 12" , "Oct 13", "Oct 14", "Oct 15"],
        datasets: [{
            label: 'Ventas en la semana',
            data: [20, 9, 12, 11, 19, 16, 5, 2, 15, 9, 12, 19, 3, 5, 2],
            backgroundColor: [
                '#80BC00'
            ],
            borderRadius: 20,
            borderSkipped: false,
            barThickness: 13,
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            },
            
        }
    }
});
// Buttons links
const stock = document.getElementById("btnInvetario").onclick = () =>{
    location.href = "stock.html";
};