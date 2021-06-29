import React from 'react'
import styled from 'styled-components'
import HighchartsExporting from 'highcharts/modules/exporting'
import Highcharts from 'highcharts/highstock'

import CustomTooltipChart from '../components/highCharts/CustomTooltipChart'

if (typeof Highcharts === 'object') {
  HighchartsExporting(Highcharts)
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
`

const CustomTooltipPage = () => (
  <Container>
    <CustomTooltipChart />
  </Container>
)

export default CustomTooltipPage
