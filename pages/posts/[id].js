import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
export async function getStaticPaths() {
  // reurn a list of possible value for id
  const paths = getAllPostIds()

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  // fetch necessary data fro the blog post using params.id
  const postData =await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}
const Post = ({ postData }) => {
  return (
    <div>
          <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </div>
  )
}

export default Post
