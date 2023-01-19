import React from 'react'
import {GridComponent,ColumnsDirective,
  ColumnDirective,Page,Search,Inject,Toolbar} from '@syncfusion/ej2-react-grids'
import { employeesData, productGrid } from '../data/dummy'
import {Header} from '../components'

const Employees = ({ data, isLoading, errMess }) => {
  console.log(data);
  return (
    <div className='m-2 md:-10 p-2 md:p-10 bg-white rounded-3xl'><Header title="Products" category="Page" />
    <GridComponent
        dataSource={data}
    allowPaging
    allowSorting
    width="auto"
    toolbar={['Search']}>
      <ColumnsDirective>
          {productGrid.map((item, index) => (
        <ColumnDirective
        key={index}
        {...item}
        />
      ))}
      </ColumnsDirective> 
      <Inject services={[Page,Search,Toolbar]}/>
    </GridComponent>
    </div>
  )
}

export default Employees