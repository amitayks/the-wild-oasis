import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { DarkModeProvider } from "./context/DarkModeContext";
import GlobalStyle from "./styles/GlobalStyle";
import { AppLayout } from "./ui/AppLayout";
import { ProtectedRoute } from "./ui/ProtectedRoute";
import { Spinner } from "./ui/Spinner";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Bookings = lazy(() => import("./pages/Bookings"));
const Cabins = lazy(() => import("./pages/Cabins"));
const Users = lazy(() => import("./pages/Users"));
const Settings = lazy(() => import("./pages/Settings"));
const Account = lazy(() => import("./pages/Account"));
const Login = lazy(() => import("./pages/Login"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Booking = lazy(() => import("./pages/Booking"));
const Checkin = lazy(() => import("./pages/Checkin"));

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 0,
		},
	},
});

function App() {
	return (
		<DarkModeProvider>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} />
				<GlobalStyle />
				<BrowserRouter>
					<Suspense fallback={<Spinner />}>
						<Routes>
							<Route
								element={
									<ProtectedRoute>
										<AppLayout />
									</ProtectedRoute>
								}
							>
								<Route index element={<Navigate replace to="dashboard" />} />
								<Route path="dashboard" element={<Dashboard />} />
								<Route path="bookings" element={<Bookings />} />
								<Route path="bookings/:bookingId" element={<Booking />} />
								<Route path="checkin/:bookingId" element={<Checkin />} />
								<Route path="cabins" element={<Cabins />} />
								<Route path="users" element={<Users />} />
								<Route path="settings" element={<Settings />} />
								<Route path="account" element={<Account />} />
							</Route>
							<Route path="login" element={<Login />} />
							<Route path="*" element={<PageNotFound />} />
						</Routes>
					</Suspense>
				</BrowserRouter>

				<Toaster
					position="top-center"
					gutter={12}
					containerStyle={{ margin: "8px" }}
					toastOptions={{
						success: { duration: 3000 },
						error: { duration: 5000 },
						style: {
							fontSize: "16px",
							maxWidth: "500px",
							padding: "16px 24px",
							backgroundColor: "--color-grey-0",
							color: "--color-grey-700",
						},
					}}
				/>
			</QueryClientProvider>
		</DarkModeProvider>
	);
}

export default App;
