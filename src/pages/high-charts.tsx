import React from 'react'
import styled from 'styled-components'
import AppleStockChart from '../components/highCharts/AppleStockChart'
import PostsStockChart from '../components/highCharts/postStock'
import NetworkChart from '../components/highCharts/networkChart'

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
      <AppleStockChart />
      <PostsStockChart />
      <NetworkChart />
    </Container>
  )
}

export default HighChartsPage
