// import logo from './logo.svg';
import './App.css';
import { Route } from '../node_modules/react-router-dom/index';
import { Routes } from '../node_modules/react-router-dom/index';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PostListPage from './pages/PostListPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import Hello from './pages/Hello';
import SimpleBottomNavigation from './pages/botton';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App =() => {
  return (
    <Routes>
      <Route path="/" element={<PostListPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/home" element={<Hello />} />
      <Route path="/botton" element={<SimpleBottomNavigation />} />
      <Route path="/@:username">
        <Route index element ={<PostListPage />} />
        <Route path=":postId" element={<PostPage />} />
        </Route>
        
    </Routes>
  );
};

export default App;
