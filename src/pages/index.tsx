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
import Link from 'next/link';
import Date from '@/components/Date';
import { ColoredIcon } from '@/components/ColoredIcon';
import { getSortedPostsData } from '../../lib/posts';

export default function Home({ allPostsData }: any) {
  return (
    <div className={styles.container}>
      <HeadComponent />

      <FlexSpacer />

      <main className={styles.main}>
        <AvatarComponent />

        <h1 className={`${styles.title} ${styles.pretitle}`}>
          <Link className="focus-in-contract" href="https://bento.me/aergo">
            AERGO
          </Link>
        </h1>

        <h1 className={styles.title}>Anthony Emilio Robert Goussot</h1>

        <p className={styles.description}>
          French Software Engineer, currently working @{` `}
          <Link
            className="multiviolet"
            href="https://multis.co"
            data-content="Multis"
          >
            Multis
          </Link>
        </p>

        <div className={styles.logos}>
          <ColoredIcon>
            <Link href="https://www.linkedin.com/in/anthonygoussot/">
              <LinkedInLogoIcon />
            </Link>
          </ColoredIcon>
          <ColoredIcon>
            <Link href="https://github.com/ComradeAERGO">
              <GitHubLogoIcon />
            </Link>
          </ColoredIcon>
          <ColoredIcon>
            <Link href="https://twitter.com/ComradeAERGO">
              <TwitterLogoIcon />
            </Link>
          </ColoredIcon>
          <ColoredIcon>
            <Link href="https://www.reddit.com/user/0xAERG">
              <RedditIconLogo />
            </Link>
          </ColoredIcon>
        </div>

        <p className={styles.description}>
          Passionated about Science, Web3, Engineering and Philosophy{` `}
        </p>
      </main>

      <section className={`${styles.headingMd} ${styles.padding1px}`}>
        <h2 className={styles.headingLg}>Blog</h2>
        <ul className={styles.list}>
          {allPostsData.map(({ id, date, title }: any) => (
            <li className={styles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={styles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>

      <FlexSpacer />

      <footer className={styles.footer}>
        © 2023 - Anthony Emile Robert Goussot - Crafted by hand with ❤️ in Paris
        12ème Arrondissement{` `}
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
