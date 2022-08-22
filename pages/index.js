import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '../components/nav'
import styles from '../sass/layouts/home.module.scss'

function Home() {

  return (
    <>
      <Nav />
      <div className={styles._wraper}>
        <div className={styles.container}>
          <div className={styles.hero}>
            <div>
              Learn from the best. Live online lessons in Swimming |
            </div>
          </div>
          <section className={styles.features}>
            <div className={styles.feature_grid}>
              <div className={`${styles.card}`}>
                <div>
                  <h1>Lessons</h1>
                  <h2>Take a deep dive with lessons</h2>
                  <p>Get personalized advice on how to improve by booking either a group lesson or 1-on-1 with your favorite instructor</p>
                  <Link href="#"><a>Book now</a></Link>
                </div>
              </div>
              <div className={`${styles.card}`}>
                <Image src='/images/f1.svg' height={400} width={500} style={{ height: "auto" }} />
              </div>
              <div className={`${styles.card}`}>
                <div>
                  <h1>Q&amp;As</h1>
                  <h2>Get quick answers with Q&amp;A</h2>
                  <p>Whether you're a fan or you're looking for advice, use Q&amp;As to ask your favorite instructor a quick question</p>
                  <Link href="#"><a>Ask a question</a></Link>
                </div>
              </div>
              <div className={`${styles.card}`}>
                <Image src='/images/f2.svg' height={500} width={500} style={{ height: "auto" }} />
              </div>
              <div className={`${styles.card}`}>
                <div>
                  <h1>Courses</h1>
                  <h2>Immersive courses</h2>
                  <p>Stay inspired with courses from the worlds greatest athletes &amp; coaches. Watch a single course or get access to our entire library of courses with All Access</p>
                  <Link href="#"><a>View courses</a></Link>
                </div>
              </div>
              <div className={`${styles.card}`}>
                <Image src='/images/f3.svg' height={400} width={500} style={{ height: "auto" }} />
              </div>
            </div>
          </section>
          <section className={styles.instructor}>
            <div className={styles.instructor_top}>
              <h2>Featured Instructors</h2>
              <p>New and trending instructors</p>
            </div>
            <div className={styles.instructor_container}>
              <div className={styles.instructor_grid}>
                <div className={styles.instructor_card}>
                  <div className={styles.instructor_card_top}>
                    <Image src='/images/IMAGEin1.png' height={500} width={500} style={{ height: "auto" }} />
                  </div>
                  <div className={styles.instructor_card_bottom}>
                    <div>
                      <p className={styles.instructor_card_name}>Michael Phelps</p>
                      <p className={styles.instructor_card_desc}>Team USA Swimmer</p>
                    </div>
                    <div>
                      <p className={styles.instructor_card_button}>View Course</p>
                    </div>
                  </div>
                </div>
                <div className={styles.instructor_card}>
                  <div className={styles.instructor_card_top}>
                    <Image src='/images/IMAGEin1.png' height={500} width={500} style={{ height: "auto" }} />
                  </div>
                  <div className={styles.instructor_card_bottom}>
                    <div>
                      <p className={styles.instructor_card_name}>Michael Phelps</p>
                      <p className={styles.instructor_card_desc}>Team USA Swimmer</p>
                    </div>
                    <div>
                      <p className={styles.instructor_card_button}>View Course</p>
                    </div>
                  </div>
                </div>
                <div className={styles.instructor_card}>
                  <div className={styles.instructor_card_top}>
                    <Image src='/images/IMAGEin1.png' height={500} width={500} style={{ height: "auto" }} />
                  </div>
                  <div className={styles.instructor_card_bottom}>
                    <div>
                      <p className={styles.instructor_card_name}>Michael Phelps</p>
                      <p className={styles.instructor_card_desc}>Team USA Swimmer</p>
                    </div>
                    <div>
                      <p className={styles.instructor_card_button}>View Course</p>
                    </div>
                  </div>
                </div>
                <div className={styles.instructor_card}>
                  <div className={styles.instructor_card_top}>
                    <Image src='/images/IMAGEin1.png' height={500} width={500} style={{ height: "auto" }} />
                  </div>
                  <div className={styles.instructor_card_bottom}>
                    <div>
                      <p className={styles.instructor_card_name}>Michael Phelps</p>
                      <p className={styles.instructor_card_desc}>Team USA Swimmer</p>
                    </div>
                    <div>
                      <p className={styles.instructor_card_button}>View Course</p>
                    </div>
                  </div>
                </div>
                <div className={styles.instructor_card}>
                  <div className={styles.instructor_card_top}>
                    <Image src='/images/IMAGEin1.png' height={500} width={500} style={{ height: "auto" }} />
                  </div>
                  <div className={styles.instructor_card_bottom}>
                    <div>
                      <p className={styles.instructor_card_name}>Michael Phelps</p>
                      <p className={styles.instructor_card_desc}>Team USA Swimmer</p>
                    </div>
                    <div>
                      <p className={styles.instructor_card_button}>View Course</p>
                    </div>
                  </div>
                </div>
                <div className={styles.instructor_card}>
                  <div className={styles.instructor_card_top}>
                    <Image src='/images/IMAGEin1.png' height={500} width={500} style={{ height: "auto" }} />
                  </div>
                  <div className={styles.instructor_card_bottom}>
                    <div>
                      <p className={styles.instructor_card_name}>Michael Phelps</p>
                      <p className={styles.instructor_card_desc}>Team USA Swimmer</p>
                    </div>
                    <div>
                      <p className={styles.instructor_card_button}>View Course</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.instructor_bottom}>
              <button>View All</button>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Home