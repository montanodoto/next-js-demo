import Link from 'next/link';

import Layout from '../components/layout';

import { API_URL } from '../constants';
import httpGet from '../utils';

import styles from '../styles/styledUsers';

function Users({ data }) {
  return (
    <Layout title="Users page">
      <style jsx>{styles}</style>
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

export async function getServerSideProps() {
  const { data } = await httpGet({ url: `${API_URL}user?limit=10` });

  return {
    props: { data },
  };
}

export default Users;
