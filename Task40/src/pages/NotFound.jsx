import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="section-container single-post">
      <h2 className="section-title">Page not found</h2>
      <p className="page-subtitle">
        Сторiнка не iснує або була перемiщена.
      </p>
      <Link className="primary-button" to="/">
        На головну
      </Link>
    </section>
  );
}
