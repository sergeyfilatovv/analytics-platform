

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: [2015, 2016, 2017, 2018, 2019, 2020],
    datasets: [{
      data: [38, 43, 49, 52, 54, 56],
      borderColor: '#E01E2E',
      borderWidth: 2,
      pointBackgroundColor:'red',
      pointBorderWidth: 10,
      cubicInterpolationMode: 'monotone'
    }],
    chart:{dataset:{}}
  },
  options: {
    // Убирается legend
    plugins:{
        tooltip:{
          padding:20,
          caretPadding:9,
          footerMarginTop:9,
          titleSpacing:9,
          boxWidth:20,
          boxPadding:8,
          
        },
        legend:{
            display:false
        }
        
    },
    // Коэффициент, влияющий на размеры canvas
    aspectRatio: 1.8,
    
    scales: {
      y: {
        // Задается минимальное значение по оси y
        min: 30,
        ticks:{
          lineHeight:1.2,
          padding:30,
          callback: function(value) {
            return value + '%';
          },
          font: {
            size: 14,
            weight: 400,
            family: 'PF Agora Sans Pro'
          },
          color:"#999999"
          },
        
      },
      x: {
        // Убираются линии сетки по оси x
        grid:{display: false},
        ticks:{
          lineHeight:1.2,
          padding:41,
          font: {
            size: 16,
            weight: 700,
            family: 'PF Agora Sans Pro'
          },
          color:"#666666"

        },
      },
      
      
    }

  }
});

new Swiper('.swiper', {
  pagination:{
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    bulletActiveClass: 'swiper-pagination-bullet-active',
    
  },
})

