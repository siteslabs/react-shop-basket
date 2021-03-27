import "./App.css"
import Cart from "./components/Cart"
import Header from "./components/Header"
import { Provider } from "react-redux"
import store from "./store"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Cart />
      </div>
    </Provider>
  )
}

export default App
