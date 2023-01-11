import React from 'react'
import {ChartsHeader,LineChart,Header} from '../../components'
import { ChartComponent, 
  SeriesCollectionDirective,SeriesDirective,
  Inject,DateTime,Legend,Tooltip ,SplineAreaSeries} from '@syncfusion/ej2-react-charts'
import { areaCustomSeries,areaPrimaryYAxis,areaPrimaryXAxis } from '../../data/dummy'
import { useStateContext } from '../../context/ContextProvider'
const Area = () => {
  const {currentMode} = useStateContext();
  return (
      <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
        <Header title="Inflation Rate In Percentage" category="Area"/>
         <div className="w-full">
         <ChartComponent
  id='area-chart'
  height='420px'
  primaryXAxis={areaPrimaryXAxis}
  primaryYAxis={areaPrimaryYAxis}
  chartArea={{border:{width:0}}}
  
  background={currentMode==="Dark"?'#33373E':'#fff'}
  >
   <Inject services={[SplineAreaSeries,DateTime,Legend]}/>
   <SeriesCollectionDirective>
     {areaCustomSeries.map((item,index)=>
       <SeriesDirective key={index} {...item}/>
     )}
   </SeriesCollectionDirective>
  </ChartComponent>
         </div>
      </div>
  
  )
}



export default Area
