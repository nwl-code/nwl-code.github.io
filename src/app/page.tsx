import styles from '@/style/page.module.css';
import getSkills from '@/api/skills';

const Home = async () => {
  const skills = await getSkills();

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <code className={styles.code}>{skills && skills.map(({ label }: { label: string }) => <p>{label}</p>)}</code>
      </div>
    </main>
  );
};

export default Home;