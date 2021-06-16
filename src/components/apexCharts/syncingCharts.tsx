import React from 'react'
import ReactApexChart from 'react-apexcharts'

function generateDayWiseTimeSeries(
  baseVal: number,
  count: number,
  yRange: { min: number; max: number },
) {
  let i = 0
  let series = []
  while (i < count) {
    let y =
      Math.floor(Math.random() * (yRange.max - yRange.min + 1)) + yRange.min

    series.push([baseVal, y])
    baseVal += 86400000
    i++
  }
  return series
}

const SyncingCharts = () => {
  const lineGraph1 = {
    series: [
      {
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
    ],
    options: {
      chart: {
        id: 'fb',
        group: 'social',
      },
      colors: ['#008FFB'],
      yaxis: {
        labels: {
          minWidth: 40,
        },
      },
    },
  }
  const lineGraph2 = {
    series: [
      {
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
          min: 10,
          max: 30,
        }),
      },
    ],
    options: {
      chart: {
        id: 'tw',
        group: 'social',
      },
      colors: ['#546E7A'],
      yaxis: {
        labels: {
          minWidth: 40,
        },
      },
    },
  }
  const areaGraph = {
    series: [
      {
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
    ],
    options: {
      chart: {
        id: 'yt',
        group: 'social',
      },
      colors: ['#00E396'],
      yaxis: {
        labels: {
          minWidth: 40,
        },
      },
    },
  }

  return (
    <div id="wrapper">
      <ReactApexChart
        options={lineGraph1.options}
        series={lineGraph1.series}
        type="line"
        width={600}
      />
      <ReactApexChart
        options={lineGraph2.options}
        series={lineGraph2.series}
        type="line"
        width={600}
      />
      <ReactApexChart
        options={areaGraph.options}
        series={areaGraph.series}
        type="area"
        width={600}
      />
    </div>
  )
}

export default SyncingCharts
