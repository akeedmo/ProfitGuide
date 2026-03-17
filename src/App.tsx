/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Freelancing from './pages/Freelancing';
import AffiliateMarketing from './pages/AffiliateMarketing';
import ContentCreation from './pages/ContentCreation';
import Ecommerce from './pages/Ecommerce';
import DigitalInvestments from './pages/DigitalInvestments';
import ToolsResources from './pages/ToolsResources';
import Articles from './pages/Articles';
import TipsGuides from './pages/TipsGuides';
import FAQ from './pages/FAQ';
import About from './pages/About';
import Settings from './pages/Settings';
import PostDetail from './pages/PostDetail';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="freelancing" element={<Freelancing />} />
              <Route path="affiliate-marketing" element={<AffiliateMarketing />} />
              <Route path="content-creation" element={<ContentCreation />} />
              <Route path="ecommerce" element={<Ecommerce />} />
              <Route path="digital-investments" element={<DigitalInvestments />} />
              <Route path="tools-resources" element={<ToolsResources />} />
              <Route path="tips-guides" element={<TipsGuides />} />
              <Route path="articles" element={<Articles />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="about" element={<About />} />
              <Route path="settings" element={<Settings />} />
              <Route path="post/:id" element={<PostDetail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}
