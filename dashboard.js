document.addEventListener("DOMContentLoaded", function() {
    const ctxLocation = document.getElementById('revenueByLocation').getContext('2d');
    const ctxJobType = document.getElementById('revenueByJobType').getContext('2d');
  
    
    const darkGreenColor = 'rgb(32,178,170)'; 
  
    const revenueByLocationChart = new Chart(ctxLocation, {
      type: 'bar',
      data: {
        labels: ['Everett', 'Seattle', 'Lynnwood', 'Bothell', 'Mukilteo', 'Edmonds'],
        datasets: [{
          label: 'Revenue for November 2019',
          data: [12000, 19000, 3000, 5000, 2000, 3000],
          backgroundColor: darkGreenColor,
          borderColor: darkGreenColor,
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'y', 
        scales: {
          x: {
            beginAtZero: true
          }
        }
      }
    });
  
    const revenueByJobTypeChart = new Chart(ctxJobType, {
      type: 'bar',
      data: {
        labels: ['Service Plumbing', 'Bid Work HVAC', 'Service HVAC', 'Bid Work Plumbing', 'HWT Replacement', 'Maintenance', 'Material Sale'],
        datasets: [{
          label: 'Revenue for November 2019',
          data: [15000, 12000, 8000, 4000, 4000, 3000, 2000],
          backgroundColor: darkGreenColor,
          borderColor: darkGreenColor,
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'y',
        scales: {
          x: {
            beginAtZero: true
          }
        }
      }
    });
  });
  