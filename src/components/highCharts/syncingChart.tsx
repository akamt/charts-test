import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const options1 = {
  xAxis: {
    visible: true,
    crosshair: true,
    type: 'datetime',
    tickWidth: 0,
    tickLength: 0,
    events: {
      setExtremes: function (e) {
        Highcharts.syncExtremes(e)
      },
    },
  },
  yAxis: [
    {
      gridLineWidth: 2,
      tickWidth: 2,
      tickLength: 78,
      tickmarkPlacement: 'on',
      tickPixelInterval: 60,
      title: { enabled: false },
      labels: {
        align: 'left',
        x: -60,
        y: -10,
      },
    },
    {
      gridLineWidth: 2,
      tickWidth: 2,
      tickLength: 78,
      tickmarkPlacement: 'on',
      tickPixelInterval: 60,
      title: { enabled: false },
      labels: {
        align: 'right',
        x: 60,
        y: -10,
      },
      opposite: true,
    },
  ],
  legend: { enabled: false },
  marker: { enabled: false },
  plotOptions: {
    line: { marker: { enabled: false } },
    column: { pointWidth: 6 },
  },
  tooltip: {
    enabled: true,
    useHTML: true,
    shared: true,
    borderRadius: 3,
    shape: 'rectangle',
    shadow: false,
    padding: 20,
  },
  series: [
    {
      type: 'line',
      data: [
        {
          x: new Date('2018-12-25T09:00:06.247Z').getTime(),
          y: 3834.98,
        },
        {
          x: new Date('2018-12-26T07:00:34.472Z').getTime(),
          y: 3852.81,
        },
        {
          x: new Date('2018-12-27T06:00:00.472Z').getTime(),
          y: 3860.81,
        },
      ],
    },
    {
      type: 'line',
      data: [
        {
          x: new Date('2018-12-25T09:00:06.247Z').getTime(),
          y: 66468346315,
        },
        {
          x: new Date('2018-12-26T07:00:34.472Z').getTime(),
          y: 66209093565,
        },
        {
          x: new Date('2018-12-27T06:00:00.472Z').getTime(),
          y: 66509093565,
        },
      ],
      yAxis: 1,
    },
  ],
}
const options2 = {
  xAxis: {
    visible: true,
    crosshair: true,
    type: 'datetime',
    tickWidth: 0,
    tickLength: 0,
    events: {
      setExtremes: function (e) {
        Highcharts.syncExtremes(e)
      },
    },
  },
  yAxis: {
    gridLineWidth: 2,
    tickWidth: 2,
    tickLength: 78,
    tickmarkPlacement: 'on',
    tickPixelInterval: 40,
    title: { enabled: false },
    labels: {
      align: 'left',
      x: -60,
      y: -10,
    },
  },
  legend: { enabled: false },
  marker: { enabled: false },
  plotOptions: {
    line: { marker: { enabled: false } },
    column: { pointWidth: 6 },
  },
  tooltip: {
    enabled: true,
    useHTML: true,
    shared: true,
    borderRadius: 3,
    shape: 'rectangle',
    shadow: false,
    padding: 20,
  },
  series: [
    {
      type: 'column',
      name: 'Hello',
      data: [
        {
          x: new Date('2018-12-25T09:00:06.247Z').getTime(),
          y: 6609592859.48,
          data: {
            price: '3,804.98',
          },
        },
        {
          x: new Date('2018-12-26T07:00:34.472Z').getTime(),
          y: 5615182691.28,
          data: {
            price: '3,852.81',
          },
        },
        {
          x: new Date('2018-12-27T06:00:00.472Z').getTime(),
          y: 5915182691.28,
          data: {
            price: '3,852.81',
          },
        },
      ],
    },
  ],
}

const SyncingChart = () => {
  return (
    <div>
      <HighchartsReact
        constructorType={'chart'}
        highcharts={Highcharts}
        options={options1}
      />
      <HighchartsReact
        constructorType={'chart'}
        highcharts={Highcharts}
        options={options2}
      />
    </div>
  )
}

export default SyncingChart
