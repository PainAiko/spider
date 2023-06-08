(function () {
  window.onload = function () {

    // INITIALIZATION OF CHARTJS
    // =======================================================
    Chart.plugins.unregister(ChartDataLabels);

    // INITIALIZATION OF CHARTJS ORDER
    // =======================================================
    var updatingChartDatasets = [
      [
        [18, 51, 60, 38, 88, 50, 40, 52, 88, 80, 60, 70],
        [27, 38, 60, 77, 40, 50, 49, 29, 42, 27, 42, 50]
      ],
      [
        [100, 40, 50, 49, 27, 38, 60, 42, 50, 29, 42, 27],
        [60, 38, 18, 51, 88, 50, 40, 52, 60, 70, 88, 80]
      ],
      [        
        [27, 38, 60, 77, 40, 50, 49, 29, 42, 27, 42, 50],
        [18, 51, 60, 38, 88, 50, 40, 52, 88, 80, 60, 70],
      ]
    ]

    HSCore.components.HSChartJS.init(document.querySelector('#updatingLineChart'), {
      data: {
          datasets: [
            {
              data: updatingChartDatasets[0][0]
            },
            {
              data: updatingChartDatasets[0][1]
            },
            {
              data: updatingChartDatasets[1][2]
            },
          ]
        }
    });

    // Call when tab is clicked
    const updatingLineChart = HSCore.components.HSChartJS.getItem(0)
    document.querySelectorAll('[data-bs-toggle="chart"]')
      .forEach($item => {
        $item.addEventListener('click', e => {
          let keyDataset = e.currentTarget.getAttribute('data-datasets')

          // Update datasets for chart
          updatingLineChart.data.datasets.forEach((dataset, key) => {
            dataset.data = updatingChartDatasets[keyDataset][key];
          });
          updatingLineChart.update();
        })
      })


    // INITIALIZATION OF CHARTJS PRODUCT
    // =======================================================
    var updatingChartDatasets_product = [
      [
        [18, 51, 60, 38, 88, 50, 40, 52, 88, 80, 60, 70],
        [27, 38, 60, 77, 40, 50, 49, 29, 42, 27, 42, 50]
      ],
      [
        [100, 40, 50, 49, 27, 38, 60, 42, 50, 29, 42, 27],
        [60, 38, 18, 51, 88, 50, 40, 52, 60, 70, 88, 80]
      ],
      [        
        [27, 38, 60, 77, 40, 50, 49, 29, 42, 27, 42, 50],
        [18, 51, 60, 38, 88, 50, 40, 52, 88, 80, 60, 70]
      ]
    ]

    HSCore.components.HSChartJS.init(document.querySelector('#id-chart-product'), {
      data: {
        datasets: [
          {
            data: updatingChartDatasets_product[0][0]
          },
          {
            data: updatingChartDatasets_product[0][1]
          },
          {
            data: updatingChartDatasets_product[1][2]
          },
        ]
      }
    })

    const updatingLineChart_product = HSCore.components.HSChartJS.getItem(1)

    // Call when tab is clicked
    document.querySelectorAll('[data-bs-toggle="chart_product"]')
      .forEach($item => {
        $item.addEventListener('click', e => {
          let keyDataset = e.currentTarget.getAttribute('data-datasets')

          // Update datasets for chart
          updatingLineChart_product.data.datasets.forEach((dataset, key) => {
            dataset.data = updatingChartDatasets_product[keyDataset][key];
          });
          updatingLineChart_product.update();
        })
      })

      // INITIALIZATION OF CHARTJS EXPORT
    // =======================================================
    var updatingChartDatasets_export = [
      [
        [18, 51, 60, 38, 88, 50, 40, 52, 88, 80, 60, 70],
        [27, 38, 60, 77, 40, 50, 49, 29, 42, 27, 42, 50]
      ],
      [
        [100, 40, 50, 49, 27, 38, 60, 42, 50, 29, 42, 27],
        [60, 38, 18, 51, 88, 50, 40, 52, 60, 70, 88, 80]
      ],
      [        
        [27, 38, 60, 77, 40, 50, 49, 29, 42, 27, 42, 50],
        [18, 51, 60, 38, 88, 50, 40, 52, 88, 80, 60, 70]
      ]
    ]

    HSCore.components.HSChartJS.init(document.querySelector('#id-chart-export'), {
      data: {
        datasets: [
          {
            data: updatingChartDatasets_export[0][0]
          },
          {
            data: updatingChartDatasets_export[0][1]
          },
          {
            data: updatingChartDatasets_export[1][2]
          },
        ]
      }
    })

    const updatingLineChart_export = HSCore.components.HSChartJS.getItem(2)

    // Call when tab is clicked
    document.querySelectorAll('[data-bs-toggle="chart_export"]')
      .forEach($item => {
        $item.addEventListener('click', e => {
          let keyDataset = e.currentTarget.getAttribute('data-datasets')

          // Update datasets for chart
          updatingLineChart_export.data.datasets.forEach((dataset, key) => {
            dataset.data = updatingChartDatasets_export[keyDataset][key];
          });
          updatingLineChart_export.update();
        })
      })
  }
})()