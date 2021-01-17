import { useRouter } from 'next/router';

import { API_URL } from '../../constants';
import httpGet from '../../utils';

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
    <div>
      <img src={picture} alt="Picture of the author" width={500} height={500} />
      <div className="container-item">
        <h1 className="title">
          {title} {firstName} {lastName}
        </h1>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Gender: {gender}</p>
        <p>Date of Birth: {dateOfBirth}</p>
        <p>Register Date: {registerDate}</p>
        <p>
          Address: {location.country}, {location.state}, {location.city}, {location.street}
        </p>
      </div>
      <button onClick={back}>Back</button>
    </div>
  );
}

export const getServerSideProps = async ({ query }) => {
  const userInfo = await httpGet({ url: `${API_URL}user/${query.user}` });

  return {
    props: { ...userInfo },
  };
};

export default User;
