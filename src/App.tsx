
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Index from "./pages/Index";
import TransactionDetail from "./pages/TransactionDetail";
import TrackingPage from "./pages/TrackingPage";
import ComplaintPage from "./pages/ComplaintPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Index />} />
            <Route path="transacoes/:id" element={<TransactionDetail />} />
            <Route path="rastreamento" element={<TrackingPage />} />
            <Route path="denuncias" element={<ComplaintPage />} />
            <Route path="transacoes" element={<Index />} />
            <Route path="orgaos" element={<Index />} />
            <Route path="relatorios" element={<Index />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
