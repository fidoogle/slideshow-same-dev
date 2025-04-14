import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { HomePage } from '@/pages/HomePage';
import { useEffect } from 'react';

function App() {
  // Ensure dark mode is applied
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<div className="container mx-auto py-12 text-center">Page Not Found</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
