import { React } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import QuestionnairePage from './pages/QuestionnairePage/QuestionnairePage';
import CompletedPage from './pages/CompletedPage/CompletedPage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header></Header>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route
              path="/questionnaire"
              exact
              element={<QuestionnairePage />}
            />
            <Route path="/submit" exact element={<CompletedPage />} />
          </Routes>
          <Footer></Footer>
        </div>
      </BrowserRouter>
    </Provider>
  );
}