import { Suspense } from "react";
import { useRoutes, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./components/admin/AdminLayout";
import AdminGuard from "./components/auth/AdminGuard";
import Dashboard from "./components/admin/pages/Dashboard";
import ContentManager from "./components/admin/pages/ContentManager";
import MediaManager from "./components/admin/pages/MediaManager";
import Settings from "./components/admin/pages/Settings";
import BlogManager from "./components/admin/pages/BlogManager";
import Home from "./components/home";
import About from "./components/about";
import BlogLayout from "./components/blog/BlogLayout";
import BlogList from "./components/blog/BlogList";
import BlogPost from "./components/blog/BlogPost";
import IndividualsPage from "./components/IndividualsPage";
import MerchantsPage from "./components/MerchantsPage";
import ExchangesPage from "./components/ExchangesPage";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import UserLayout from "./components/layouts/UserLayout";
import UserDashboard from "./components/user/UserDashboard";
import WhitepaperPage from "./components/WhitepaperPage";
import routes from "tempo-routes";

function App() {
  return (
    <div className="app">
      <Suspense
        fallback={
          <div className="h-screen w-screen flex items-center justify-center">
            Loading...
          </div>
        }
      >
        {/* Tempo routes */}
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}

        {/* Main Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<BlogLayout />}>
            <Route index element={<BlogList />} />
            <Route path=":slug" element={<BlogPost />} />
          </Route>
          <Route path="/individuals" element={<IndividualsPage />} />
          <Route path="/merchants" element={<MerchantsPage />} />
          <Route path="/exchanges" element={<ExchangesPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/whitepaper" element={<WhitepaperPage />} />

          {/* User Routes */}
          <Route path="/dashboard/*" element={<UserLayout />}>
            <Route index element={<UserDashboard />} />
            <Route path="wallet" element={<UserDashboard />} />
            <Route path="shop" element={<div>Shop Coming Soon</div>} />
            <Route
              path="settings"
              element={<div>User Settings Coming Soon</div>}
            />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin/*" element={<AdminGuard />}>
            <Route element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="content" element={<ContentManager />} />
              <Route path="media" element={<MediaManager />} />
              <Route path="settings" element={<Settings />} />
              <Route path="blog" element={<BlogManager />} />
            </Route>
          </Route>

          {/* Add Tempo routes */}
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" element={<div />} />
          )}

          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
