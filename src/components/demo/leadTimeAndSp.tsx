import FusionCharts from 'fusioncharts'
import Column2D from 'fusioncharts/fusioncharts.charts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion.js'
import ExcelExport from 'fusioncharts/fusioncharts.excelexport'
import ReactFusionCharts from 'react-fusioncharts'
import styled from 'styled-components'

const dataSource = {
  chart: {
    caption: '持ち越しSP & リードタイム',
    pYAxisName: '消化SP',
    sYAxisName: 'リードタイム',
    numberSuffix: 'SP',
    sNumberSuffix: '分',
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
    {
      seriesname: 'リードタイム',
      parentYAxis: 'S',
      renderAs: 'line',
      showValues: 0,
      data: [
        { value: 3506 },
        { value: 3164 },
        { value: 4449 },
        { value: 5081 },
        { value: 4431 },
        { value: 2677 },
        { value: 1463 },
        { value: 2100 },
        { value: 6775 },
        { value: 2200 },
        { value: 5231 },
      ],
    },
  ],
}

const chartConfigs = {
  type: 'mscombidy2d',
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

export default function LeadTimeAndSpGraph() {
  ReactFusionCharts.fcRoot(FusionCharts, Column2D, FusionTheme, ExcelExport)

  return (
    <GraphContainer>
      <ReactFusionCharts {...chartConfigs} />
    </GraphContainer>
  )
}
