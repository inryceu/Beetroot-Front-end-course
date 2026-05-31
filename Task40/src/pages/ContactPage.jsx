import { useMemo } from 'react';
import { contactCards, contactChannels } from '../data/mockData';

export default function ContactPage() {
  const cards = useMemo(() => contactCards, []);
  const channels = useMemo(() => contactChannels, []);

  return (
    <section className="section-container">
      <div className="page-header">
        <div>
          <h2 className="section-title">Contact</h2>
          <p className="page-subtitle">
            Завжди на зв&apos;язку для спiльних проєктiв та iдей.
          </p>
        </div>
      </div>
      <div className="contact-grid">
        {cards.map((card) => (
          <div key={card.id} className="contact-card">
            <h3 className="contact-title">{card.title}</h3>
            <p className="contact-value">{card.value}</p>
            <p className="contact-note">{card.note}</p>
          </div>
        ))}
      </div>
      <div className="contact-channels">
        {channels.map((channel) => (
          <div key={channel.id} className="contact-channel">
            <span className="contact-label">{channel.label}</span>
            <span className="contact-detail">{channel.value}</span>
            <span className="contact-description">{channel.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
