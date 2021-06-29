import React from 'react'
import Highcharts from 'highcharts/highstock'
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
    text: 'SP消化割合',
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
      type: 'line',
      name: 'SP消化割合',
      data: [
        0.9 * 100,
        0.7692307692 * 100,
        0.5306122449 * 100,
        0.7701149425 * 100,
        0.8157894737 * 100,
        0.9058823529 * 100,
        0.9217877095 * 100,
        0.9636363636 * 100,
        0.7486338798 * 100,
        1 * 100,
        1 * 100,
      ],
    },
    {
      type: 'flags',
      data: [
        { x: 2, text: '実行ログ1', title: 'log1' },
        { x: 6, text: '実行ログ2', title: 'log2' },
        { x: 10, text: '実行ログ3', title: 'log3' },
      ],
      showInLegend: false,
    },
  ],
}

const GraphContainer = styled.div`
  width: 50%;
  height: 400px;
  padding: 1rem;
  box-sizing: border-box;
`

const DigestionSpChart = () => {
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

export default DigestionSpChart
