import FusionCharts from 'fusioncharts'
import Column2D from 'fusioncharts/fusioncharts.charts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion.js'
import ExcelExport from 'fusioncharts/fusioncharts.excelexport'
import ReactFusionCharts from 'react-fusioncharts'
import styled from 'styled-components'

const dataSource = {
  chart: {
    caption: 'チケット滞留時間',
    numberSuffix: '分',
    theme: 'fusion',
  },
  categories: [
    {
      category: [
        { label: '01/18 ~ 01/25' },
        { label: '01/25 ~ 02/01' },
        { label: '02/01 ~ 02/08' },
        { label: '02/08 ~ 02/15' },
        { label: '02/15 ~ 02/22' },
        { label: '02/22 ~ 03/01' },
        { label: '03/01 ~ 03/08' },
        { label: '03/08 ~ 03/15' },
        { label: '03/15 ~ 03/22' },
        { label: '03/22 ~ 03/29' },
        { label: '03/29 ~ 04/07' },
      ],
    },
  ],
  dataset: [
    {
      seriesname: 'In Progress',
      data: [
        { value: 615 },
        { value: 1335 },
        { value: 552 },
        { value: 932 },
        { value: 2040 },
        { value: 1623 },
        { value: 442 },
        { value: 1074 },
        { value: 1710 },
        { value: 922 },
        { value: 2181 },
      ],
    },
    {
      seriesname: 'Review',
      data: [
        { value: 2846 },
        { value: 2381 },
        { value: 3652 },
        { value: 2483 },
        { value: 1868 },
        { value: 1327 },
        { value: 678 },
        { value: 1050 },
        { value: 2889 },
        { value: 1683 },
        { value: 10562 },
      ],
    },
  ],
}

const chartConfigs = {
  type: 'msline',
  width: '100%',
  height: 400,
  dataFormat: 'json',
  dataSource: dataSource,
}

const GraphContainer = styled.div`
  width: 50%;
  height: 400px;
  padding: 1rem;
  box-sizing: border-box;
`

export default function StayStatusGraph() {
  ReactFusionCharts.fcRoot(FusionCharts, Column2D, FusionTheme, ExcelExport)

  return (
    <GraphContainer>
      <ReactFusionCharts {...chartConfigs} />
    </GraphContainer>
  )
}
