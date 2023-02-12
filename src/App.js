import react from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Blog from './pages/Blog';
import Home from './pages/Home';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                {/* path="*" fonctionne si url à rien de declarer au dessus */}
                <Route path="*" element={<Home />} />
            </Routes>
                
        </BrowserRouter>
    );
};

export default App;

