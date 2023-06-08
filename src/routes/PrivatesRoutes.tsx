import {Routes, Route} from 'react-router-dom'
import MasterLayout from '../shared/layouts/MasterLayout'
import Client from '../modules/client'
const PrivatesRoutes = () => {
  return (
    <Routes>
       <Route element={<MasterLayout />}>
           <Route path='/' element={<Client />}/>
       </Route>
    </Routes>    
  )
}

export default PrivatesRoutes