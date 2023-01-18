import React, { useEffect, useState } from 'react'
import { dummmyProduct, paymentMethods } from '../data/dummy'
import { useStateContext } from '../context/ContextProvider'
import { baseUrl } from '../data/base_url'
import { useNavigate } from "react-router-dom"
const OrderCreate = () => {
    const {
        setOrderData,
        ordersError,
        setOrdersError,
    } = useStateContext();
    const [maxQuantity, setmaxQuantity] = useState(0)
    const [paymentMethod, setPaymentMethod] = useState("")

    const [showModal, setShowModal] = useState(true);
    useEffect(() => {
        var e = document.getElementById("product");
        var maxQ = parseInt(e.value)
        setmaxQuantity(dummmyProduct[maxQ].quantity);
        document.getElementById("quantity").value = "1"
    }, []);
    // handler functions
    function handleSelectChange() {
        console.log("Triggered")
        var e = document.getElementById("product");
        var maxQ = parseInt(e.value);
        setmaxQuantity(dummmyProduct[maxQ].quantity);
        console.log(dummmyProduct[maxQ].quantity)
        document.getElementById("quantity").value = "1"

    }
    function handleQuantityChange() {
        var e = document.getElementById("quantity");
        var maxQ = parseInt(e.value);
        if (maxQ > maxQuantity) {
            document.getElementById("quantity").value = maxQuantity
        }
    }
    function handlePaymentMethodChange(e) {
        setPaymentMethod(e.target.value)
    }
    // handle submit
    function handleOrderSubmit(e) {
        e.preventDefault()

    }
    // create arror post function
    const postOrder = ({ paymentMethod, transactionAmount, customerName, customerNumber, customerEmail, product, quantity }) => {
        const newTransaction = {
            paymentMethod: paymentMethod,
            transactionAmount: transactionAmount,
        }
        newTransaction.date = new Date().toISOString();

        const newOrder = {
            customerName: customerName,
            customerEmail: customerEmail,
            customerNumber: customerNumber,
            productId: product.id,
            productName: product.name,
            quantity: parseInt(document.getElementById("quantity").value)
        }
        // posting payment transaction
        fetch(baseUrl + "transactions", {
            method: "POST",
            body: JSON.stringify(newTransaction),
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "same-origin",
        })
            .then(response => {
                if (response.ok) {
                    return response
                }
                else {
                    var error = new Error(
                        "Error " + response.status + ": " + response.statusText
                    );
                    error.response = response;
                    throw error;
                }
            },
                (error) => {
                    var errmess = new Error(error.message);
                    throw errmess;
                }
            )
            .then((response) => response.json())
            .then((response) => {
                newOrder.date = new Date().toISOString();
                newOrder.transactionId = response.id;
                fetch(baseUrl + "orders", {
                    method: "POST",
                    body: JSON.stringify(newTransaction),
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "same-origin",
                })
                    .then(response => {
                        if (response.ok) {
                            return response
                        }
                        else {
                            var error = new Error(
                                "Error " + response.status + ": " + response.statusText
                            );
                            error.response = response;
                            throw error;
                        }
                    },
                        (error) => {
                            var errmess = new Error(error.message);
                            throw errmess;
                        }
                    )
                    .then((response) => response.json())
                    .then((response) => {

                    })
                    .catch((error) => {
                        console.log("post comments", error.message);
                        setShowModal(true)
                    });
            })
            .catch((error) => {
                console.log("post comments", error.message);
                setShowModal(true)
            });

    }

    return (
        <>
            <div className="mt-10 sm:mt-0  max-h-screen w-full px-20">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="mt-5 md:col-span-2 md:mt-0">
                        <form method="POST" onSubmit={handleOrderSubmit}>
                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="px-4 py-5 sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="customer-name" className="block text-sm font-medium text-black" >
                                                Customer Name
                                            </label>
                                            <input
                                                type="text"
                                                name="customer-name"
                                                id="customer-name"
                                                placeholder='Enter Customer Name'
                                                required
                                                className="mt-1 block w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-9 px-5"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone-number"
                                                id="phone-number"
                                                required
                                                placeholder='Enter Phone Number'
                                                autoComplete="phone"
                                                className="mt-1 block w-full h-9 rounded-md border-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-4">
                                            <label htmlFor="customer-email-address" className="block text-sm font-medium text-gray-700">
                                                Email address
                                            </label>
                                            <input
                                                type="text"
                                                name="customer-email-address"
                                                id="customer-email-address"
                                                autoComplete="email"
                                                placeholder='Enter Customer Address'
                                                className="mt-1 block w-full h-9 px-5 rounded-md border-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="product" className="block text-sm font-medium text-gray-700">
                                                Products
                                            </label>
                                            <select
                                                id="product"
                                                name="product"
                                                autoComplete="product"

                                                className="mt-1 block w-full h-9 rounded-md border border-gray-500 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                onChange={() => handleSelectChange()}
                                            >
                                                {dummmyProduct.map((product, index) => (
                                                    <option key={product.id} value={index}>{product.name} <span>({product.quantity} available)</span> </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="col-span-6">
                                            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                                                Quantity
                                            </label>
                                            <input
                                                type="number"
                                                name="quantity"
                                                id="quantity"
                                                min={1}
                                                max={maxQuantity}
                                                accept
                                                onChange={() => handleQuantityChange()}
                                                autoComplete="street-address"
                                                className="mt-1 block w-full rounded-md h-9 px-5 border-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6" onChange={handlePaymentMethodChange}>
                                            <p className="block text-sm font-medium text-gray-700 mb-5">
                                                Payment Method
                                            </p>
                                            {
                                                paymentMethods.map((method) => (
                                                    <div key={method.id} class="flex items-center mb-4">
                                                        <input type="radio" value={method.name} name="paymentMethod" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <p class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{method.name}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>

                                        {(paymentMethod === "Mtn Mobile Money" || paymentMethod === "Orange Money") ? (< div className="col-span-6">
                                            <label htmlFor="payment-number" className="block text-sm font-medium text-gray-700">
                                                Payment Number
                                            </label>
                                            <input
                                                type="tel"
                                                name="payment-number"
                                                id="payment-number"
                                                minLength={9}
                                                maxLength={9}
                                                required
                                                placeholder='Please enter payment number'
                                                autoComplete="street-address"
                                                className="mt-1 block w-full rounded-md h-9 px-5 border-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>) : ((paymentMethod === "Bank Payment") ?
                                            < div className="col-span-6">
                                                <label htmlFor="bank-account-number" className="block text-sm font-medium text-gray-700">
                                                    Bank Account Number
                                                </label>
                                                <input
                                                        type="tel"
                                                        name="bank-account-number"
                                                        id="bank-account-numberr"
                                                        minLength={9}
                                                        maxLength={9}
                                                        required
                                                        placeholder='Please bank details here '
                                                        autoComplete="street-address"
                                                        className="mt-1 block w-full rounded-md h-9 px-5 border-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                </div> : null
                                        )}
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-200" />
                </div>
            </div>


            {/* <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                Toggle modal
            </button> */}
            {showModal && (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Modal Title
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                        There was an error performing the transaction. Please try again later
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                                    {/* <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button> */}
                                    <button
                                        className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Try again later
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            )}

        </>
    )

}

export default OrderCreate