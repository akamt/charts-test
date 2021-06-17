import React from 'react'
import styled from 'styled-components'
import AppleStockChart from '../components/highCharts/AppleStockChart'
import PostsStockChart from '../components/highCharts/postStock'

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
    </Container>
  )
}

export default HighChartsPage
