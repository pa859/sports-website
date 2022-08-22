import React from 'react'
import Nav from '../components/nav'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../sass/layouts/courses.module.scss'

function Course() {
  return (
    <>
      <Nav />
      <div className={styles._wraper}>
        <div className={styles.container}>
          <section className={styles.instructor}>
            <div className={styles.instructor_left}>
              <div><Image src='/images/in3.png' height='407' width='407'style={{height: "auto"}}/></div>
              <div>
                <p>Tags</p>
                <div><p>Men's</p><p>Professional</p><p>Swimming</p></div>
              </div>
            </div>
            <div className={styles.instructor_right}>
              <div className={styles.instructor_right_top}>
                <h1>Michael Phelps</h1>
                <p>Team USA Swimmer</p>
              </div>
              <div className={styles.instructor_right_info}><p>Michael Phelps has a total of 28 medals over 4 summer Games. As a swimmer, he specialized in butterfly, freestyle, and the medley. He is the most decorated athlete in the history of the Games, and continues to make his mark on swimming through the Michael Phelps Foundation.</p></div>
              <div className={styles.instructor_right_pannel}>
                <div className={styles.instructor_right_pannel_top}>
                  <div><p>Course</p><p>Video Course</p></div><div><p>$89</p></div>
                </div>
                <div className={styles.instructor_right_pannel_middle}>
                  <p>Level up in and out of the pool</p>
                  <p>Purchase a course to learn how the world's best work on their physical and mental game. All of our courses provide insight into the drills and exercises that the most accomplished athletes use to level up.</p>
                </div>
              </div>
              <div className={styles.instructor_right_button}><button>Buy Course $89</button></div>
            </div>
          </section>
          <section className={styles._category}>
            <div className={styles._category_head}>
              <h2>Lessons</h2>
            </div>
            <div className={styles._category_bottom}>
              <div className={styles._category_container}>
                <div className={styles.lesson}>
                  <div className={styles.lesson_one}><Image src='/images/le.png' width={399} height={226} style={{ height: "auto" }} /></div>
                  <div className={styles.lesson_two}>
                    <div><p>1. Introduction</p><div></div><svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M7.53125 2.375H8.46875C8.55208 2.375 8.59375 2.41667 8.59375 2.5V13.5C8.59375 13.5833 8.55208 13.625 8.46875 13.625H7.53125C7.44792 13.625 7.40625 13.5833 7.40625 13.5V2.5C7.40625 2.41667 7.44792 2.375 7.53125 2.375Z" fill="black" />
                      <path d="M2.75 7.40625H13.25C13.3333 7.40625 13.375 7.44792 13.375 7.53125V8.46875C13.375 8.55208 13.3333 8.59375 13.25 8.59375H2.75C2.66667 8.59375 2.625 8.55208 2.625 8.46875V7.53125C2.625 7.44792 2.66667 7.40625 2.75 7.40625Z" fill="black" />
                    </svg>
                    </div>
                    <div><p>Welcome to The Skills. Get into the mind of one of the most decorated athletes ever. In this session, Michael talks about what he will teach at The Skills. Michael covers everything from swimming freestyle to setting goals. Learn how to perfect your competitive strokes, relax your mind before the competition, improve your pacing &amp; counting, and achieve your dreams. Let's go swimming.</p></div>
                  </div>
                </div>
                <div className={styles.lesson}>
                  <div className={styles.lesson_one}><Image src='/images/le.png' width={399} height={226} style={{ height: "auto" }} /></div>
                  <div className={styles.lesson_two}>
                    <div><p>1. Introduction</p><div></div><svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M7.53125 2.375H8.46875C8.55208 2.375 8.59375 2.41667 8.59375 2.5V13.5C8.59375 13.5833 8.55208 13.625 8.46875 13.625H7.53125C7.44792 13.625 7.40625 13.5833 7.40625 13.5V2.5C7.40625 2.41667 7.44792 2.375 7.53125 2.375Z" fill="black" />
                      <path d="M2.75 7.40625H13.25C13.3333 7.40625 13.375 7.44792 13.375 7.53125V8.46875C13.375 8.55208 13.3333 8.59375 13.25 8.59375H2.75C2.66667 8.59375 2.625 8.55208 2.625 8.46875V7.53125C2.625 7.44792 2.66667 7.40625 2.75 7.40625Z" fill="black" />
                    </svg>
                    </div>
                    <div><p>Welcome to The Skills. Get into the mind of one of the most decorated athletes ever. In this session, Michael talks about what he will teach at The Skills. Michael covers everything from swimming freestyle to setting goals. Learn how to perfect your competitive strokes, relax your mind before the competition, improve your pacing &amp; counting, and achieve your dreams. Let's go swimming.</p></div>
                  </div>
                </div>
                <div className={styles.lesson}>
                  <div className={styles.lesson_one}><Image src='/images/le.png' width={399} height={226} style={{ height: "auto" }} /></div>
                  <div className={styles.lesson_two}>
                    <div><p>1. Introduction</p><div></div><svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M7.53125 2.375H8.46875C8.55208 2.375 8.59375 2.41667 8.59375 2.5V13.5C8.59375 13.5833 8.55208 13.625 8.46875 13.625H7.53125C7.44792 13.625 7.40625 13.5833 7.40625 13.5V2.5C7.40625 2.41667 7.44792 2.375 7.53125 2.375Z" fill="black" />
                      <path d="M2.75 7.40625H13.25C13.3333 7.40625 13.375 7.44792 13.375 7.53125V8.46875C13.375 8.55208 13.3333 8.59375 13.25 8.59375H2.75C2.66667 8.59375 2.625 8.55208 2.625 8.46875V7.53125C2.625 7.44792 2.66667 7.40625 2.75 7.40625Z" fill="black" />
                    </svg>
                    </div>
                    <div><p>Welcome to The Skills. Get into the mind of one of the most decorated athletes ever. In this session, Michael talks about what he will teach at The Skills. Michael covers everything from swimming freestyle to setting goals. Learn how to perfect your competitive strokes, relax your mind before the competition, improve your pacing &amp; counting, and achieve your dreams. Let's go swimming.</p></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}

export default Course