import React from 'react'
import styled from 'styled-components'
import AppleStockChart from '../components/highCharts/AppleStockChart'
import PostsStockChart from '../components/highCharts/postStock'
import NetworkChart from '../components/highCharts/networkChart'
import SyncingChart from '../components/highCharts/syncingChart'
import Highcharts from 'highcharts/highstock'

if (typeof Highcharts === 'object') {
  Highcharts.Pointer.prototype.reset = () => {}

  Highcharts.Point.prototype.highlight = function (event) {
    this.onMouseOver() // Show the hover marker
    this.series.chart.tooltip.refresh(this) // Show the tooltip
    this.series.chart.xAxis[0].drawCrosshair(event, this) // Show the crosshair
  }
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
`

const HighChartsPage = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    let point = null
    let event = null

    Highcharts.charts.forEach((chart) => {
      if (!chart) return
      event = chart.pointer.normalize(e as unknown as PointerEvent) // Find coordinates within the chart
      point = chart.series[0].searchPoint(event, true) // Get the hovered point
      if (point) {
        point.highlight(event)
      }
    })
  }

  return (
    <Container onMouseMove={handleMouseMove}>
      <AppleStockChart />
      <PostsStockChart />
      <NetworkChart />
      <SyncingChart />
    </Container>
  )
}

export default HighChartsPage
