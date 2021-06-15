import dynamic from 'next/dynamic.js'
import styled from 'styled-components'
const PostsLineGraph = dynamic(() => import('../components/demo/postsLine'), {
  ssr: false,
})
const PostsZoomLineGraph = dynamic(
  () => import('../components/demo/postsZoomLine'),
  {
    ssr: false,
  },
)
const MergesGraph = dynamic(() => import('../components/demo/merges'), {
  ssr: false,
})
const SpGraph = dynamic(() => import('../components/demo/sp'), {
  ssr: false,
})
const StayStatusGraph = dynamic(() => import('../components/demo/stayStatus'), {
  ssr: false,
})
const LeadTimeAndSpGraph = dynamic(
  () => import('../components/demo/leadTimeAndSp'),
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

const DemoPage = () => (
  <Container>
    <PostsLineGraph />
    <PostsZoomLineGraph />
    <MergesGraph />
    <SpGraph />
    <StayStatusGraph />
    <LeadTimeAndSpGraph />
  </Container>
)

export default DemoPage
