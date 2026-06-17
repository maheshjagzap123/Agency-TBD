import { motion } from 'framer-motion'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import StudentPage from './pages/StudentPage'
import BusinessPage from './pages/BusinessPage'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-surface text-text">
        <Header />
        <main>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/student" element={<StudentPage />} />
              <Route path="/business" element={<BusinessPage />} />
              <Route path="/*" element={<HomePage />} />
            </Routes>
          </motion.div>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
