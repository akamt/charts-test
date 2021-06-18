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
    text: 'マージ数',
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
      name: 'マージ数',
      data: [28, 36, 15, 16, 52, 32, 19, 32, 37, 29, 0],
    },
  ],
}

const GraphContainer = styled.div`
  width: 50%;
  height: 400px;
  padding: 1rem;
  box-sizing: border-box;
`

const MergesChart = () => {
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

export default MergesChart
