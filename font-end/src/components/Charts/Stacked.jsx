import React from 'react'
import { ChartComponent,SeriesCollectionDirective,
  SeriesDirective,Inject,Legend,
  Category, StackingColumnSeries,
  Tooltip } from '@syncfusion/ej2-react-charts'

  import { stackedCustomSeries,stackedPrimaryXAxis,stackedPrimaryYAxis,
   } from '../../data/dummy'

const Stacked = ({height,width}) => {
  return (
   <ChartComponent
   width={width}
   height={height}
   id = "charts"
    tooltip={{enable:true}}
    chartArea={{border:{width:0}}}
    legendSettings={{background:'white'}}
     primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
   >
      <Inject services={[Legend,Category,StackingColumnSeries,Tooltip]}/>
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item,index) => <SeriesDirective key={index} {...item}/>)}
      </SeriesCollectionDirective>
   </ChartComponent>
  )
}

export default Stacked