import Link from 'next/link';

import Layout from '../components/layout';

import { API_URL } from '../constants';
import httpGet from '../utils';

function Posts({ postsData }) {
  return (
    <Layout>
      <div className="container">
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
            <div key={id} className="container-item">
              <div className="card-header">
                <img src={picture} width="40" height="40" />
                <h1 className="title">
                  {firstName} {lastName}
                </h1>
                <h3 className="title">{email}</h3>
              </div>
              <img src={image} width="300" height="300" />
              {tags.map(tag => (
                <p key={tag}>{tag}</p>
              ))}
              <p>{text}</p>
              <a href={link} target="_blank">
                {link}
              </a>
              <div className="post-likes">{likes} Likes</div>
              <div className="post-likes">{publishDate}</div>

              <Link href={`/user/${userId}`} passHref>
                <a role="presentation" className="more-button">
                  Go to owner profile
                </a>
              </Link>
            </div>
          ),
        )}
      </div>
      <style jsx>{`
        .title {
          margin: 0 0 1rem 0;
        }
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .container-item {
          display: flex;
          flex-direction: column;
          width: 400px;
          box-shadow: 0px 0px 5px 0px #e7e7e7;
          margin: 1rem;
          padding: 2rem;
          transition: 0.3s all;
          cursor: pointer;
        }
        .container-item:hover {
          box-shadow: 0px 0px 15px 3px #e7e7e7;
        }
        .more-button {
          color: #00a3ff;
          font-size: 14px;
          border: none;
          border-radius: 5px;
          box-shadow: 0px 0px 2px 1px #e7e7e7;
          background-color: #fff;
          padding: 0.5rem 1rem;
          transition: 0.2s all;
          text-decoration: none;
        }
        .more-button:hover {
          box-shadow: 0px 0px 6px 1px #e7e7e7;
        }
      `}</style>
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
