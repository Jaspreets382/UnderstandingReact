import React from 'react'
import { Container, Logo, LogoutBtn, } from "../index"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()
  const authStatus = useSelector((state) => state.auth.status)
  console.log("Auth status in Header:", authStatus);
  const navItem = [
    {
      name: "Home",
      slug: '/',
      active: true
    },
    {
      name: "Login",
      slug: '/login',
      active: !authStatus
    },
    {
      name: "Signup",
      slug: '/signup',
      active: !authStatus
    },
    {
      name: "All Posts",
      slug: '/all-posts',
      active: authStatus
    },
    {
      name: "Add Post",
      slug: '/add-post',
      active: authStatus
    },
  ]
  return (
    <>
      <header className='py-3 shadow bg-gray-500'>
        <Container>
          <nav>
            <div>
              <Link
                to='/'>
                <Logo width='70px'></Logo>
              </Link>
            </div>

            <ul>
              {navItem.map((item) => item.active ? (
                <li key={item.name}>
                  <button onClick={() => navigate(item.slug)} className=''>{item.name}</button>
                </li>
              ) : null)}
              
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>

          </nav>



        </Container>
      </header>
    </>
  )
}

export default Header