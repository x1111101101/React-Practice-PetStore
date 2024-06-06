import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from "./page/MainPage"
import ProductPage from "./page/ProductPage"
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
						<Route path="/product/*" element={<ProductPage />}></Route>
						{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
						<Route path="*" element={<MainPage />}></Route>
					</Routes>
				</AppContext.Provider>
			</BrowserRouter>
		</div>
	);
}