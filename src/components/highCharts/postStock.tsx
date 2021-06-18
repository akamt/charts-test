import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsExporting from 'highcharts/modules/exporting'
import indicators from 'highcharts/indicators/indicators'
import boollingerBands from 'highcharts/indicators/bollinger-bands'
import accelerationBands from 'highcharts/indicators/acceleration-bands'
import ema from 'highcharts/indicators/ema'
import dema from 'highcharts/indicators/dema'
import HighchartsReact from 'highcharts-react-official'
import styled from 'styled-components'
import { AxisSetExtremesEventObject } from 'highcharts'

if (typeof Highcharts === 'object') {
  HighchartsExporting(Highcharts)
  indicators(Highcharts)
  accelerationBands(Highcharts)
  ema(Highcharts)
  dema(Highcharts)
  boollingerBands(Highcharts)
}

const options = {
  chart: {
    zoomType: 'x',
  },
  title: {
    text: '発言数',
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
  },
  series: [
    {
      type: 'line',
      id: 'posts',
      name: 'posts',
      data: [
        [new Date('2021/01/18').getTime(), 50],
        [new Date('2021/01/19').getTime(), 22],
        [new Date('2021/01/20').getTime(), 23],
        [new Date('2021/01/21').getTime(), 12],
        [new Date('2021/01/22').getTime(), 31],
        [new Date('2021/01/23').getTime(), 7],
        [new Date('2021/01/24').getTime(), 7],
        [new Date('2021/01/25').getTime(), 30],
        [new Date('2021/01/26').getTime(), 8],
        [new Date('2021/01/27').getTime(), 58],
        [new Date('2021/01/28').getTime(), 7],
        [new Date('2021/01/29').getTime(), 0],
        [new Date('2021/01/30').getTime(), 1],
        [new Date('2021/01/31').getTime(), 13],
        [new Date('2021/02/01').getTime(), 8],
        [new Date('2021/02/02').getTime(), 25],
        [new Date('2021/02/03').getTime(), 39],
        [new Date('2021/02/04').getTime(), 25],
        [new Date('2021/02/05').getTime(), 8],
        [new Date('2021/02/06').getTime(), 0],
        [new Date('2021/02/07').getTime(), 26],
        [new Date('2021/02/08').getTime(), 27],
        [new Date('2021/02/09').getTime(), 14],
        [new Date('2021/02/10').getTime(), 63],
        [new Date('2021/02/11').getTime(), 30],
        [new Date('2021/02/12').getTime(), 43],
        [new Date('2021/02/13').getTime(), 40],
        [new Date('2021/02/14').getTime(), 6],
        [new Date('2021/02/15').getTime(), 40],
        [new Date('2021/02/16').getTime(), 28],
        [new Date('2021/02/17').getTime(), 18],
        [new Date('2021/02/18').getTime(), 27],
        [new Date('2021/02/19').getTime(), 70],
        [new Date('2021/02/20').getTime(), 2],
        [new Date('2021/02/21').getTime(), 8],
        [new Date('2021/02/22').getTime(), 24],
        [new Date('2021/02/23').getTime(), 3],
        [new Date('2021/02/24').getTime(), 20],
        [new Date('2021/02/25').getTime(), 30],
        [new Date('2021/02/26').getTime(), 12],
        [new Date('2021/02/27').getTime(), 41],
        [new Date('2021/02/28').getTime(), 103],
        [new Date('2021/03/01').getTime(), 91],
        [new Date('2021/03/02').getTime(), 0],
        [new Date('2021/03/03').getTime(), 4],
        [new Date('2021/03/04').getTime(), 10],
        [new Date('2021/03/05').getTime(), 29],
        [new Date('2021/03/06').getTime(), 49],
        [new Date('2021/03/07').getTime(), 58],
        [new Date('2021/03/08').getTime(), 24],
        [new Date('2021/03/09').getTime(), 9],
        [new Date('2021/03/10').getTime(), 49],
        [new Date('2021/03/11').getTime(), 36],
        [new Date('2021/03/12').getTime(), 49],
        [new Date('2021/03/13').getTime(), 109],
        [new Date('2021/03/14').getTime(), 6],
        [new Date('2021/03/15').getTime(), 39],
        [new Date('2021/03/16').getTime(), 36],
        [new Date('2021/03/17').getTime(), 8],
        [new Date('2021/03/18').getTime(), 38],
        [new Date('2021/03/19').getTime(), 35],
        [new Date('2021/03/20').getTime(), 21],
        [new Date('2021/03/21').getTime(), 139],
        [new Date('2021/03/22').getTime(), 33],
        [new Date('2021/03/23').getTime(), 14],
        [new Date('2021/03/24').getTime(), 21],
        [new Date('2021/03/25').getTime(), 37],
        [new Date('2021/03/26').getTime(), 41],
        [new Date('2021/03/27').getTime(), 4],
        [new Date('2021/03/28').getTime(), 40],
        [new Date('2021/03/29').getTime(), 43],
        [new Date('2021/03/30').getTime(), 15],
        [new Date('2021/03/31').getTime(), 44],
        [new Date('2021/04/01').getTime(), 20],
        [new Date('2021/04/02').getTime(), 41],
        [new Date('2021/04/03').getTime(), 7],
        [new Date('2021/04/04').getTime(), 10],
        [new Date('2021/04/05').getTime(), 41],
        [new Date('2021/04/06').getTime(), 31],
        [new Date('2021/04/07').getTime(), 5],
        [new Date('2021/04/08').getTime(), 15],
        [new Date('2021/04/09').getTime(), 7],
        [new Date('2021/04/10').getTime(), 2],
        [new Date('2021/04/11').getTime(), 5],
        [new Date('2021/04/12').getTime(), 11],
        [new Date('2021/04/13').getTime(), 13],
        [new Date('2021/04/14').getTime(), 8],
        [new Date('2021/04/15').getTime(), 12],
        [new Date('2021/04/16').getTime(), 5],
        [new Date('2021/04/17').getTime(), 4],
        [new Date('2021/04/18').getTime(), 1],
      ],
    },
    {
      type: 'abands',
      linkedTo: 'posts',
    },
    {
      type: 'ema',
      linkedTo: 'posts',
    },
    {
      type: 'dema',
      linkedTo: 'posts',
    },
    {
      type: 'bb',
      linkedTo: 'posts',
    },
  ],
}

const GraphContainer = styled.div`
  width: 50%;
  height: 400px;
  padding: 1rem;
  box-sizing: border-box;
`

const PostsStockChart = () => {
  return (
    <GraphContainer>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={'stockChart'}
        options={options}
      />
    </GraphContainer>
  )
}

export default PostsStockChart
