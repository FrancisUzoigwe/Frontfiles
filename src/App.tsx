import { RouterProvider } from "react-router-dom";
import { mainRoute } from "./router/mainRoute";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from "./global/Store";
import { Provider } from "react-redux";

const App = () => {
  const persistor = persistStore(store);
  return (
    <div className="font-Poppins">
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <RouterProvider router={mainRoute} />
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
