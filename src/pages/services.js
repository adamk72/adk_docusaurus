import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import Feature from '../components/Feature'
import services from '../content/services'

export default function Services() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Make great strides in improving your Product Life Cycle, Software Development and Information Architecture ">
      {/* <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <div className={clsx("twoColumnWrapper", styles.heroFeatures)}>
            <div>
              <div className={clsx(styles.heroFeatures, 'heroText')}>
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
              </div>
            </div>
            <div><img className={styles.heroIcon} src="img/flipped_imbr_icon.svg" /></div>
          </div>
        </div>
      </header> */}
      <main>
        {services && services.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {services.map((props, idx) => (
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
