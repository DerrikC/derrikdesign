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

          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="My page title" key="title" />


          <meta name="title" content="derrikdesign" />
          <meta name="description" content="" />


          <meta property="og:type" content="website" />
          <meta property="og:url" content="" />
          <meta property="og:title" content="derrikdesign" />
          <meta property="og:description" content="" />
          <meta property="og:image" content="" />
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
