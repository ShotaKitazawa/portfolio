import Head from 'next/head'

import { Header } from '../Header'
import { Ribbon } from '../Ribbon'

const name = 'Shota Kitazawa (kanata)'

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>{name}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.3/gh-fork-ribbon.min.css"
        />
      </Head>
      <div className="relative z-30">
        <Ribbon />
      </div>
      <div className="relative z-20">
        <Header />
      </div>
      <main className="relative z-10">{children}</main>
    </>
  )
}

const ribbon = (
  <a href="https://github.com/you">
    <img
      loading="lazy"
      width="149"
      height="149"
      src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149"
      className="attachment-full size-full"
      alt="Fork me on GitHub"
      data-recalc-dims="1"
    />
  </a>
)
