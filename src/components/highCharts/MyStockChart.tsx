import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsReact from 'highcharts-react-official'

if (typeof Highcharts === 'object') {
  HighchartsExporting(Highcharts)
}

const options = {
  title: {
    text: 'My stock chart',
  },
  series: [
    {
      data: [1, 2, 3],
    },
  ],
}

const MyStockChart = () => (
  <HighchartsReact
    highcharts={Highcharts}
    constructorType={'stockChart'}
    options={options}
  />
)

export default MyStockChart
