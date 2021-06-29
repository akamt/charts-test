import React, { useEffect, useState } from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsReact from 'highcharts-react-official'
import styled from 'styled-components'

if (typeof Highcharts === 'object') {
  HighchartsExporting(Highcharts)
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
          type: 'flags',
          data: [
            { x: Date.UTC(2021, 4, 10), text: '実行ログ1', title: 'log1' },
            { x: Date.UTC(2021, 5, 10), text: '実行ログ2', title: 'log2' },
            { x: Date.UTC(2021, 5, 15), text: '実行ログ3', title: 'log3' },
          ],
          showInLegend: false,
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
