import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';

// css
import './App.css'

// components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Create from './pages/create/Create';
import Dashboard from './pages/dashboard/Dash';
import Login from './pages/login/Login';
import Project from './pages/project/Project';
import Signup from './pages/signup/Signup';
import Landing from './pages/landing/Landing';
import Blog from './pages/blog/Blog';
import OnlineUsers from './components/OnlineUsers';
import NotFound404 from './pages/NotFound404/NotFound404';
import Footer from './components/Footer';
import Prediction from "./pages/ia/Prediction";
import General from "./pages/dashboard2/General";
import DashboardLayout from "./pages/dashboard2/DashboardLayout";
import { useState } from "react";
import theme from "./theme";
import { ThemeProvider } from '@material-ui/core';
import Dash from "./pages/dashboard/Dash";


function App() {

	const { user, authIsReady } = useAuthContext()

	const [currentContent, setCurrentContent] = useState(1)

	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				{authIsReady && (
					<BrowserRouter>

						<div >
							<Navbar />
							<Routes>
								<Route
									path="/"
									element={<Landing />}
								/>

								<Route
									path="/dd"
									element={<Dash />}
								/>
								<Route
									path="/dashboard"
									element={<DashboardLayout currentContent={currentContent} scC={setCurrentContent} />}
								/>
								<Route
									path="/service"
									element={<Prediction />}
								/>
								<Route
									path="/landing"
									element={!user ? <Landing /> : <Landing />}
								/>
								<Route
									path="/signup"
									element={!user ? <Signup /> : <Navigate to="/" />}
								/>
								<Route
									path="/login"
									element={!user ? <Login /> : <Navigate to="/" />}
								/>
								<Route
									path="/create"
									element={user ? <Create /> : <Navigate to="/login" />}
								/>
								<Route
									path="/projects/:id"
									element={user ? <Project /> : <Navigate to="/login" />}
								/>
								<Route
									path="/blog"
									element={user ? <Blog /> : <Navigate to="/blog" />}
								/>
								<Route
									path="*"
									element={<NotFound404 />}
								/>
							</Routes>
						</div>
					</BrowserRouter>
				)}
				<Footer />
			</ThemeProvider>

		</div>
	);
}

export default App
