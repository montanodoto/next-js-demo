import styles from '../styles/styledLoader';

export default function Loader() {
  return (
    <>
      <style jsx global>
        {styles}
      </style>
      <div className="loader">
        <div className="loader__roller"></div>
      </div>
    </>
  );
}
