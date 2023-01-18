import React, { useEffect, useState } from 'react'
import { dummmyProduct, paymentMethods } from '../data/dummy'

const OrderCreate = () => {
    const [maxQuantity, setmaxQuantity] = useState(0)
    const [paymentMethod, setPaymentMethod] = useState("")
    useEffect(() => {
        var e = document.getElementById("product");
        var maxQ = parseInt(e.value)
        setmaxQuantity(dummmyProduct[maxQ].quantity);
        document.getElementById("quantity").value = "1"
    }, []);
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
        // alert(e.target.value)
        setPaymentMethod(e.target.value)
    }
    return (
        <>
            <div className="mt-10 sm:mt-0  max-h-screen w-full px-20">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="mt-5 md:col-span-2 md:mt-0">
                        <form action="#" method="POST">
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
                                                className="mt-1 block w-full h-9  rounded-md border-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                                        </div>) : (
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
                                                </div>
                                        )}


                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                                                State / Province
                                            </label>
                                            <input
                                                type="text"
                                                name="region"
                                                id="region"
                                                autoComplete="address-level1"
                                                className="mt-1 block w-full rounded-md h-9  border-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                                ZIP / Postal code
                                            </label>
                                            <input
                                                type="text"
                                                name="postal-code"
                                                id="postal-code"
                                                autoComplete="postal-code"
                                                className="mt-1 block w-full rounded-md border-gray-500 h-9  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
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


        </>
    )

}

export default OrderCreate