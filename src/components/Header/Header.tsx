import Head from 'next/head';
import { Link } from 'react-scroll';

import { menuItems } from './data';

type NavBarProps = {
  fixed?: boolean
}

const NavBar: React.FC<NavBarProps> = ({
  children,
  fixed = false,
}) => {
  const nav = (
    <nav className="bg-blue-200 pt-6 pb-2 shadow-md w-full">
      <div className="text-center mx-auto w-5/6 md:w-4/6 lg:w-3/6 xl:w-3/6">
        <div className="flex justify-center">
          {
            menuItems.map(({ path, label }, i) => (
              <div className="flex-1">
                <Link
                  activeClass="active"
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  key={i}
                >
                  <a className="no-underline text-gray-500 border-0 border-transparent tracking-wide font-bold py-3 mx-4 hover:text-green-500 text-sm md:text-base lg:text-lg xl:text-xl">
                    {label}
                  </a>
                </Link>
              </div>
            ))
          }
          {/* TODO: ログインリンクを右寄せで配置 */}
        </div>
      </div>
    </nav>
  )
  return (
    <div className="">
      {fixed ? (
        <div className="mb-10 w-full fixed">
          {nav}
        </div>
      ) : (
        <div className="mb-10 w-full">
          {nav}
        </div>
      )}
    </div>
  )
}


export const Header: React.FC = () => {
  return (
    <>
      <NavBar fixed={true} />
      <NavBar fixed={false} /> {/* for clearfix */}
    </>
  )
}
