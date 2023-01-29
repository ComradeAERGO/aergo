import styles from '@/styles/Home.module.css';
import { HeadComponent } from '@/components/Head';
import AvatarComponent from '@/components/Avatar';
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import { RedditIconLogo } from '@/assets/reddit';
import { FlexSpacer } from '@/components/FlexSpacer';
import { ThemeIcon } from '@mantine/core';
import { ColoredIcon } from '@/components/ColoredIcon';

export default function Home() {
  return (
    <div className={styles.container}>
      <HeadComponent />

      <FlexSpacer />

      <main className={styles.main}>
        <AvatarComponent />

        <h1 className={`${styles.title} ${styles.pretitle}`}>
          <a className="focus-in-contract" href="https://bento.me/aergo">
            AERGO
          </a>
        </h1>

        <h1 className={styles.title}>Anthony Emilio Robert Goussot</h1>

        <p className={styles.description}>
          French Software Engineer, currently working @{` `}
          <a
            className="multiviolet"
            href="https://multis.co"
            data-content="Multis"
          >
            Multis
          </a>
        </p>

        <div className={styles.logos}>
          <ColoredIcon>
            <a href="https://www.linkedin.com/in/anthonygoussot/">
              <LinkedInLogoIcon />
            </a>
          </ColoredIcon>
          <ColoredIcon>
            <a href="https://github.com/ComradeAERGO">
              <GitHubLogoIcon />
            </a>
          </ColoredIcon>
          <ColoredIcon>
            <a href="https://twitter.com/ComradeAERGO">
              <TwitterLogoIcon />
            </a>
          </ColoredIcon>
          <ColoredIcon>
            <a href="https://www.reddit.com/user/0xAERG">
              <RedditIconLogo />
            </a>
          </ColoredIcon>
        </div>

        <p className={styles.description}>
          Passionated about Science, Web3, Engineering and Philosophy{` `}
        </p>
      </main>

      <FlexSpacer />

      <footer className={styles.footer}>
        © 2023 - Anthony Emile Robert Goussot - Crafted by hand with ❤️ in Paris
        12ème Arrondissement{` `}
      </footer>
    </div>
  );
}
