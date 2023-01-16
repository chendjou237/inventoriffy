import React from 'react'
import {
  GridComponent, ColumnsDirective,
  ColumnDirective, Page, Filter, Sort, Group,
  Reorder, Resize, Edit, Toolbar, Inject,
  ContextMenu, ExcelExport, PdfExport,
} from '@syncfusion/ej2-react-grids'
import { ordesData, contextMenuItem, ordersGrid } from '../data/dummy'
import { Header } from '../components'
import { Link } from 'react-router-dom'
const Orders = (props) => {
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          {/* <Loading /> */}
        </div>
      </div>
    );
  }
  else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess} </h4>
        </div>
      </div>
    );

  }
  else {
    return (
      <div className='m-2 md:-10 p-2 md:p-10 bg-white rounded-3xl'><Header title="Orders" category="Page" />
        <div className="mt-8 mb-8 flex gap-x-4 ml-auto">
          <Link to="/orders/create">
            <a
              className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
            >
              Add Order{' '}
              <span className="text-indigo-200" aria-hidden="true">
                &rarr;
              </span>
            </a>
          </Link>
        </div>
        <GridComponent id='gridcomp'
          dataSource={props.data}
          allowPaging
          allowSorting>
          <ColumnsDirective>
            {ordersGrid.map((item, index) => (
              <ColumnDirective
                key={index}
                {...item}
              />
            ))}
          </ColumnsDirective>
          <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
        </GridComponent>
      </div>
    )
  }

}

export default Orders