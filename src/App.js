import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import theme from './theme';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CoursesPage from './pages/CoursesPage';
import CourseDetail from './pages/CourseDetail';
import CreateCourse from './pages/CreateCourse';
import PrivateRoute from './components/common/PrivateRoute';
import AdminRoute from './components/common/AdminRoute';
import InstructorRoute from './components/common/InstructorRoute';
import WhyNovaLearn from './pages/WhyNovaLearn';
import UseCases from './pages/UseCases';
import Pricing from './pages/Pricing';
import Resources from './pages/Resources';
import JoinUs from "./pages/JoinUs";
import MyProfile from "./pages/MyProfile";
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/why-novalearn" element={<WhyNovaLearn />} />
                <Route path="/usecases" element={<UseCases />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/joinus" element={<JoinUs />} />
                <Route path="/myprofile" element={<MyProfile />} />
                <Route path="/settings-page" element={<SettingsPage />} />
                <Route path="/courses-details" element={<CourseDetail />} />

                {/* Private Routes */}
                <Route path="/dashboard" element={<PrivateRoute />}>
                  <Route index element={<Dashboard />} />
                </Route>

                {/* Instructor Routes */}
                <Route path="/create-course" element={<InstructorRoute />}>
                  <Route index element={<CreateCourse />} />
                </Route>

                {/* Admin Routes */}
                <Route path="/admin" element={<AdminRoute />}>
                  <Route index element={<div>Admin Dashboard</div>} />
                </Route>
              </Routes>
            </Router>
          </ThemeProvider>
        </PersistGate>
      </Provider>
  );
}

export default App;
