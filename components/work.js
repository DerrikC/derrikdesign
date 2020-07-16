import PostPreview from './post-preview'
import { motion } from 'framer-motion'


export default function Work({ posts }) {
  return (
    <section>

      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
      </h2>


      <motion.div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-10 mb-32" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1  }}>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </motion.div>

    </section>
  )
}

