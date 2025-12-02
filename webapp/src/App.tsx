import AllIdeasPage from "./pages/AllIdeasPage"
import { TrpcProvider } from "./lib/trpc"

const App = () => {
  return (
    <TrpcProvider>
      <AllIdeasPage />
    </TrpcProvider>
  )
}

export default App
