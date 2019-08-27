import Home from './pages/Home/Home'
import Users from './pages/Users/Users'

export default [
  {
    ...Home,
    path: '/',
    exact: true,
  },
  {
    ...Users,
    path: '/Users',
  }
]
