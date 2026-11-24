import { Toaster } from "@/features/portfolio/ui/toaster";
import { Toaster as Sonner } from "@/features/portfolio/ui/sonner";
import { TooltipProvider } from "@/features/portfolio/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./features/portfolio/pages/MainPage";
import { Missing } from "./features/portfolio/pages/Missing";
import { LanguageProvider } from "./features/portfolio/locales/context/LanguageContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<MainPage />}
            />

            <Route
              path="*"
              element={<Missing />}
            />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
