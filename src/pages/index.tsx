import { InferGetStaticPropsType, GetStaticProps, NextPage } from 'next';

import { Layout } from '../components/Layout'
import { AboutMe } from '../sections/AboutMe'
import { Certifications } from '../sections/Certifications';
import { Career } from '../sections/Career';
import { Presentations } from '../sections/Presentations';
import { Links } from '../sections/Links'
import { Others } from '../sections/Others';


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
const IndexPage: NextPage = (props) => {
  return (
    <Layout>
      <AboutMe />
      <Links />
      <Presentations />
      <Career />
      <Certifications />
      <Others />
    </Layout>
  )
}

export default IndexPage
