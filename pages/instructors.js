import React from 'react'
import Image from 'next/image'
import styles from '../sass/layouts/instructors.module.scss'

function Instructors() {
  return (
    <div className={styles.wraper}>
        <div className={styles.container}>
            <section className={styles.categories}>
                <h1>All Categories</h1>
            </section>
            <section className={styles._category}>
                <div className={styles._category_head}>
                    <h2>Swimming</h2>
                </div>
                <div className={styles._category_bottom}>
                    <div className={styles._category_container}>
                        <div className={styles._instructor}>
                            <div className={styles._instructor_left}>
                                <Image src="/images/IMAGEin1.png" width={130} height={200} style={{height: "auto"}}/>
                            </div>
                            <div className={styles._instructor_right}>
                                <div className={styles._instructor_right_one}>
                                    <p>Michael Phelps</p>
                                    <p>Team USA Swimmer</p>
                                </div>
                                <div className={styles._instructor_right_two}>
                                    <p>From: $89</p>
                                    <p>Course</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles._instructor}>
                            <div className={styles._instructor_left}>
                                <Image src="/images/IMAGEin1.png" width={130} height={200} style={{height: "auto"}}/>
                            </div>
                            <div className={styles._instructor_right}>
                                <div className={styles._instructor_right_one}>
                                    <p>Michael Phelps</p>
                                    <p>Team USA Swimmer</p>
                                </div>
                                <div className={styles._instructor_right_two}>
                                    <p>From: $89</p>
                                    <p>Course</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles._instructor}>
                            <div className={styles._instructor_left}>
                                <Image src="/images/IMAGEin1.png" width={130} height={200} style={{height: "auto"}}/>
                            </div>
                            <div className={styles._instructor_right}>
                                <div className={styles._instructor_right_one}>
                                    <p>Michael Phelps</p>
                                    <p>Team USA Swimmer</p>
                                </div>
                                <div className={styles._instructor_right_two}>
                                    <p>From: $89</p>
                                    <p>Course</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Instructors