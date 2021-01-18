import Layout from '../components/layout';

import httpGet from '../utils';

export default function Home({ data }) {
  console.log(data);
  return (
    <Layout>
      {data.map(({ body, email, id, name }) => (
        <div key={id}>
          <span>{name}</span>
          <span>{email}</span>
          <span>{body}</span>
        </div>
      ))}
    </Layout>
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
