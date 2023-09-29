import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

export default function Home() {
  return (
    <div className='flex '>
      <Sidebar/>
      <div className='w-full'>
        <Navbar/>
        <Dashboard/>
      </div>
    </div>
  )
}
