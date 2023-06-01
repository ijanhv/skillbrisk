import '@/styles/globals.css'
import newRequest from '@/utils/newRequest';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();

  
  return ( <QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
  </QueryClientProvider>)
}
