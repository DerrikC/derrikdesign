import Avatar from './avatar'
// import DateFormater from './date-formater'
import CoverImage from './cover-image'
import { motion } from 'framer-motion'
import TitleLink from './title-link'

export default function PostPreview({
  title,
  coverImage,
  // date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mb-4 rounded">
        <CoverImage slug={slug} title={title} src={coverImage} />
       
      </motion.div>
          <a className="text-dark text-xl mb-2">{title}</a>
          <TitleLink slug={slug} title={excerpt}/>
    </div>
  )
}


