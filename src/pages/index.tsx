//import { InferGetStaticPropsType, GetStaticProps, NextPage } from 'next'
import { NextPage } from 'next'

import { Layout } from '../components/Layout'
import { AboutMe } from '../sections/AboutMe'
import { Certifications } from '../sections/Certifications'
import { Career } from '../sections/Career'
import { Presentations } from '../sections/Presentations'
import { Links } from '../sections/Links'
import { Archivements } from '../sections/Archivements'

/* TODO
type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
const data = getContents()
return {
  props: {
    data
  },
  revalidate: 10,
}
}
*/

// const IndexPage: NextPage<Props> = (props) => {
const IndexPage: NextPage = () => {
  return (
    <Layout>
      <AboutMe />
      <Links />
      <Presentations />
      <Career />
      <Archivements />
      <Certifications />
    </Layout>
  )
}

export default IndexPage
