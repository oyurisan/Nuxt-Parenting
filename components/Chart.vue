<!-- ここで注意すべき点は、<template>タグを記載してはいけないということだ。-->
<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  data() {
    return {
      chartData: {
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        datasets: [
          {
            type: 'line', 
            label: '身長',
            data: [50, 51, 53, 55, 56, 58, 61, 63, 65, 68, 70, 71, 73],
            backgroundColor: "rgba(177, 60, 89)",
            borderColor: 'rgb(209, 117, 140)',
            // 線下を塗りつぶすかどうか
            fill: false,
          },

          {
            type: 'line',
            label: '体重',
            data: [3, 3.4, 3.7, 4.1, 4.5, 4.8, 5.3, 5.6, 5.8, 6.1, 6.6, 7.4, 7.9],
            backgroundColor: "rgba(43, 70, 119)",
            borderColor: "rgba(95, 137, 185)",
            fill: false,
            // 軸のID（複数軸存在する場合）
            yAxisID: "y2"
          },
        ],
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,

        // 軸の設定
        scales: {
                    // Y軸のオプション
                    yAxes: [{
                        // 軸ラベル
                        scaleLabel: {
                            fontColor: "black",
                            display: true,
                            labelString: 'Height (cm)',
                            fontSize: 16,
                        },
                        // 目盛線
                        gridLines: {
                            color: "rgba(126, 126, 126, 0.4)",
                            zeroLineColor: "black"
                        },
                        // 目盛り
                        ticks: {
                            fontColor: "black",
                            beginAtZero: true,
                            suggestedMax: 80,
                            stepSize: 10
                        }
                    },
                    {
                        id: "y2",
                        position: "right",
                        autoSkip: true,
                        scaleLabel: {
                            fontColor: "black",
                            display: true,
                            labelString: 'Body weight (Kg)',
                            fontSize: 16,
                        },
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            fontColor: "black",
                            beginAtZero: true,
                            max: 15,
                            stepSize: 3,
                            // callback (val) {
                            //     return val + 'kg';
                            // }
                        }
                    }],
                    // X軸のオプション
                    xAxes: [{
                        scaleLabel: {
                            fontColor: "black",
                            display: true,
                            labelString: 'Age (months)',
                            fontSize: 16,
                        },
                        gridLines: {
                            color: "rgba(126, 126, 126, 0.4)",
                            zeroLineColor: "black"
                        },
                        ticks: {
                            fontColor: "black"
                        }
                    }]
                }
      },
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options)
  },
}
</script>

<style>
.color {
    color:rgb(43, 70, 119)
}
</style>