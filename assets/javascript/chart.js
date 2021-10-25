const graduationData = {
  labels: [
    'Vocational school',
    'University',
    'Employment',
    'Graduate School',
    'Others'
  ],
  datasets: [{
    data: [34, 24, 4, 4, 15],
    backgroundColor: [
      'rgb(0, 30, 63)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(230, 150, 86)',
      'rgb(230, 80, 86)'
    ],
    hoverOffset: 4
  }]
};

const graduationConfig = {
  type: 'pie',
  data: graduationData,
  options: {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#004FA6'
        }
      }
    }
  }
};

var graduationChart = new Chart(
  document.getElementById('graduationChart'),
  graduationConfig
);
