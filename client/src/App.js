import './App.css';
import Layout from './Layout';
import BlogPost from './components/BlogPost';
import { Route, Routes } from "react-router-dom"
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import { UserContextProvider } from './components/UserContext';
import CreateBlogPost from './components/CreateBlogPost';
import BlogPostPage from './components/BlogPostPage';
import EditPost from './components/EditPost';
import UserPosts from './components/UserPosts';
import MyProfile from './components/MyProfile';

function App() {





  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path={'/login'} element={<LoginPage />} />
            <Route path={'/register'} element={<RegisterPage />} />
            <Route path={'/create'} element={<CreateBlogPost />} />
            <Route path={'/blogpost/:id'} element={<BlogPostPage />} />
            <Route path={'/edit/:id'} element={<EditPost/>} />
            <Route path={'/user/:id'} element={<UserPosts/>} />
            <Route path={'/my-profile/:id'} element={<MyProfile/>} />
          </Route>
        </Routes>
      </UserContextProvider>

    </>
  );
}

export default App;
