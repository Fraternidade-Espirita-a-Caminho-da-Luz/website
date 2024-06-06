import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import fraternidade2 from '../assets/img/fraternidade2.jpg'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} style={{backgroundImage: fraternidade2}}>
      <div className={styles.container}>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/blog">
            Confira o nosso Blog, clique aqui!
          </Link>
        </div> */}
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Homepage - ${siteConfig.title}`}
      description="Homepage do website">
      {/* <HomepageHeader /> */}
      <main className={styles.homepage__main}>
      </main>
    </Layout>
  );
}
