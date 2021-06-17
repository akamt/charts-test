import React, { useEffect, useState } from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsExporting from 'highcharts/modules/exporting'
import indicators from 'highcharts/indicators/indicators'
import boollingerBands from 'highcharts/indicators/bollinger-bands'
import accelerationBands from 'highcharts/indicators/acceleration-bands'
import ema from 'highcharts/indicators/ema'
import dema from 'highcharts/indicators/dema'
import HighchartsReact from 'highcharts-react-official'
import styled from 'styled-components'

if (typeof Highcharts === 'object') {
  HighchartsExporting(Highcharts)
  indicators(Highcharts)
  accelerationBands(Highcharts)
  ema(Highcharts)
  dema(Highcharts)
  boollingerBands(Highcharts)
}

const GraphContainer = styled.div`
  width: 50%;
  height: 400px;
  padding: 1rem;
  box-sizing: border-box;
`

const options = {
  rangeSelector: {
    selected: 2,
  },
  title: {
    text: 'AAPL Stock Price',
  },
  legend: {
    enabled: true,
  },

  plotOptions: {
    series: {
      showInLegend: true,
    },
  },
  series: [{}],
}

const AppleStockChart = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [chartOption, setChartOption] = useState(options)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setIsLoading(true)

    const data = await fetch(
      'https://demo-live-data.highcharts.com/aapl-ohlc.json',
    ).then((res) => res.json())

    setChartOption({
      ...chartOption,
      series: [
        {
          type: 'ohlc',
          id: 'aapl',
          name: 'AAPL Stock Price',
          data: data,
        },
        {
          type: 'abands',
          linkedTo: 'aapl',
        },
        {
          type: 'ema',
          linkedTo: 'aapl',
        },
        {
          type: 'dema',
          linkedTo: 'aapl',
        },
        {
          type: 'bb',
          linkedTo: 'aapl',
        },
      ],
    })

    setIsLoading(false)
  }

  return (
    <GraphContainer>
      {isLoading ? (
        <div>loading</div>
      ) : (
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={'stockChart'}
          options={chartOption}
        />
      )}
    </GraphContainer>
  )
}

export default AppleStockChart
