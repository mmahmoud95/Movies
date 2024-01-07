import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./Pages/Movies/Movies";
import { Favorites } from "./Pages/Favorties";
import { Header } from "./Component/Header";
import { MovieDetails } from "./Pages/Movies/MovieDetails";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route index element={<Movies />} />
                    <Route path='/favorites' element={<Favorites />} />
                    <Route path='/movie/:id' element={<MovieDetails />} />

                    {/* <Route path='*' element={<NotFound />} /> */}
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
