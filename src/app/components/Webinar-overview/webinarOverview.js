'use client';  // Dit maakt het een client-side component

import styles from "./webinarOverview.module.css";

const WebinarOverview = ({ slug = "", thumbnail = "", duration = "", title = "", speakers = [], categories = [] }) => {
  return (
    <article className={styles.webinarCard}>
      <a className={styles.a} href={`/webinars/${slug}`}>
        <div className={styles.containerImage}>
          <img
            className={styles.img}
            src={`https://fdnd-agency.directus.app/assets/${thumbnail.id}`}
            alt="thumbnail"
          />
          <p className={styles.duration}>{duration}</p>
        </div>
        <h3 className={styles.h3}>{title}</h3>
        <p className={styles.speakers}>
          {speakers.map((speaker, index) => (
            <span key={index}>{speaker.avl_speakers_id.fullname}</span>
          ))}
        </p>
        <div className={styles.categories}>
          {categories.map((category, index) => (
            <p className={styles.category} key={index}>
              {category.avl_categories_id.name}
            </p>
          ))}
        </div>
      </a>
    </article>
  );
};

export default WebinarOverview;
