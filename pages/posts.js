import Link from 'next/link';

import Layout from '../components/layout';

import { API_URL } from '../constants';
import httpGet from '../utils';

function Posts({ postsData }) {
  return (
    <Layout>
      <style jsx>{`
        .posts {
          display: grid;
          grid-template-columns: 4fr 4fr 4fr;
          grid-template-rows: 12fr;
          grid-gap: 24px;
        }
        .posts__item {
          padding: 24px 24px;
          border: 1px solid #d8d8d8;
          border-radius: 12px;
          background-color: #fbfbfb;
        }
        .posts__image-holder {
          width: 128px;
          height: 128px;
          margin: 0 auto;
          border: 1px solid #d8d8d8;
          border-radius: 8px;
          overflow: hidden;
        }
        .posts__image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .posts__title{ 
          margin-top: 16px;
          font-weight: 700;
          font-size: 16px;
          color: #242424;
          line-height: 18px;
          text-align: center;
        }
        .posts__title:first-letter {
          text-transform: capitalize;
        }
        .posts__info {
          display: block;
          margin-top: 8px;
          font-weight: normal;
          font-size: 14px;
          color: #2b2b2b;
          line-height: 16px;
          text-align: center;
        }
        .posts__details {
          margin-top: 24px;
        }
        .posts__tag{
          display: block;
          margin-top: 8px;
          font-weight: normal;
          font-size: 14px;
          color: #2b2b2b;
          line-height: 16px;
          text-align: center;
        }
        .posts__text {
          font-weight: normal;
          font-size: 14px;
          color: #2b2b2b;
          line-height: 16px;
          text-align: center
        }
        .posts__details-link-holder {
          margin-top: 16px;
          text-align: center;
        }
        .posts__details-link {
          display: inline-block;
          vertical-align: top;
          min-width: 120px;
          height: 32px;
          padding: 0 16px;
          border-radius: 4px;
          font-weight: normal;
          font-size: 14px;
          color: #fff;
          line-height: 32px;
          text-align: center;
          background-color: #0596e9;
          transition: background-color 0.23s ease-in-out;
          cursor: pointer;
        }
        .posts__details-link:hover {
          background-color: #067abd;
        }
        .posts__link-holder {
          margin-top: 16px;
          text-align: center;
        }
        .posts__link {
          display: inline-block;
          vertical-align: top;
          min-width: 120px;
          height: 32px;
          padding: 0 16px;
          border-radius: 4px;
          font-weight: normal;
          font-size: 14px;
          color: #fff;
          line-height: 32px;
          text-align: center;
          background-color: #0596e9;
          transition: background-color 0.23s ease-in-out;
        }
        .posts__link:hover {
          background-color: #067abd;
        }
      `}</style>

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
                <span className="posts__tag" key={tag}>Tag: {tag}</span>
              ))}
              <p className="posts__text">{text}</p>
              <div className="posts__details-link-holder">
                <a className="posts__details-link" href={link} target="_blank">View</a>
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
        ))}
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const { data } = await httpGet({ url: `${API_URL}post?limit=10` });

  return {
    props: { postsData: data },
  };
};

export default Posts;
