// Step 1 - Including react
import React, { useEffect, useState } from 'react'

// Step 2 - Including the react-fusioncharts component
import FusionCharts from 'fusioncharts'

// Step 3 - Including the fusiontime file
import TimeSeries from 'fusioncharts/fusioncharts.timeseries'
import ReactFC from 'react-fusioncharts'

// Step 4 - Adding the chart as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, TimeSeries)

// Step 5 - Creating the JSON object to store the chart configurations
const dataFetch = () =>
  fetch(
    'https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/examples/online-sales-single-series/data.json',
  ).then((res) => res.json())
const schemaFetch = () =>
  fetch(
    'https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/examples/online-sales-single-series/schema.json',
  ).then((res) => res.json())

const graphConfig = {
  type: 'timeseries',
  renderAt: 'container',
  width: '600',
  height: '400',
  dataSource: {
    caption: { text: 'Online Sales of a SuperStore in the US' },
    data: {},
    yAxis: [
      {
        plot: [
          {
            value: 'Sales ($)',
          },
        ],
      },
    ],
  },
}

export default function TimeGraph() {
  const [timeSeriesDs, setTimeSeriesDs] = useState(graphConfig)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    await setIsLoading(true)
    const data = await dataFetch()
    const schema = await schemaFetch()

    // Here we are creating our DataTable
    const fusionTable = new FusionCharts.DataStore().createDataTable(
      data,
      schema,
    )

    setTimeSeriesDs({
      ...timeSeriesDs,
      dataSource: { ...timeSeriesDs.dataSource, data: fusionTable },
    })

    await setIsLoading(false)
  }

  return !isLoading ? <ReactFC {...timeSeriesDs} /> : <div>loading</div>
}
