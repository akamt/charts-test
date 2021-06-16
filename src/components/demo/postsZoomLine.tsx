import FusionCharts from 'fusioncharts'
import ZoomLine from 'fusioncharts/fusioncharts.zoomline'
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
    yaxisminValue: 10,
    yaxismaxValue: 200,
    pixelsPerPoint: 0,
    pixelsPerLabel: 30,
    lineThickness: 1,
    compactdatamode: 1,
    dataseparator: '|',
    labelHeight: 30,
    scrollheight: 10,
    flatScrollBars: 1,
    scrollShowButtons: '0',
  },
  categories: [
    {
      category:
        '01/18|01/19|01/20|01/21|01/22|01/23|01/24|01/25|01/26|01/27|01/28|01/29|01/30|01/31|02/01|02/02|02/03|02/04|02/05|02/06|02/07|02/08|02/09|02/10|02/11|02/12|02/13|02/14|02/15|02/16|02/17|02/18|02/19|02/20|02/21|02/22|02/23|02/24|02/25|02/26|02/27|02/28|03/01|03/02|03/03|03/04|03/05|03/06|03/07|03/08|03/09|03/10|03/11|03/12|03/13|03/14|03/15|03/16|03/17|03/18|03/19|03/20|03/21|03/22|03/23|03/24|03/25|03/26|03/27|03/28|03/29|03/30|03/31|04/01|04/02|04/03|04/04|04/05|04/06|04/07|04/08|04/09|04/10|04/11|04/12|04/13|04/14|04/15|04/16|04/17|04/18',
    },
  ],
  dataset: [
    {
      seriesname: 'posts',
      data: '50|22|23|12|31|7|7|30|8|58|7|0|1|13|8|25|39|25|8|0|26|27|14|63|30|43|40|6|40|28|18|27|70|2|8|24|3|20|30|12|41|103|91|0|4|10|29|49|58|24|9|49|36|49|109|6|39|36|8|38|35|21|139|33|14|21|37|41|4|40|43|15|44|20|41|7|10|41|31|5|15|7|2|5|11|13|8|12|5|4|1',
    },
  ],
}

const chartConfigs = {
  type: 'zoomline',
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

export default function PostsZoomLineGraph() {
  ReactFusionCharts.fcRoot(FusionCharts, ZoomLine, FusionTheme, ExcelExport)

  return (
    <GraphContainer>
      <ReactFusionCharts {...chartConfigs} />
    </GraphContainer>
  )
}
