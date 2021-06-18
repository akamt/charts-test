import { PointerEventObject } from 'highcharts'

export declare module 'highcharts' {
  interface Point {
    highlight(e: PointerEventObject): void
  }

  function syncExtremes(e: AxisSetExtremesEventObject): void
}
