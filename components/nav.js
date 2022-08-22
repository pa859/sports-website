import React from 'react'
import Link from 'next/link'
import styles from './nav.module.scss'
import { useRouter } from 'next/router'

function Nav() {

    const router=useRouter();
    function handleClick(str) {
        let menu = document.querySelector('#menu');
        menu.setAttribute('show', str);
    }

    return (
        <div className={styles._wraper}>
            <div className={styles.container}>
                <div className={styles.navigation}>
                    <div className={styles.navigation_one}>
                        <div className={styles.logo}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 96 96"><switch><g><path fill='#181818' d="M12 28h72a4 4 0 0 0 0-8H12a4 4 0 0 0 0 8zm72 16H12a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8zm0 24H12a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8z" /></g></switch></svg>
                        </div>
                        <ul className={styles.navigation_list_one}>
                            <Link href='/'><a>INSTRUCTORS</a></Link>

                            <Link href='/categories'><a>CATEGORIES</a></Link>

                            <Link href='/'><a>EVENTS</a></Link>

                            <Link href='/'><a>ABOUT</a></Link>
                        </ul>
                    </div>
                    <div className={styles.navigation_two}>
                        <div className={styles.navigation_list_two}>
                        <div><input></input><div><svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                                <path d="M16.2188 14.8828L11.6142 10.2775C12.3563 9.25782 12.7554 8.02886 12.7542 6.76773C12.7542 3.46686 10.0686 0.78125 6.76773 0.78125C3.46686 0.78125 0.78125 3.46686 0.78125 6.76773C0.78125 10.0686 3.46686 12.7542 6.76773 12.7542C8.02886 12.7554 9.25782 12.3563 10.2775 11.6142L14.8828 16.2188L16.2188 14.8828ZM6.76773 10.8635C5.95756 10.8636 5.16557 10.6234 4.49191 10.1733C3.81824 9.72327 3.29317 9.08354 2.9831 8.33506C2.67303 7.58657 2.59188 6.76294 2.74992 5.96834C2.90796 5.17373 3.29808 4.44384 3.87096 3.87096C4.44384 3.29808 5.17373 2.90796 5.96834 2.74992C6.76294 2.59188 7.58657 2.67303 8.33506 2.9831C9.08354 3.29317 9.72327 3.81824 10.1733 4.49191C10.6234 5.16557 10.8636 5.95756 10.8635 6.76773C10.8622 7.85361 10.4303 8.89464 9.66247 9.66247C8.89464 10.4303 7.85361 10.8622 6.76773 10.8635Z" fill="black" />
                            </svg></div>
                            </div>
                            <div><button>SIGN IN</button></div>
                        </div>
                        <div className={styles.navigation_button}>
                            <button onClick={() => { handleClick('true') }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 96 96"><switch><g><path fill='currentColor' d="M12 28h72a4 4 0 0 0 0-8H12a4 4 0 0 0 0 8zm72 16H12a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8zm0 24H12a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8z" /></g></switch></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.menu} id='menu' show='false'>
                <div className={styles.menu_container}>
                    <div className={styles.menu_top}>
                        <div>
                            <div className={styles.logo} onClick={()=>{router.push('/')}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 96 96"><switch><g><path fill='black' d="M12 28h72a4 4 0 0 0 0-8H12a4 4 0 0 0 0 8zm72 16H12a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8zm0 24H12a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8z" /></g></switch></svg>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => { handleClick('false') }}>
                                <svg width={25} enableBackground="new 0 0 32 32" viewBox="0 0 32 32"><path fill='white' d="M18.12109,16L31.06055,3.06055c0.58594-0.58545,0.58594-1.53564,0-2.12109c-0.58594-0.58594-1.53516-0.58594-2.12109,0L16,13.87891L3.06055,0.93945c-0.58594-0.58594-1.53516-0.58594-2.12109,0c-0.58594,0.58545-0.58594,1.53564,0,2.12109L13.87891,16L0.93945,28.93945c-0.58594,0.58545-0.58594,1.53564,0,2.12109C1.23242,31.35352,1.61621,31.5,2,31.5s0.76758-0.14648,1.06055-0.43945L16,18.12109l12.93945,12.93945C29.23242,31.35352,29.61621,31.5,30,31.5s0.76758-0.14648,1.06055-0.43945c0.58594-0.58545,0.58594-1.53564,0-2.12109L18.12109,16z" /></svg>
                            </button>
                        </div>
                    </div>
                    <div>
                        <ul className={styles.menu_list_one}>
                            <Link href='/'><a>INSTRUCTORS</a></Link>
                            <Link href='/categories'><a>CATEGORIES</a></Link>
                            <Link href='/'><a>EVENTS</a></Link>
                            <Link href='/'><a>ABOUT</a></Link>
                        </ul>
                        <div className={styles.menu_list_two} >
                            <div><input></input><div><svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                                <path d="M16.2188 14.8828L11.6142 10.2775C12.3563 9.25782 12.7554 8.02886 12.7542 6.76773C12.7542 3.46686 10.0686 0.78125 6.76773 0.78125C3.46686 0.78125 0.78125 3.46686 0.78125 6.76773C0.78125 10.0686 3.46686 12.7542 6.76773 12.7542C8.02886 12.7554 9.25782 12.3563 10.2775 11.6142L14.8828 16.2188L16.2188 14.8828ZM6.76773 10.8635C5.95756 10.8636 5.16557 10.6234 4.49191 10.1733C3.81824 9.72327 3.29317 9.08354 2.9831 8.33506C2.67303 7.58657 2.59188 6.76294 2.74992 5.96834C2.90796 5.17373 3.29808 4.44384 3.87096 3.87096C4.44384 3.29808 5.17373 2.90796 5.96834 2.74992C6.76294 2.59188 7.58657 2.67303 8.33506 2.9831C9.08354 3.29317 9.72327 3.81824 10.1733 4.49191C10.6234 5.16557 10.8636 5.95756 10.8635 6.76773C10.8622 7.85361 10.4303 8.89464 9.66247 9.66247C8.89464 10.4303 7.85361 10.8622 6.76773 10.8635Z" fill="black" />
                            </svg></div>
                            </div>
                            <div><button>SIGN IN</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav