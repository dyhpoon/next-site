import Container from '../container';
import Button from '../button';
import SectionHeader from '../section-header';
import CompanySlider from './company-slider';
import { GenericLink } from '../text/link';

const features = [
  {
    title: 'Title',
    body: 'Body',
    url: '/docs'
  },
  {
    title: 'Title',
    body: 'Body',
    url: '/docs'
  },
  {
    title: 'Title',
    body: 'Body',
    url: '/docs'
  },
  {
    title: 'Title',
    body: 'Body',
    url: '/docs'
  },
  {
    title: 'Title',
    body: 'Body',
    url: '/docs'
  },
  {
    title: 'Title',
    body: 'Body',
    url: '/docs'
  },
  {
    title: 'Title',
    body: 'Body',
    url: '/docs'
  },
  {
    title: 'Title',
    body: 'Body',
    url: '/docs'
  },
  {
    title: 'Title',
    body: 'Body',
    url: '/docs'
  }
];

export default function Features() {
  return (
    <Container wide role="region" aria-labelledby="features">
      <Container center padding>
        <SectionHeader id="features" title="Features" margin="0 0 3rem 0" />
        <div className="features-grid">
          {features.map(({ title, body, url }) => (
            <div className="card">
              <h3 className="f3 fw6">{title}</h3>
              <p>{body}</p>
              <GenericLink href={url}>Documentation →</GenericLink>
            </div>
          ))}
        </div>
        <style jsx>{`
          .card {
            border: 1px solid var(--accents-2);
            padding: var(--geist-gap);
            border-radius: var(--geist-radius);
            text-align: left;
          }

          .features-grid {
            display: grid;
            gap: var(--geist-gap);
          }

          @media screen and (min-width: 960px) {
            .features-grid {
              grid-template-columns: repeat(3, minmax(0, 1fr));
            }
          }
        `}</style>
      </Container>
      <CompanySlider />
    </Container>
  );
}
