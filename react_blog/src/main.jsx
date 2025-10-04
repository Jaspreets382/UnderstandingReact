import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { createBrowserRouter } from 'react-router-dom'
import {AuthLayout} from "./components/index.js"

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:"/login",
        element:(
          <AuthLayout authentication={false} >
            <Login></Login>
          </AuthLayout>
        )
      },
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/signup",
        element:(
          <AuthLayout authentication={false} >
            <Signup></Signup>
          </AuthLayout>
        )
      },
      {
        path:"/add-post",
        element:(
          <AuthLayout authentication={false} >
            <Login></Login>
          </AuthLayout>
        )
      },
      {
        path:"/all-posts",
        element:(
          <AuthLayout authentication={false} >
            <Login></Login>
          </AuthLayout>
        )
      },
      {
        path:"/login",
        element:(
          <AuthLayout authentication={false} >
            <Login></Login>
          </AuthLayout>
        )
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
