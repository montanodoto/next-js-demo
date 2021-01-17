import Link from 'next/link';

import Layout from '../components/layout';

import { API_URL } from '../constants';
import httpGet from '../utils';

import styles from '../styles/styledPosts';

function Posts({ postsData }) {
  return (
    <Layout>
      <style jsx>{styles}</style>

      <div className="posts">
        {postsData.map(
          ({
            owner: { firstName, lastName, email, picture, id: userId },
            id,
            image,
            publishDate,
            text,
            tags,
            link,
            likes,
          }) => (
            <div key={id} className="posts__item">
              <div className="posts__image-holder">
                <img className="posts__image" src={picture} alt="user picture" />
              </div>
              <h1 className="posts__title">
                {firstName} {lastName}
              </h1>
              <span className="posts__info">{email}</span>
              <span className="posts__info">{likes} Likes</span>
              <span className="posts__info">{publishDate} Publish Date</span>
              <div className="posts__details">
                <div className="posts__image-holder">
                  <img className="posts__image" src={image} alt="animal picture" />
                </div>
                {tags.map(tag => (
                  <span className="posts__tag" key={tag}>
                    Tag: {tag}
                  </span>
                ))}
                <p className="posts__text">{text}</p>
                <div className="posts__details-link-holder">
                  <a className="posts__details-link" href={link} target="_blank">
                    View
                  </a>
                </div>
              </div>
              <div className="posts__link-holder">
                <Link href={`/user/${userId}`} passHref>
                  <a role="presentation" className="posts__link">
                    Go to owner profile
                  </a>
                </Link>
              </div>
            </div>
          ),
        )}
      </div>
    </Layout>
  );
}

/**
 * @getServerSideProps function will run only in server side on each request
 * all js code and imports will not be included in client bundle size, so it's useful to have your
 * heavy JS code on getServerSideProps and do not overload client side
 */

// !! getServerSideProps can only be exported from a page. You can’t export it from non-page files.

export const getServerSideProps = async () => {
  const { data } = await httpGet({ url: `${API_URL}post?limit=10` });

  return {
    props: { postsData: data },
  };
};

export default Posts;
