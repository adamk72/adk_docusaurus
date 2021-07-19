import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import Feature from '../components/Feature';
import BareTabContent from '../components/BareTabContent';
import services from '../content/services';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default function Services() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description='Make great strides in improving your Product Life Cycle, Software Development and Information Architecture '
    >
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
        <section className={styles.tabs}>
          <Tabs
            defaultValue='process'
            values={[
              { label: 'Process Improvement', value: 'process' },
              { label: 'Leadership & Speaking', value: 'speaking' },
              { label: 'Bananas', value: 'banana' },
              { label: 'VCs & Angels', value: 'angels' },
            ]}
          >
            <TabItem value='process'>
              {services && services.length > 0 && (
                <div className='container'>
                  <div className='row'>
                    {services.map((props, idx) => (
                      <Feature key={idx} {...props} />
                    ))}
                  </div>
                </div>
              )}
            </TabItem>
            <TabItem value='speaking' key='speaking'>
              <BareTabContent title='Speaking' wip>
                <p>
                  For several years, I mentored individuals and instructed
                  non-profits on how to improve their speaking skills in the
                  general.
                </p>
                <p>
                  Now, I'm taking a leap forward and will be offering services
                  to help business owners and employees alike improve their
                  communication skills.
                </p>
                <p>What I teach:</p>
                <ul>
                  <li>
                    How developers can articulate complex ideas to
                    clients/managers in a simpler fashion.
                  </li>
                  <li>
                    How business development managers can speak with challenging
                    clients.
                  </li>
                  <li>
                    How leadership can best phrase their opinions, needs, and
                    perspectives with technical developers.
                  </li>
                  <li>
                    How to run shorter, tighter, more productive meetings.
                  </li>
                  <li>
                    How to give far better presentations at all sizes of events,
                    large or small.
                  </li>
                </ul>
                <p>
                  Anyone can benefit from my techniques and instruction. I've
                  witness a lot of situations where people and companies could
                  use help:
                </p>
                <ul>
                  <li>
                    Big-name VC folks who bore their audience to tears with dull
                    presentations and uninspiring endings.
                  </li>
                  <li>
                    Developers go off on rambling technical tangents that eat up
                    precious meeting times.
                  </li>
                  <li>
                    Teams and management in conflict simply because of
                    difference in semantics.
                  </li>
                </ul>
                <p>
                  {' '}
                  And I've seen a lot more and helped many folks in similar
                  situations greatly improve their speaking skills.
                </p>
                <h3>
                  Better speaking skills lead to better business. Simple as
                  that.
                </h3>
                Read up my experiences and concepts about public speaking at my{' '}
                <Link to='/speaking-blog'>blog.</Link>
              </BareTabContent>
              {/* <BareTabContent title="Leadership" wip>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nisi voluptatem maiores excepturi dolores iusto.
                </BareTabContent> */}
            </TabItem>
            <TabItem value='banana' key='banana' className={styles.bareTabItem}>
              <BareTabContent title='An Essential Mineral' wip>
                <p>
                  Because, seriously, you need some potassium in your diet. 🍌
                </p>
                <a href='https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional/'>
                  Fact Sheet for Health Professionals
                </a>{' '}
                <em>(and those who want more details)</em>
              </BareTabContent>
            </TabItem>
            <TabItem value='angels' key='angels' className={styles.bareTabItem}>
              <BareTabContent title='Due Diligence Done Right' wip>
                <p>This is an orange 🍊</p>
              </BareTabContent>
            </TabItem>
          </Tabs>
        </section>
      </main>
    </Layout>
  );
}
