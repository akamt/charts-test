import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsExporting from 'highcharts/modules/exporting'
import networkgraph from 'highcharts/modules/networkgraph'
import HighchartsReact from 'highcharts-react-official'
import styled from 'styled-components'

if (typeof Highcharts === 'object') {
  HighchartsExporting(Highcharts)
  networkgraph(Highcharts)
}

const options = {
  chart: {
    type: 'networkgraph',
  },
  plotOptions: {
    networkgraph: {
      layoutAlgorithm: {
        enableSimulation: true,
      },
    },
  },
  series: [
    {
      draggable: false,
      dataLabels: {
        enabled: true,
        linkTextPath: {
          attributes: {
            dy: 10,
          },
        },
        linkFormat: '{point.fromNode.name} \u2192 {point.toNode.name}',
        textPath: {
          enabled: true,
          attributes: {
            dy: 14,
            startOffset: '45%',
            textLength: 30,
          },
        },
        format: 'Node: {point.name}',
      },
      marker: {
        radius: 35,
      },
      link: {
        width: 3,
      },
      data: [
        {
          from: 'n1',
          to: 'n2',
        },
        {
          from: 'n2',
          to: 'n3',
        },
        {
          from: 'n3',
          to: 'n4',
        },
        {
          from: 'n4',
          to: 'n5',
        },
        {
          from: 'n5',
          to: 'n1',
        },
      ],
    },
  ],
}

const GraphContainer = styled.div`
  width: 50%;
  height: 400px;
  padding: 1rem;
  box-sizing: border-box;
`

const NetworkChart = () => {
  return (
    <GraphContainer>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </GraphContainer>
  )
}

export default NetworkChart
