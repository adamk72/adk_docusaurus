import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Focus on What Matters',
    imageUrl: 'img/flow.png',
    description: (
      <>
        Is your company floundering or flourishing? How can you even tell? (hint: your team spends more time in meetings and on emails than on being creative and collaborative.) I will examine you and your teams' processes, styles, and values so you can develop the clarity and confidence to take on bigger goals.
      </>
    ),
  },
  {
    title: 'We Are Better Together',
    imageUrl: 'img/teamwork.png',
    description: (
      <>
        As your team and company grows, there can be a loss of community and communication, especially if the leadership is pulled in a thousand different directions. I help leaders focus on their strengths and teach teams how to take on delegated tasks while still being effective with their work. It's all about making the right shifts in both systems and culture.
      </>
    ),
  },
  {
    title: 'Less Effort, Better Results',
    imageUrl: 'img/computer.png',
    description: (
      <>
        All too often companies get lost in their own systems. Many don't realize how many steps could be automated or outright ignored, freeing up valuable cognitive space and reducing cortisol levels so they can be better connected. I help you find and correct the gaps in your processes so you can be more effective and less stressed.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <div className={clsx("twoColumnWrapper", styles.heroFeatures)}>
            <div>
              <div className={clsx(styles.heroFeatures, 'heroText')}>
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                {/* <div className={styles.buttons}>
                  <Link
                    className={clsx(styles.getStarted,
                      'button button--outline button--secondary button--lg',
                    )}
                    to={useBaseUrl('docs/')}>
                    Get in Touch
                  </Link>
                </div> */}
              </div>
            </div>
            <div><img className={styles.heroIcon} src="img/flipped_imbr_icon.svg" /></div>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
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
