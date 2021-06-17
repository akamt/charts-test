import React from 'react'
import styled from 'styled-components'
import dynamic from 'next/dynamic.js'
const SyncingCharts = dynamic(
  () => import('../components/apexCharts/syncingCharts'),
  {
    ssr: false,
  },
)

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
`

const ApexPage = () => {
  return (
    <Container>
      <SyncingCharts />
    </Container>
  )
}

export default ApexPage
