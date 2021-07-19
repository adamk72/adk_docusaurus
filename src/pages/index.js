import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Feature from '../components/Feature';
import features from '../content/features';
import { Carousel, Box } from 'grommet';

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Improve you company's effectiveness with less effort and better results."
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className='container'>
          <div className={clsx('twoColumnWrapper', styles.heroFeatures)}>
            <div>
              <div className={clsx(styles.heroFeatures, 'heroText')}>
                <h1 className='hero__title'>{siteConfig.title}</h1>

                <div className={styles.buttons}>
                  <Link
                    className={clsx(
                      styles.getStarted,
                      'button button--outline button--secondary button--lg'
                    )}
                    to={useBaseUrl('services/')}
                  >
                    See My Services
                  </Link>
                </div>
              </div>
            </div>
            {/* <div><img className={styles.heroIcon} src="img/flipped_imbr_icon.svg" /></div> */}
            <Box>
              <Carousel
                play={5000}
                controls={false}
                fill
                margin={{ horizontal: '50px' }}
              >
                <p className='hero__subtitle'>{siteConfig.tagline}</p>
                <p className='hero__subtitle'>More Space, Less Stress</p>
                <p className='hero__subtitle'>Cognition, not Cortisol</p>
              </Carousel>
            </Box>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className='container'>
              <div className='row'>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
