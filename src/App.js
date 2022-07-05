import {lazy, Suspense} from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';
import Dashboard from "./components/admin/dashbourd";

import SuspenseLoading from './components/modal/suspenseLoading'

const UsersSection = lazy(() => import('./components/users'));
const ArticlesSection = lazy(() => import('./components/articles'));

export default function App() {
  return (
    <Routes>
      <Route path="/admin/dashboard" element={<Dashboard><Suspense fallback={<SuspenseLoading />}></Suspense></Dashboard>} />
      <Route path="/admin/users" element={<Dashboard><Suspense fallback={<SuspenseLoading />}><UsersSection /></Suspense></Dashboard>} />
      <Route path="/admin/articles" element={<Dashboard><Suspense fallback={<SuspenseLoading />}><ArticlesSection /> </Suspense></Dashboard>} />
      <Route path="*" element={<Navigate to="/admin/dashboard" />} />
  </Routes>
    
  )
}
