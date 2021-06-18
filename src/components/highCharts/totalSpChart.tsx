import React from 'react'
import Highcharts from 'highcharts/highcharts'
import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsReact from 'highcharts-react-official'
import styled from 'styled-components'
import { AxisSetExtremesEventObject } from 'highcharts'

if (typeof Highcharts === 'object') {
  HighchartsExporting(Highcharts)
}

const options = {
  chart: {
    zoomType: 'x',
  },
  title: {
    text: 'SP',
  },
  legend: {
    enabled: true,
  },
  plotOptions: {
    series: {
      showInLegend: true,
    },
  },
  xAxis: {
    events: {
      setExtremes: function (e: AxisSetExtremesEventObject) {
        Highcharts.syncExtremes(e)
      },
    },
    categories: [
      '01/18 ~ 01/25',
      '01/25 ~ 02/01',
      '02/01 ~ 02/08',
      '02/08 ~ 02/15',
      '02/15 ~ 02/22',
      '02/22 ~ 03/01',
      '03/01 ~ 03/08',
      '03/08 ~ 03/15',
      '03/15 ~ 03/22',
      '03/22 ~ 03/29',
      '03/29 ~ 04/07',
    ],
  },
  series: [
    {
      type: 'column',
      name: 'SP',
      data: [18, 20, 26, 33.5, 31, 77, 82.5, 53, 68.5, 57, 76],
    },
  ],
}

const GraphContainer = styled.div`
  width: 50%;
  height: 400px;
  padding: 1rem;
  box-sizing: border-box;
`

const TotalSpChart = () => {
  return (
    <GraphContainer>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={'chart'}
        options={options}
      />
    </GraphContainer>
  )
}

export default TotalSpChart
