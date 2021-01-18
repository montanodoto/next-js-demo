import Layout from '../components/layout';

import httpGet from '../utils';
import styles from '../styles/styledIndex';

export default function Home({ data }) {
  return (
    <>
      <style jsx global>
        {styles}
      </style>
      <Layout>
        <div className="home">
          {data.map(({ body, email, id, name }) => (
            <div className="home__item" key={id}>
              <span className="home__name">{name}</span>
              <span className="home__email">{email}</span>
              <span className="home__body">{body}</span>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const data = await httpGet(
    { url: 'https://jsonplaceholder.typicode.com/comments' },
    { method: 'POST' },
  );

  return {
    props: { data },
  };
}
