import React from 'react'
import styled from 'styled-components'
import MyStockChart from '../components/highCharts/MyStockChart'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
`

const HighChartsPage = () => {
  return (
    <Container>
      <MyStockChart />
    </Container>
  )
}

export default HighChartsPage
