const dataSource = {
  chart: {
    caption: 'Countries With Most Oil Reserves [2017-18]',
    subCaption: 'In MMbbl = One Million barrels',
    xAxisName: 'Country',
    yAxisName: 'Reserves (MMbbl)',
    numberSuffix: 'K',
    theme: 'fusion',
  },
  data: [
    { label: 'Venezuela', value: '290' },
    { label: 'Saudi', value: '260' },
    { label: 'Canada', value: '180' },
    { label: 'Iran', value: '140' },
    { label: 'Russia', value: '115' },
    { label: 'UAE', value: '100' },
    { label: 'US', value: '30' },
    { label: 'China', value: '30' },
  ],
}

const chartConfigs = {
  type: 'column2d',
  width: 650,
  height: 400,
  dataFormat: 'json',
  dataSource: dataSource,
}

export default function NextFC() {
  const FusionCharts = require('fusioncharts')
  const Column2D = require('fusioncharts/fusioncharts.charts')
  const FusionTheme = require('fusioncharts/themes/fusioncharts.theme.fusion.js')
  const { default: ReactFC } = require('react-fusioncharts')

  ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme)

  return <ReactFC {...chartConfigs} />
}
