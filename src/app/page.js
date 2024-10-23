import styles from "./page.module.css";
import WebinarOverview from './components/Webinar-overview/webinarOverview';

const baseURL = 'https://fdnd-agency.directus.app/items/';

async function fetchData() {
  const webinarUrl = `${baseURL}avl_webinars?fields=*.*.*&sort[]=-date`;
  const contouringUrl = `${baseURL}avl_contourings?fields=*.*.*`;

  const [webinarsRes, contouringsRes] = await Promise.all([
    fetch(webinarUrl),
    fetch(contouringUrl),
  ]);

  const webinars = await webinarsRes.json();
  const contourings = await contouringsRes.json();

  return { webinars: webinars.data, contourings: contourings.data };
}

export default async function Home() {
  const { webinars, contourings } = await fetchData();

  // Zorg ervoor dat je de eerste 4 webinars pakt nadat ze zijn opgehaald
  const newestWebinars = webinars.slice(0, 4);

  return (
    <main className={ styles.main }>
      <h1 className={styles.h1}>Home</h1>
      <section>
        <h2 className={styles.h2}>Webinars</h2>
        <div className={styles.carrousel}>
          {newestWebinars.map((webinar, index) => (
            <div className={styles.kaart} key={index}>
              <WebinarOverview {...webinar} />
            </div>
          ))}
        </div>
        <a className={styles.a} href="/webinars">SEE ALL WEBINARS</a>
      </section>
    </main>
  );
}
