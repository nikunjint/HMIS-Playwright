import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";
import { Routes } from "./routing/Mainroute";
import Common from "./components/common";
import ResizeObserver from "resize-observer-polyfill";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: (failureCount, error) => {
        if (
          error?.response?.status === 401 ||
          error?.response?.status === 403 ||
          error?.response?.status === 404
        ) {
          return false;
        }
        return failureCount < 1;
      },
      onError: (err) =>
        Common.notifications("Error", `${err?.message}`, "error"),
    },
    mutations: {
      onError: (err) =>
        Common.notifications("Error", `${err?.message}`, "error"),
    },
  },
});
function App() {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    if (containerRef.current) {
      const observer = new ResizeObserver((entries) => {
        debounce(() => {
          // handle resize
        }, 500)();
      });

      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }
  }, []);

  function debounce(func, delay) {
    let timerId;
    return function (...args) {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
  return (
    <div className="App" ref={containerRef}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Routes} />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </div>
  );
}

export default App;
