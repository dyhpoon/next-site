import cn from 'classnames';
import Container from '@components/container';
import SectionHeader from '@components/section-header';
import { InlineCode } from '@components/text/code';
import { InternalLink } from '@components/text/link';
import CompanySlider from './company-slider';
import styles from './features.module.css';

const features = [
  {
    title: 'Zero Config.',
    body:
      'Automatic compilation and bundling with Webpack and Babel. Optimized for production from the start.',
    url: '/docs/getting-started'
  },
  {
    title: 'Hybrid: Static Generation and Server-side Rendering.',
    body:
      'Pre-render a page at build time (SSG) or request time (SSR), with or without data, using per-page configuration.',
    url: '/docs/basic-features/data-fetching'
  },
  {
    title: 'Incremental Static Generation.',
    body:
      'Add and update statically pre-rendered pages incrementally after build time. Scale to millions of static pages.',
    url: '/docs/basic-features/data-fetching#incremental-static-regeneration'
  },
  {
    title: 'TypeScript Support.',
    body: 'Automatic TypeScript configuration and compilation. Type definitions available.',
    url: '/docs/basic-features/typescript'
  },
  {
    title: 'Fast Refresh.',
    body: 'Fast, reliable live-editing experience, as proven at Facebook scale.',
    url: '/docs/basic-features/fast-refresh'
  },
  {
    title: 'File-system Routing and Dynamic Routes.',
    body: (
      <>
        Every component in the <InlineCode>pages</InlineCode> directory becomes a route.
      </>
    ),
    url: '/docs/routing/introduction'
  },
  {
    title: 'API Routes.',
    body: 'Create API endpoints which can be deployed as Serverless Functions.',
    url: '/docs/api-routes/introduction'
  },
  {
    title: 'Built-in CSS Support.',
    body: 'Create component-level styles with CSS modules. Built-in Sass and PostCSS support.',
    url: '/docs/basic-features/built-in-css-support'
  },
  {
    title: 'Code-splitting and Bundling.',
    body:
      'Minimize the bundle size for each page by automatic code-splitting. Smart prefetching for instant page loads.',
    url: '/docs'
  }
];

function More() {
  return (
    <div className={styles.card}>
      <h3 className={cn('f4 fw6', styles['card-heading'])}>And More.</h3>
      <p className={styles['card-body']}>
        Support for{' '}
        <InternalLink href="/docs/[[...slug]]" as="/docs/basic-features/environment-variables">
          environment variables
        </InternalLink>
        ,{' '}
        <InternalLink href="/docs/[[...slug]]" as="/docs/advanced-features/preview-mode">
          preview mode
        </InternalLink>
        ,{' '}
        <InternalLink href="/docs/[[...slug]]" as="/docs/api-reference/next/head">
          custom <InlineCode inheritColor>head</InlineCode> tags
        </InternalLink>
        ,{' '}
        <InternalLink
          as="/docs/basic-features/supported-browsers-features#polyfills"
          href="/docs/[[...slug]]"
        >
          automatic polyfilling
        </InternalLink>{' '}
        and more. Everything is{' '}
        <InternalLink as="/docs/api-reference/next.config.js/introduction" href="/docs/[[...slug]]">
          configurable
        </InternalLink>
        .
      </p>
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
