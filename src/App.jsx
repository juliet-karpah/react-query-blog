import SearchForm from "./components/Search";
import Books from "./components/Books";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}/>
      <SearchForm />
      <Books />
    </QueryClientProvider>
  );
}

export default App;
