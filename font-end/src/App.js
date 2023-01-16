import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import { baseUrl } from "./data/base_url";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
  Line,
  Home,
  OrderCreate
} from "./pages";
import "./App.css";
import SideBar from "./components/Sidebar";
import { useStateContext } from "./context/ContextProvider";

const App = () => {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
    loadingOrders,
    setLoadingOrders,
    loadingStock,
    setLoadingStock,
    loadingCustomers,
    setLoadingCustomers,
    orderData,
    setOrderData,
    customerData,
    setCustomerData,
    productData,
    setProductData,
    stockData,
    setStockData,
    ordersError,
    setOrdersError,
    customersError,
    setCustomersError,
    stockError,
    setStockError
  } = useStateContext();


  useEffect(() => {
    fetch(`${baseUrl}orders`)
      .then((res) => {
        if (res.ok) {
          return res
        }
        else {
          var error = new Error(
            `Error ${res.status}: ${res.statusText}`
          );
          error.response = res
          throw error
        }
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(`THIS IS THE ORDERS DATA: ${data}`)
        setOrderData(data);
        setLoadingOrders(false);
        setOrdersError(null)
      })
      .catch((err) => {
        setOrdersError(err);
        setLoadingOrders(false);
        setOrderData([]);
        console.log(err);
      });
    // fetch customers data
    fetch(`${baseUrl}customers`)
      .then((res) => {
        if (res.ok) {
          return res
        }
        else {
          var error = new Error(
            `Error ${res.status}: ${res.statusText}`
          );
          error.response = res
          throw error
        }
      })
      .then((res) => res.json())
      .then((data) => {
        setCustomerData(data);
        setLoadingCustomers(false);
        setCustomersError(null)
      })
      .catch((err) => {
        setCustomersError(err);
        setLoadingCustomers(false);
        setCustomerData([]);
      });

  }, [])
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent
              content="Settings"
              position="Top"
              onClick={() => {
                setThemeSettings(true);
              }}
            >
              <button>
                <FiSettings
                  className="text-5xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                  type="button"
                  style={{ background: currentColor, borderRadius: "50%" }}
                />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <SideBar />
            </div>
          ) : (
            <div className="w-o dark:bg-secondary-bg">
              <SideBar />{" "}
            </div>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen  w-full ${activeMenu ? "md:ml-72" : "flex-2"
              }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>

            <div>
              {themeSettings && <ThemeSettings />}
              <Routes>
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                {/**Pages */}
                <Route exact path="/orders" element={<Orders data={orderData} isLoading={loadingOrders} errMess={ordersError} />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers data={customerData} isLoading={loadingCustomers} errMess={customersError} />} />

                {/**Apps */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/** Charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route
                  path="/color-mapping"
                  element={<ColorMapping />}
                />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
                <Route path="/orders/create" element={<OrderCreate />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
