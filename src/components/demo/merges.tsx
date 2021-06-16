import FusionCharts from 'fusioncharts'
import Column2D from 'fusioncharts/fusioncharts.charts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion.js'
import ExcelExport from 'fusioncharts/fusioncharts.excelexport'
import ReactFusionCharts from 'react-fusioncharts'
import styled from 'styled-components'

const dataSource = {
  chart: {
    caption: 'マージ数',
    numberSuffix: '回',
    theme: 'fusion',
    exportEnabled: 1,
  },
  data: [
    { label: '01/18 ~ 01/23', value: 5 },
    { label: '01/24 ~ 01/30', value: 10 },
    { label: '01/31 ~ 02/06', value: 13 },
    { label: '02/07 ~ 02/13', value: 36 },
    { label: '02/14 ~ 02/20', value: 15 },
    { label: '02/21 ~ 02/27', value: 16 },
    { label: '02/28 ~ 03/06', value: 52 },
    { label: '03/07 ~ 03/13', value: 32 },
    { label: '03/14 ~ 03/20', value: 19 },
    { label: '03/21 ~ 03/27', value: 32 },
    { label: '03/28 ~ 04/03', value: 37 },
    { label: '04/04 ~ 04/10', value: 18 },
    { label: '04/11 ~ 04/17', value: 11 },
    { label: '04/18 ~ 04/18', value: 0 },
  ],
}

const chartConfigs = {
  type: 'line',
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

export default function MergesGraph() {
  ReactFusionCharts.fcRoot(FusionCharts, Column2D, FusionTheme, ExcelExport)

  return (
    <GraphContainer>
      <ReactFusionCharts {...chartConfigs} />
    </GraphContainer>
  )
}
