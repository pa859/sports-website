import React from 'react'
import Nav from '../components/nav'
import Image from 'next/image'
import styles from '../sass/layouts/courses.module.scss'

function Course() {
  return (
    <>
      <Nav/>
      <div className={styles._wraper}>
        <div className={styles.container}>
          <section className={styles.instructor}>
            <div className={styles.instructor_left}>
              <div>
                <div className={styles.instructor_left_top}>
                  <Image src='/images/IMAGEin1.png' height={407} width={407} style={{height: "auto"}}/>
                </div>
                <div className={styles.instructor_left_top_tag}><p>Tags</p></div>
                <div>
                  <div>
                    <p>Men's</p>
                    <p>Professional</p>
                    <p>Swimming</p>
                  </div>
                </div>
              </div>
            </div> 
            <div className={styles.instructor_right}>
              <div>
                <div><h1>Michael Phelps</h1></div>
                <div><p>Team USA Swimmer</p></div>
                <div>
                  Michael Phelps has a total of 28 medals over 4 summer Games. As a swimmer, he specialized in butterfly, freestyle, and the medley. He is the most decorated athlete in the history of the Games, and continues to make his mark on swimming through the Michael Phelps Foundation.
                </div>
                <div>
                  <div>
                    <div><p>Course</p><p>Video Course</p></div><div><p>$89</p></div>
                  </div>
                  <div>
                    <p>Purchase a course to learn how the world's best work on their physical and mental game. All of our courses provide insight into the drills and exercises that the most accomplished athletes use to level up.</p>
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