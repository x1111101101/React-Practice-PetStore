import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from "./page/MainPage"
import ProductPage from "./page/ProductPage"
import LoginPage from "./page/LoginPage"
import { AppContext, AppContextDefault } from "./context/AppContext";

export default function App(props) {
    console.log(AppContext)
	return (
		<div className='App'>
			<BrowserRouter>
				<AppContext.Provider value={AppContextDefault}>
					<Routes>
						<Route path="/" element={<MainPage />}></Route>
						<Route path="/main/*" element={<MainPage />}></Route>
						<Route path="/login/*" element={<LoginPage />}></Route>
						<Route path="/product/*" element={<ProductPage />}></Route>
						<Route path="*" element={<MainPage />}></Route> {/* Not Found */}
					</Routes>
				</AppContext.Provider>
			</BrowserRouter>
		</div>
	);
}