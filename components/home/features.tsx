import cn from 'classnames';
import Container from '../container';
import SectionHeader from '../section-header';
import CompanySlider from './company-slider';
import { InternalLink } from '../text/link';
import styles from './features.module.css';

const features = [
  {
    title: 'Zero Config.',
    body: 'Body',
    url: '/docs'
  },
  {
    title: 'Hybrid: Static Generation and Server-Rendering.',
    body: 'Body',
    url: '/docs'
  },
  {
    title: 'Incremental Static Generation.',
    body: 'Body',
    url: '/docs'
  },
  {
    title: 'TypeScript Support.',
    body: 'Body',
    url: '/docs'
  },
  {
    title: 'Fast Refresh.',
    body: 'Fast, reliable live-editing experience, as proven at Facebook scale.',
    url: '/docs/basic-features/fast-refresh'
  },
  {
    title: 'File-system Routing and Dynamic Paths.',
    body: 'Body',
    url: '/docs'
  },
  {
    title: 'API Routes.',
    body: 'Body',
    url: '/docs'
  },
  {
    title: 'Component-level CSS.',
    body: 'Body',
    url: '/docs'
  },
  {
    title: 'Code-splitting and Bundling.',
    body: 'Body',
    url: '/docs'
  }
];

function More() {
  return (
    <div className={styles.card}>
      <h3 className={cn('f4 fw6', styles['card-heading'])}>And more.</h3>
      <p className={styles['card-body']}>?</p>
    </div>
  );
}

export default function Features() {
  return (
    <Container wide role="region" aria-labelledby="features">
      <Container center padding>
        <SectionHeader id="features" title="Features" margin="0 0 3rem 0" />
        <div className={styles['features-grid']}>
          {features.map(({ title, body, url }) => (
            <div className={styles.card}>
              <h3 className={cn('f4 fw6', styles['card-heading'])}>{title}</h3>
              <p className={styles['card-body']}>{body}</p>
              <div className={styles['card-link']}>
                <InternalLink as={url} href="/docs/[[...slug]]">
                  Documentation →
                </InternalLink>
              </div>
            </div>
          ))}
          <div className={styles['card-hide-on-desktop']}>
            <More />
          </div>
          <div className={styles['card-show-on-desktop']}>
            <More />
          </div>
        </div>
      </Container>
      <CompanySlider />
    </Container>
  );
}
