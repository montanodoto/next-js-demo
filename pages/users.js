import Link from 'next/link';

import Layout from '../components/layout';

import { API_URL } from '../constants';
import httpGet from '../utils';

const Users = ({ data }) => {
  return (
    <Layout>
      <div className="container">
        {data.map(({ firstName, id, lastName, email, title, picture }) => (
          <div key={id} className="container-item">
            <h1 className="title">
              {title} {firstName} {lastName}
            </h1>
            <p>{email}</p>
            <Link href={`/dynamic-user/${id}`} passHref>
              <a role="presentation" className="more-button">
                More info
              </a>
            </Link>
            <img src={picture} />
          </div>
        ))}
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
};

export const getServerSideProps = async () => {
  const { data } = await httpGet({ url: `${API_URL}user?limit=10` });

  return {
    props: { data },
  };
};

export default Users;
