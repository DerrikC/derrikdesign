
import Link from 'next/link'

export default function TitleLink ({ title, slug }) {

  return (
    <div className="project-title">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{title}</a>
        </Link>   
    </div>
  )
}
