import FusionCharts from 'fusioncharts'
import Column2D from 'fusioncharts/fusioncharts.charts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion.js'
import ExcelExport from 'fusioncharts/fusioncharts.excelexport'
import ReactFusionCharts from 'react-fusioncharts'
import styled from 'styled-components'

const dataSource = {
  chart: {
    caption: '発言数',
    numberSuffix: '回',
    theme: 'fusion',
    exportEnabled: 1,
  },
  data: [
    { label: '01/18', value: 50 },
    { label: '01/19', value: 22 },
    { label: '01/20', value: 23 },
    { label: '01/21', value: 12 },
    { label: '01/22', value: 31 },
    { label: '01/23', value: 7 },
    { label: '01/24', value: 7 },
    { label: '01/25', value: 30 },
    { label: '01/26', value: 8 },
    { label: '01/27', value: 58 },
    { label: '01/28', value: 7 },
    { label: '01/29', value: 0 },
    { label: '01/30', value: 1 },
    { label: '01/31', value: 13 },
    { label: '02/01', value: 8 },
    { label: '02/02', value: 25 },
    { label: '02/03', value: 39 },
    { label: '02/04', value: 25 },
    { label: '02/05', value: 8 },
    { label: '02/06', value: 0 },
    { label: '02/07', value: 26 },
    { label: '02/08', value: 27 },
    { label: '02/09', value: 14 },
    { label: '02/10', value: 63 },
    { label: '02/11', value: 30 },
    { label: '02/12', value: 43 },
    { label: '02/13', value: 40 },
    { label: '02/14', value: 6 },
    { label: '02/15', value: 40 },
    { label: '02/16', value: 28 },
    { label: '02/17', value: 18 },
    { label: '02/18', value: 27 },
    { label: '02/19', value: 70 },
    { label: '02/20', value: 2 },
    { label: '02/21', value: 8 },
    { label: '02/22', value: 24 },
    { label: '02/23', value: 3 },
    { label: '02/24', value: 20 },
    { label: '02/25', value: 30 },
    { label: '02/26', value: 12 },
    { label: '02/27', value: 41 },
    { label: '02/28', value: 103 },
    { label: '03/01', value: 91 },
    { label: '03/02', value: 0 },
    { label: '03/03', value: 4 },
    { label: '03/04', value: 10 },
    { label: '03/05', value: 29 },
    { label: '03/06', value: 49 },
    { label: '03/07', value: 58 },
    { label: '03/08', value: 24 },
    { label: '03/09', value: 9 },
    { label: '03/10', value: 49 },
    { label: '03/11', value: 36 },
    { label: '03/12', value: 49 },
    { label: '03/13', value: 109 },
    { label: '03/14', value: 6 },
    { label: '03/15', value: 39 },
    { label: '03/16', value: 36 },
    { label: '03/17', value: 8 },
    { label: '03/18', value: 38 },
    { label: '03/19', value: 35 },
    { label: '03/20', value: 21 },
    { label: '03/21', value: 139 },
    { label: '03/22', value: 33 },
    { label: '03/23', value: 14 },
    { label: '03/24', value: 21 },
    { label: '03/25', value: 37 },
    { label: '03/26', value: 41 },
    { label: '03/27', value: 4 },
    { label: '03/28', value: 40 },
    { label: '03/29', value: 43 },
    { label: '03/30', value: 15 },
    { label: '03/31', value: 44 },
    { label: '04/01', value: 20 },
    { label: '04/02', value: 41 },
    { label: '04/03', value: 7 },
    { label: '04/04', value: 10 },
    { label: '04/05', value: 41 },
    { label: '04/06', value: 31 },
    { label: '04/07', value: 5 },
    { label: '04/08', value: 15 },
    { label: '04/09', value: 7 },
    { label: '04/10', value: 2 },
    { label: '04/11', value: 5 },
    { label: '04/12', value: 11 },
    { label: '04/13', value: 13 },
    { label: '04/14', value: 8 },
    { label: '04/15', value: 12 },
    { label: '04/16', value: 5 },
    { label: '04/17', value: 4 },
    { label: '04/18', value: 1 },
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

export default function PostsLineGraph() {
  ReactFusionCharts.fcRoot(FusionCharts, Column2D, FusionTheme, ExcelExport)

  return (
    <GraphContainer>
      <ReactFusionCharts {...chartConfigs} />
    </GraphContainer>
  )
}
