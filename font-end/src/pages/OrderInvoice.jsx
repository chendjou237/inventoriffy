import React, { Fragment, useState } from 'react'
import { PDFViewer, Document, Page, StyleSheet, Image } from "@react-pdf/renderer"
import { invoiceData } from '../data/dummy'
import product9 from '../data/product9.jpg'
import { InvoiceNo, BillTo, InvoiceThankYouMsg, InvoiceItemsTable, InvoiceTitle } from '../components'

const styles = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica',
        fontSize: 11,
        paddingTop: 30,
        paddingLeft: 60,
        paddingRight: 60,
        lineHeight: 1.5,
        flexDirection: 'column',
    },
    logo: {
        width: 74,
        height: 66,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
});
const OrderInvoice = () => {
    const [invoice, setInvoice] = useState(invoiceData)
    return (
        // <div>OrderInvoice</div>
        <Fragment>
            <PDFViewer>
                <Document>
                    <Page size="A4" style={styles.page} >
                        <Image style={styles.logo} src="https://m.media-amazon.com/images/I/915W5KTYTOL._AC_UL320_.jpg" />
                        <InvoiceTitle title='Invoice' />
                        <InvoiceNo invoice={invoice} />
                        <BillTo invoice={invoice} />
                        <InvoiceItemsTable invoice={invoice} />
                        <InvoiceThankYouMsg />
                    </Page>
                </Document>
            </PDFViewer>

        </Fragment>
    )
}

export default OrderInvoice