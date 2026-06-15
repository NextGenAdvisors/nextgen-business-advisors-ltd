import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index.tsx";
import AuditTaxation from "./pages/AuditTaxation.tsx";
import FinancialStrategy from "./pages/FinancialStrategy.tsx";
import NotFound from "./pages/NotFound.tsx";
import { LockGate } from "hotpax";

const queryClient = new QueryClient();

// AnimatePresence needs useLocation — it must live inside BrowserRouter
const AnimatedRoutes = () => {
  const location = useLocation()
  return (
    <LockGate hasPaid={false}
      siteName="NextGen Business Advisors Ltd"
      errorCode="404"
      supportEmail="danjuma@kavaradigital.online"
      supportUrl="https://kavaradigital.online/contacts"
      supportUrlLabel="Visit our Website"
      footerText="Kavara Digital Global LTD">

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Index />} />
          <Route path="/audit-taxation" element={<AuditTaxation />} />
          <Route path="/financial-strategy" element={<FinancialStrategy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </LockGate>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
