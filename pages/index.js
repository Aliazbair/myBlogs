import {getSortedPostsData} from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}


export default function Home({allPostsData}) {
  console.log(allPostsData);
  return (
    <div>
         <ul >
          {allPostsData.map(({ id, date, title }) => (
           <li className={utilStyles.listItem} key={id}>
           <Link href={`/posts/${id}`}>
             <a>{title}</a>
           </Link>
           <br />
           <small className={utilStyles.lightText}>
             <Date dateString={date} />
           </small>
         </li>
          ))}
        </ul>
     </div>
  )
}


// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     }
//   }
// }
