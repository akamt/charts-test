import FusionCharts from 'fusioncharts'
import Column2D from 'fusioncharts/fusioncharts.charts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion.js'
import ExcelExport from 'fusioncharts/fusioncharts.excelexport'
import ReactFusionCharts from 'react-fusioncharts'
import styled from 'styled-components'

const dataSource = {
  chart: {
    caption: '消化SP & 持ち越し数',
    numberSuffix: 'sp',
    theme: 'fusion',
    exportEnabled: 1,
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
      seriesname: '消化SP',
      data: [
        { value: 18 },
        { value: 20 },
        { value: 26 },
        { value: 33.5 },
        { value: 31 },
        { value: 77 },
        { value: 82.5 },
        { value: 53 },
        { value: 68.5 },
        { value: 57 },
        { value: 76 },
      ],
    },
    {
      seriesname: '持ち越しSP',
      data: [
        { value: 2 },
        { value: 6 },
        { value: 23 },
        { value: 10 },
        { value: 7 },
        { value: 8 },
        { value: 7 },
        { value: 2 },
        { value: 23 },
        { value: 0 },
        { value: 0 },
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

export default function SpGraph() {
  ReactFusionCharts.fcRoot(FusionCharts, Column2D, FusionTheme, ExcelExport)

  return (
    <GraphContainer>
      <ReactFusionCharts {...chartConfigs} />
    </GraphContainer>
  )
}
