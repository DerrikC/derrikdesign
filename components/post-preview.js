import Avatar from './avatar'
import DateFormater from './date-formater'
import CoverImage from './cover-image'
import { motion } from 'framer-motion'

export default function PostPreview({
  title,
  coverImage,
  date,
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
      <h3 className="text-lg mb-2">
          <a className="text-dark">{title}</a>
      </h3>
      <div className="text-lg mb-2">
        {/* <DateFormater dateString={date} /> */}
      </div>
      <p className="text-lg text-black-50 text-secondary leading-relaxed mb-4">{excerpt}</p>
    </div>
  )
}


