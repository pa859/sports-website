import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '../components/nav'
import styles from '../sass/layouts/categories.module.scss'

function Categories() {
    return (
        <>
            <Nav />
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
                                <Link href='/course'>
                                    <a>
                                         <div className={styles._instructor}>
                                            <div className={styles._instructor_left}>
                                                <Image src="/images/in1.png" width={130} height={200} style={{ height: "auto" }} />
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
                                    </a>
                                </Link>
                                <div className={styles._instructor}>
                                    <div className={styles._instructor_left}>
                                        <Image src="/images/in1.png" width={130} height={200} style={{ height: "auto" }} layout='fixed'/>
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
                                        <Image src="/images/in1.png" width={130} height={200} style={{ height: "auto" }} />
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
        </>
    )
}

export default Categories