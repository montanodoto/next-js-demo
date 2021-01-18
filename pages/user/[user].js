import { useRouter } from 'next/router';

import Layout from '../../components/layout';

import { API_URL } from '../../constants';
import httpGet from '../../utils';

import styles from '../../styles/styledUser';

function User({
  firstName,
  lastName,
  email,
  phone,
  location,
  gender,
  title,
  registerDate,
  picture,
  dateOfBirth,
}) {
  const { back } = useRouter();

  return (
    <Layout title="User page">
      <style jsx>{styles}</style>
      <div className="user">
        <div className="user__image-holder">
          <img className="user__image" src={picture} alt="user picture" />
        </div>
        <h1 className="user__title">
          {title} {firstName} {lastName}
        </h1>
        <span className="user__info">Email: {email}</span>
        <span className="user__info">Phone: {phone}</span>
        <span className="user__info">Gender: {gender}</span>
        <span className="user__info">Date of Birth: {dateOfBirth}</span>
        <span className="user__info">Register Date: {registerDate}</span>
        <span className="user__info">
          Address: {location.country}, {location.state}, {location.city}, {location.street}
        </span>
        <div className="user__link-holder">
          <button className="user__link" onClick={back}>
            Back
          </button>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const userInfo = await httpGet({ url: `${API_URL}user/${query.user}` });

  return {
    props: { ...userInfo },
  };
}

export default User;
