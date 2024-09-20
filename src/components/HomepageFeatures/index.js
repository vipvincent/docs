import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate>死亡交換</Translate>,
    link: './deathswap',
    image: require('@site/static/img/deathswap.png').default,
    description: (
      <Translate>
        玩家之間隨機交換，設計陷阱並互相陷害
      </Translate>
    ),
  },
  {
    title: <Translate>合成隱形物品展示框</Translate>,
    link: './invisibility-itemframe',
    image: require('@site/static/img/invisibility-itemframe.png').default,
    description: (
      <Translate>
        讓隱形的物品展示框可以合成
      </Translate>
    ),
  },
];

function Feature({ image, title, description, link }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} className={styles.featureImage} alt={title} style={{ width: 'auto', height: '250px' }}/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
      </div>
      <div className="text--center">
        <Link className="button button--secondary button--lg" to={link}><Translate>查看文檔</Translate></Link>
        <p></p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
