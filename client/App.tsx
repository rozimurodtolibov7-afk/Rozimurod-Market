import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Marketplace from "./pages/Marketplace";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Placeholder from "./pages/Placeholder";
import NotFound from "./pages/NotFound";
import {
  ShoppingCart,
  MessageSquare,
  BarChart3,
  Settings,
  Heart,
} from "lucide-react";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Placeholder routes */}
          <Route
            path="/sell"
            element={
              <Placeholder
                title="Start Selling"
                description="Set up your creator profile and start selling digital products. This feature is coming soon!"
              />
            }
          />
          <Route
            path="/trending"
            element={
              <Placeholder
                title="Trending Products"
                description="Discover the most popular and trending digital products from creators worldwide."
              />
            }
          />
          <Route
            path="/hot-deals"
            element={
              <Placeholder
                title="Hot Deals"
                description="Check out amazing limited-time offers on digital products."
              />
            }
          />
          <Route
            path="/product/:id"
            element={
              <Placeholder
                title="Product Details"
                description="View detailed information about this digital product."
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Placeholder
                title="My Profile"
                description="Manage your profile, settings, and personal information."
                icon={<Settings className="w-16 h-16" />}
              />
            }
          />
          <Route
            path="/my-products"
            element={
              <Placeholder
                title="My Products"
                description="Manage your digital products and sales."
                icon={<ShoppingCart className="w-16 h-16" />}
              />
            }
          />
          <Route
            path="/wallet"
            element={
              <Placeholder
                title="Wallet"
                description="Manage your digital wallet and transaction history."
                icon={<ShoppingCart className="w-16 h-16" />}
              />
            }
          />
          <Route
            path="/chat"
            element={
              <Placeholder
                title="Messages"
                description="Real-time chat with buyers and sellers."
                icon={<MessageSquare className="w-16 h-16" />}
              />
            }
          />
          <Route
            path="/admin"
            element={
              <Placeholder
                title="Admin Dashboard"
                description="Analytics, user management, and platform settings."
                icon={<BarChart3 className="w-16 h-16" />}
              />
            }
          />
          <Route
            path="/wishlist"
            element={
              <Placeholder
                title="Wishlist"
                description="Save your favorite products for later."
                icon={<Heart className="w-16 h-16" />}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Placeholder
                title="Shopping Cart"
                description="Review and checkout your selected items."
                icon={<ShoppingCart className="w-16 h-16" />}
              />
            }
          />
          <Route
            path="/settings"
            element={
              <Placeholder
                title="Settings"
                description="Customize your account preferences and security settings."
                icon={<Settings className="w-16 h-16" />}
              />
            }
          />
          <Route
            path="/forgot-password"
            element={
              <Placeholder
                title="Forgot Password"
                description="Reset your password to regain access to your account."
              />
            }
          />
          <Route
            path="/creator-guide"
            element={
              <Placeholder
                title="Creator Guide"
                description="Learn how to create, sell, and succeed on Rozimurod Market."
              />
            }
          />
          <Route
            path="/support"
            element={
              <Placeholder
                title="Support"
                description="Get help from our support team."
              />
            }
          />
          <Route
            path="/about"
            element={
              <Placeholder
                title="About Us"
                description="Learn more about Rozimurod Market and our mission."
              />
            }
          />
          <Route
            path="/privacy"
            element={
              <Placeholder
                title="Privacy Policy"
                description="Understand how we protect your data and privacy."
              />
            }
          />
          <Route
            path="/terms"
            element={
              <Placeholder
                title="Terms of Service"
                description="Review the terms and conditions for using Rozimurod Market."
              />
            }
          />

          {/* Catch-all 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
