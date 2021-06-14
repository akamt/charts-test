import styled from 'styled-components'
import dynamic from 'next/dynamic.js'
const Column2DGraph = dynamic(() => import('../components/column2DGraph'), {
  ssr: false,
})

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default function Home() {
  return (
    <div>
      <Title>My page</Title>
      <Column2DGraph />
    </div>
  )
}
