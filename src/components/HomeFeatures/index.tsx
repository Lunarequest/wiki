import React from 'react';
import clsx from 'clsx';
import Translate, { translate } from '@docusaurus/Translate';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

function Turbo() {
  return (
    <span className={'fa-8x'}>
      <div className={'fa-solid fa-forward'} />
    </span>
  );
}

function Stats() {
  return (
    <span className={'fa-9x'}>
      <div className={'fa-solid fa-ranking-star'} />
    </span>
  );
}

function Create() {
  return (
    <span className={'fa-8x'}>
      <div className={'fa-solid fa-layer-group'} />
    </span>
  );
}

const FeatureList: FeatureItem[] = [
  {
    title: translate({
      id: 'homepage.feature1.title',
      message: 'Zsh Startup 50-80% Faster',
      description: 'Title of feature 1 (left) on the home page',
    }),
    Svg: Turbo,
    description: (
      <Translate
        id="home.fetaure1"
        description="Description of first featured banner in homepage"
      >
        Instant prompt postponing plugins loading to a moment when the
        processing of .zshrc file is finished.
      </Translate>
    ),
  },
  {
    title: translate({
      id: 'homepage.feature2.title',
      message: 'Focus on What Matters',
      description: 'Title of feature 2 (middle) on the home page',
    }),
    Svg: Stats,
    description: (
      <Translate
        id="home.fetaure2"
        description="Description of second featured banner in homepage"
      >
        Statistics about the plugins, describing what functions, bindkeys,
        completions, and other elements a plugin has set up.
      </Translate>
    ),
  },
  {
    title: translate({
      id: 'homepage.feature3.title',
      message: 'Wide Range of Features',
      description: 'Title of feature 3 (right) on the home page',
    }),
    Svg: Create,
    description: (
      <Translate
        id="home.fetaure3"
        description="Description of third featured banner in homepage"
      >
        Supports Oh-My-Zsh and Prezto - not framework-specific. Produce your
        plugins, libraries, and themes effortlessly.
      </Translate>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem): JSX.Element {
  return (
    <div className={clsx('col col--4')}>
      <div className={'text--center'}>
        <Svg role={'img'} />
      </div>
      <div className={'text--center padding-horiz--md'}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomeFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className={'container'}>
        <div className={'row'}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
