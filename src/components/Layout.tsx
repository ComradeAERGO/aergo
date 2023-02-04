import styles from '@/styles/Layout.module.css';

export default function Layout({ children }: any) {
  return <section className={styles.layout}>{children}</section>;
}
