import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import Feature from '../components/Feature'
import BareTabContent from '../components/BareTabContent'
import services from '../content/services'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
        {/* <section> */}
        <section className={styles.features} >
          {/* <div className={styles.features}> */}
          <Tabs
            styles={{ color: "red" }}
            defaultValue="process"
            values={[
              { label: 'Process Improvement', value: 'process' },
              { label: 'Leadership & Speaking', value: 'speaking' },
              { label: 'Bananas', value: 'banana' },
              { label: 'VCs & Angels', value: 'angels' },
            ]}>
            <TabItem value="process">
              {services && services.length > 0 && (
                <div className="container">
                  <div className="row">
                    {services.map((props, idx) => (
                      <Feature key={idx} {...props} />
                    ))}
                  </div>
                </div>
              )}
            </TabItem>
            <TabItem value="speaking" key="speaking">
              <BareTabContent title="Speaking" wip>
                <Link to="/docs/speaking-lessons/lessons-from-ancient-times">Read up on what I have so far.</Link>
              </BareTabContent>
              <BareTabContent title="Leadership" wip>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nisi voluptatem maiores excepturi dolores iusto.
                </BareTabContent>
            </TabItem>
            <TabItem value="banana" key="banana" className={styles.bareTabItem}>
              <BareTabContent title="An Essential Mineral" wip>
                <p>Because, seriously, you need some potassium in your diet. 🍌</p>
                <a href="https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional/">Fact Sheet for Health Professionals</a> <em>(and those who want more details)</em>
              </BareTabContent>
            </TabItem>
            <TabItem value="angels" key="angels" className={styles.bareTabItem}>
              <BareTabContent title="Due Diligence Done Right" wip>
                <p>This is an orange 🍊</p>

              </BareTabContent>
            </TabItem>
          </Tabs>
        </section>
      </main>
    </Layout >
  );
}
