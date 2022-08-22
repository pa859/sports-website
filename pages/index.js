import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '../components/nav'
import styles from '../sass/layouts/home.module.scss'

function Home() {

  return (
    <>
    <Nav/>
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
            <div className={`${styles.card} ${styles.align_left}`}>
              <Image src='/images/f1.svg' height={400} width={500} style={{ height: "auto" }}/>
            </div>
            <div className={`${styles.card}`}>
              <div>
                <h1>Q&amp;As</h1>
                <h2>Get quick answers with Q&amp;A</h2>
                <p>Whether you're a fan or you're looking for advice, use Q&amp;As to ask your favorite instructor a quick question</p>
                <Link href="#"><a>Ask a question</a></Link>
              </div>
            </div>
            <div className={`${styles.card} ${styles.align_left}`}>
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
            <div className={`${styles.card} ${styles.align_left}`}>
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
        <section className={styles.footer}>
          <div className={styles.footer_top}>
            <div className={styles.footer_top_left}>
              <div className={styles.list}>
                <p>About Us</p>
                <ul>
                  <li><Link href="/"><a>Home</a></Link></li>
                  <li><Link href="/"><a>Our Story</a></Link></li>
                </ul>
              </div>
              <div className={styles.list}>
                <p>More Info</p>
                <ul>
                  <li><Link href="/"><a>Blog</a></Link></li>
                  <li><Link href="/"><a>Privacy Policy</a></Link></li>
                  <li><Link href="/"><a>Terms of Use</a></Link></li>
                </ul>
              </div>
              <div className={styles.list}>
                <p>Support</p>
                <ul>
                  <li><Link href="/"><a>Contact Us</a></Link></li>
                  <li><Link href="/"><a>Press</a></Link></li>
                </ul>
              </div>
              <div className={styles.list}>
                <p>Get Started</p>
                <ul>
                  <li><Link href="/"><button>Become an Instructor</button></Link></li>
                  <li><Link href="/"><button>Register as an Agent</button></Link></li>
                </ul>
              </div>
            </div>
            <div className={styles.footer_top_right}>
              <div className={styles.footer_top_right_container}>
                <div className={styles.footer_top_right_one}>
                  <p>LET'S CONNECT</p>
                  <p>Stay in the loop with promos, new content &amp; giveaways by joining The Skills newsletter.</p>
                </div>
                <div className={styles.footer_top_right_two}>
                  <div>
                    <input></input>
                    <button>Sign Up</button>
                  </div>
                </div>
              </div>
              <div className={styles.footer_top_right_two}>
                <p>Follow Us</p>
                <div>
                  <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M28.9993 0H3.00039C1.35053 0 0 1.68816 0 3.75072V36.2494C0 38.3117 1.35053 39.9999 3.00039 39.9999H28.9993C30.6492 39.9999 31.9997 38.3117 31.9997 36.2494L31.9999 3.75048C31.9999 1.68816 30.6494 0 28.9995 0H28.9993ZM18.039 11.494H21.4433V6.39049H18.039C15.4175 6.39049 13.2785 9.06337 13.2785 12.3447V14.8953H10.5565V19.9999H13.2781V33.6094H17.3612V19.9999H20.7622L21.4433 14.8953H17.361V12.3447C17.361 11.8829 17.6728 11.4934 18.0388 11.4934V11.4941H18.039V11.494Z" fill="#3B5998" />
                  </svg>

                  <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.0076 0.303223C9.42796 0.303223 7.50365 0.311708 7.1296 0.350495C5.77934 0.490798 4.93912 0.756556 4.02376 1.32625C3.31833 1.76413 2.76198 2.27171 2.2129 2.98322C1.21293 4.2808 0.606892 5.87716 0.387505 7.77474C0.280841 8.69595 0.249812 8.88383 0.243509 13.5893C0.241085 15.1578 0.243509 17.222 0.243509 19.9908C0.243509 28.209 0.250782 30.612 0.282296 31.0787C0.391383 32.7211 0.597438 33.7544 1.03379 34.8847C1.8677 37.0484 3.46038 38.6726 5.33669 39.2787C5.98637 39.4878 6.70392 39.6029 7.6251 39.6575C8.0154 39.6787 11.9935 39.6938 15.9739 39.6938C19.9544 39.6938 23.9349 39.6878 24.3155 39.6635C25.3821 39.6008 26.0015 39.4969 26.6863 39.2756C28.5748 38.6666 30.1384 37.0666 30.9892 34.8726C31.4171 33.7696 31.6341 32.6969 31.7323 31.1402C31.7536 30.8008 31.7626 25.3896 31.7626 19.9856C31.7626 14.5808 31.7529 9.17959 31.7315 8.84019C31.6321 7.25837 31.4152 6.19474 30.9735 5.0705C30.6111 4.15019 30.2087 3.46292 29.6244 2.76019C28.5818 1.51534 27.3067 0.757768 25.7872 0.483829C25.051 0.350798 24.9043 0.311404 21.1372 0.303223H16.0076Z" fill="url(#paint0_radial_2_1800)" />
                    <path d="M16.0076 0.303223C9.42796 0.303223 7.50365 0.311708 7.1296 0.350495C5.77934 0.490798 4.93912 0.756556 4.02376 1.32625C3.31833 1.76413 2.76198 2.27171 2.2129 2.98322C1.21293 4.2808 0.606892 5.87716 0.387505 7.77474C0.280841 8.69595 0.249812 8.88383 0.243509 13.5893C0.241085 15.1578 0.243509 17.222 0.243509 19.9908C0.243509 28.209 0.250782 30.612 0.282296 31.0787C0.391383 32.7211 0.597438 33.7544 1.03379 34.8847C1.8677 37.0484 3.46038 38.6726 5.33669 39.2787C5.98637 39.4878 6.70392 39.6029 7.6251 39.6575C8.0154 39.6787 11.9935 39.6938 15.9739 39.6938C19.9544 39.6938 23.9349 39.6878 24.3155 39.6635C25.3821 39.6008 26.0015 39.4969 26.6863 39.2756C28.5748 38.6666 30.1384 37.0666 30.9892 34.8726C31.4171 33.7696 31.6341 32.6969 31.7323 31.1402C31.7536 30.8008 31.7626 25.3896 31.7626 19.9856C31.7626 14.5808 31.7529 9.17959 31.7315 8.84019C31.6321 7.25837 31.4152 6.19474 30.9735 5.0705C30.6111 4.15019 30.2087 3.46292 29.6244 2.76019C28.5818 1.51534 27.3067 0.757768 25.7872 0.483829C25.051 0.350798 24.9043 0.311404 21.1372 0.303223H16.0076Z" fill="url(#paint1_radial_2_1800)" />
                    <path d="M16.0005 5.45459C12.8404 5.45459 12.4438 5.47186 11.2026 5.54247C9.96384 5.61338 9.11829 5.85853 8.37843 6.21823C7.61312 6.58974 6.96393 7.08671 6.31716 7.8955C5.66991 8.70398 5.27235 9.5155 4.97417 10.4719C4.6857 11.397 4.48934 12.4543 4.43358 14.0022C4.37807 15.5537 4.36353 16.0497 4.36353 20C4.36353 23.9503 4.37759 24.4446 4.43383 25.9961C4.49079 27.5446 4.68691 28.6016 4.97442 29.5264C5.27186 30.4831 5.66943 31.2946 6.31644 32.1031C6.96296 32.9122 7.61215 33.4103 8.37698 33.7819C9.11732 34.1416 9.96311 34.3867 11.2016 34.4576C12.4428 34.5282 12.8391 34.5455 15.9991 34.5455C19.1594 34.5455 19.5548 34.5282 20.796 34.4576C22.0347 34.3867 22.8813 34.1416 23.6216 33.7819C24.3867 33.4103 25.0349 32.9122 25.6814 32.1031C26.3287 31.2946 26.7262 30.4831 27.0244 29.5267C27.3105 28.6016 27.5068 27.5443 27.565 25.9964C27.6208 24.4449 27.6353 23.9503 27.6353 20C27.6353 16.0497 27.6208 15.554 27.565 14.0025C27.5068 12.454 27.3105 11.397 27.0244 10.4722C26.7262 9.5155 26.3287 8.70398 25.6814 7.8955C25.0342 7.08641 24.3869 6.58944 23.6209 6.21823C22.8791 5.85853 22.0331 5.61338 20.7943 5.54247C19.5531 5.47186 19.158 5.45459 15.9969 5.45459H16.0005ZM14.9567 8.0758C15.2665 8.0752 15.6122 8.0758 16.0005 8.0758C19.1073 8.0758 19.4756 8.08974 20.7024 8.15944C21.8369 8.22429 22.4527 8.46126 22.8628 8.66035C23.4059 8.92398 23.793 9.23914 24.2 9.74823C24.6073 10.2573 24.8594 10.7422 25.0708 11.421C25.23 11.9331 25.4199 12.7028 25.4715 14.121C25.5272 15.6543 25.5394 16.1149 25.5394 19.9967C25.5394 23.8785 25.5272 24.3391 25.4715 25.8725C25.4196 27.2907 25.23 28.0603 25.0708 28.5725C24.8599 29.2513 24.6073 29.7346 24.2 30.2434C23.7928 30.7525 23.4061 31.0676 22.8628 31.3313C22.4532 31.5313 21.8369 31.7676 20.7024 31.8325C19.4758 31.9022 19.1073 31.9173 16.0005 31.9173C12.8934 31.9173 12.5252 31.9022 11.2986 31.8325C10.1641 31.767 9.54834 31.53 9.13793 31.331C8.59491 31.0673 8.20705 30.7522 7.79978 30.2431C7.39252 29.734 7.14041 29.2503 6.92902 28.5713C6.76976 28.0591 6.57994 27.2894 6.52831 25.8713C6.47255 24.3379 6.4614 23.8773 6.4614 19.9931C6.4614 16.1088 6.47255 15.6507 6.52831 14.1173C6.58019 12.6991 6.76976 11.9294 6.92902 11.4167C7.13993 10.7379 7.39252 10.2531 7.79978 9.74398C8.20705 9.23489 8.59491 8.91974 9.13793 8.6555C9.5481 8.4555 10.1641 8.21914 11.2986 8.15398C12.372 8.09338 12.788 8.0752 14.9567 8.07217V8.0758ZM22.2117 10.491C21.4408 10.491 20.8154 11.2719 20.8154 12.2358C20.8154 13.1994 21.4408 13.9813 22.2117 13.9813C22.9826 13.9813 23.608 13.1994 23.608 12.2358C23.608 11.2722 22.9826 10.4903 22.2117 10.4903V10.491ZM16.0005 12.5303C12.7005 12.5303 10.0249 15.8749 10.0249 20C10.0249 24.1252 12.7005 27.4682 16.0005 27.4682C19.3005 27.4682 21.9751 24.1252 21.9751 20C21.9751 15.8749 19.3003 12.5303 16.0003 12.5303H16.0005ZM16.0005 15.1516C18.1425 15.1516 19.8792 17.3222 19.8792 20C19.8792 22.6776 18.1425 24.8485 16.0005 24.8485C13.8583 24.8485 12.1218 22.6776 12.1218 20C12.1218 17.3222 13.8583 15.1516 16.0005 15.1516V15.1516Z" fill="white" />
                    <defs>
                      <radialGradient id="paint0_radial_2_1800" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.615 42.7277) rotate(-90) scale(39.039 29.0545)">
                        <stop stop-color="#FFDD55" />
                        <stop offset="0.1" stop-color="#FFDD55" />
                        <stop offset="0.5" stop-color="#FF543E" />
                        <stop offset="1" stop-color="#C837AB" />
                      </radialGradient>
                      <radialGradient id="paint1_radial_2_1800" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-5.03736 3.14086) rotate(80.8999) scale(17.3293 57.9626)">
                        <stop stop-color="#3771C8" />
                        <stop offset="0.128" stop-color="#3771C8" />
                        <stop offset="1" stop-color="#6600FF" stop-opacity="0" />
                      </radialGradient>
                    </defs>
                  </svg>

                  <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M28.9993 0H3.00039C1.35053 0 0 1.68816 0 3.75072V36.2494C0 38.3117 1.35053 39.9999 3.00039 39.9999H28.9993C30.6492 39.9999 31.9997 38.3117 31.9997 36.2494L31.9999 3.75048C31.9999 1.68816 30.6494 0 28.9995 0H28.9993ZM13.6359 16.3055H16.9064V18.4013L16.9537 18.4014C17.4091 17.38 18.5228 16.3056 20.1835 16.3056C23.637 16.3054 24.2758 18.9921 24.2758 22.4867V29.6056L20.865 29.6057V23.295C20.865 21.7906 20.8401 19.854 19.0916 19.854C17.3157 19.854 17.0437 21.4915 17.0437 23.1853V29.6057H13.636V16.3054L13.6359 16.3055ZM11.2714 12.6111C11.2714 13.8348 10.4769 14.8278 9.49787 14.8278C8.51886 14.8278 7.72407 13.8347 7.72407 12.6111C7.72407 11.3873 8.51886 10.3942 9.49787 10.3942C10.4769 10.3942 11.2714 11.3873 11.2714 12.6111ZM7.72407 16.3055H11.2714V29.6058H7.72407V16.3055Z" fill="#0077B5" />
                  </svg>
                  <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M28.9993 0H3.00039C1.35053 0 0 1.68816 0 3.75072V36.2494C0 38.3117 1.35053 39.9999 3.00039 39.9999H28.9993C30.6492 39.9999 31.9997 38.3117 31.9997 36.2494L31.9999 3.75048C31.9999 1.68816 30.6494 0 28.9995 0H28.9993ZM25.7786 12.4185C25.0597 12.8205 24.285 13.0875 23.4762 13.2066C24.3049 12.5862 24.9386 11.6033 25.2411 10.4328C24.4666 11.0055 23.6058 11.4253 22.6938 11.65C21.9603 10.6759 20.9187 10.0704 19.7648 10.0704C17.5491 10.0704 15.7552 12.3141 15.7552 15.082C15.7552 15.4727 15.7899 15.8548 15.8578 16.2234C12.5239 16.0122 9.56823 14.0171 7.58967 10.9818C7.23476 11.7472 7.04689 12.6174 7.04689 13.5023V13.5029C7.04689 15.2409 7.75287 16.7779 8.8299 17.6743C8.17258 17.6499 7.55434 17.4208 7.01156 17.0495V17.1121C7.01156 19.5426 8.39358 21.5706 10.23 22.029C9.89348 22.1433 9.53838 22.2063 9.17252 22.2063C8.91332 22.2063 8.66362 22.1729 8.41537 22.1165C8.9283 24.1069 10.4088 25.558 12.1622 25.6003C10.7874 26.9466 9.06078 27.7482 7.17841 27.7482C6.85354 27.7482 6.53703 27.7234 6.2209 27.676C8.00026 29.1032 10.1081 29.9296 12.3726 29.9296C19.75 29.9296 23.7878 22.2874 23.7878 15.6612C23.7878 15.441 23.7838 15.2277 23.7765 15.012C24.5601 14.3113 25.2394 13.4272 25.7772 12.4206L25.779 12.4183L25.7786 12.4186V12.4185Z" fill="#1DA1F2" />
                  </svg>

                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer_bottom}>
            <p>© 2022 Skills Annex Inc. All Rights Reserved</p>
          </div>
        </section>
      </div>
    </div>
    </>
  )
}

export default Home