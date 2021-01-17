import Link from 'next/link';

import Layout from '../components/layout';

import { API_URL } from '../constants';
import httpGet from '../utils';

function Users({ data }) {
  return (
    <Layout>
      <style jsx>{`
        .users {
          max-width: 400px;
          width: 100%;
          margin: 0 auto;
        }
        .users__item {
          margin-bottom: 24px;
          padding: 24px 24px;
          border: 1px solid #d8d8d8;
          border-radius: 12px;
          background-color: #fbfbfb;
        }
        .users__item:last-child {
          margin-bottom: 0;
        }
        .users__image-holder {
          width: 128px;
          height: 128px;
          margin: 0 auto;
          border: 1px solid #d8d8d8;
          border-radius: 8px;
          overflow: hidden;
        }
        .users__image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .users__title{ 
          margin-top: 16px;
          font-weight: 700;
          font-size: 16px;
          color: #242424;
          line-height: 18px;
          text-align: center;
        }
        .users__title:first-letter {
          text-transform: capitalize;
        }
        .users__email {
          display: block;
          margin-top: 8px;
          font-weight: normal;
          font-size: 14px;
          color: #2b2b2b;
          line-height: 16px;
          text-align: center;
        }
        .users__link-holder {
          margin-top: 16px;
          text-align: center;
        }
        .users__link {
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
        .users__link:hover {
          background-color: #067abd;
        }
      `}</style>
      <div className="users">
        {data.map(({ firstName, id, lastName, email, title, picture }) => (
          <div key={id} className="users__item">
            <div className="users__image-holder">
              <img className="users__image" src={picture} alt="user picture" />
            </div>
            <h1 className="users__title">
              {title} {firstName} {lastName}
            </h1>
            <span className="users__email">{email}</span>
            <div className="users__link-holder">
              <Link href={`/user/${id}`} passHref>
                <a role="presentation" className="users__link">
                  More info
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
  const { data } = await httpGet({ url: `${API_URL}user?limit=10` });

  return {
    props: { data },
  };
};

export default Users;
