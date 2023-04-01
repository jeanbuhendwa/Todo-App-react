import { Routes, Route } from 'react-router-dom';
import Home from '@/routes/Home';
import About from '@/routes/About';
import Profile from '@/routes/Profile';
import Login from '@/routes/Login';
import NotMatch from '@/routes/NotMatch';
import Layout from '@/components/Layout';

const TodoApp = () => (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  </>
);
export default TodoApp;
