import Container from '../components/container'
import MoreStories from '../components/work'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'

export default function Index({ allPosts }) {
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>derrikdesign</title>
        </Head>

        <Container>
          <Intro />
       
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>

      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
