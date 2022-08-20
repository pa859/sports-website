import React from 'react'
import Link from 'next/link'
import styles from './nav.module.scss'

function Nav() {

    function handleClick() {
        let menu=document.querySelector('#menu');
        if(menu.getAttribute('show')==='true') {
            menu.setAttribute('show', 'false');
        }
        else {
            menu.setAttribute('show', 'true');
        }
    }

    function handleMenuClose() {
        let menu=document.querySelector('#menu');
        if(menu.getAttribute('show')==='true') {
            menu.setAttribute('show', 'false');
        }
        else {
            menu.setAttribute('show', 'true');
        } 
    }

    return (
        <div className={styles._wraper}>
            <div className={styles.container}>
                <div className={styles.navigation}>
                    <div className={styles.navigation_one}>
                        <div className={styles.logo}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 96 96"><switch><g><path fill='#181818' d="M12 28h72a4 4 0 0 0 0-8H12a4 4 0 0 0 0 8zm72 16H12a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8zm0 24H12a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8z"/></g></switch></svg>
                        </div>
                        <ul className={styles.navigation_list_one}>
                            <Link href='/instructors'><a>INSTRUCTORS</a></Link>

                            <Link href='/categories'><a>CATEGORIES</a></Link>

                            <Link href='/events'><a>EVENTS</a></Link>

                            <Link href='/about'><a>ABOUT</a></Link>
                        </ul>
                    </div>
                    <div className={styles.navigation_two}>
                        <div className={styles.navigation_list_two}>
                            <div><input></input></div>
                            <div><button>SIGN IN</button></div>
                        </div>
                        <div className={styles.navigation_button}>
                            <button onClick={handleClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 96 96"><switch><g><path fill='currentColor' d="M12 28h72a4 4 0 0 0 0-8H12a4 4 0 0 0 0 8zm72 16H12a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8zm0 24H12a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8z"/></g></switch></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.menu} id='menu' show='false'>
                <div className={styles.menu_container}>
                    <div className={styles.menu_top}>
                        <div>
                            <div className={styles.logo}>

                            </div>
                        </div>
                        <div>
                            <button onClick={handleMenuClose}>
                                <svg width={30}  xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 32 32" viewBox="0 0 32 32"><path fill='white' d="M18.12109,16L31.06055,3.06055c0.58594-0.58545,0.58594-1.53564,0-2.12109c-0.58594-0.58594-1.53516-0.58594-2.12109,0L16,13.87891L3.06055,0.93945c-0.58594-0.58594-1.53516-0.58594-2.12109,0c-0.58594,0.58545-0.58594,1.53564,0,2.12109L13.87891,16L0.93945,28.93945c-0.58594,0.58545-0.58594,1.53564,0,2.12109C1.23242,31.35352,1.61621,31.5,2,31.5s0.76758-0.14648,1.06055-0.43945L16,18.12109l12.93945,12.93945C29.23242,31.35352,29.61621,31.5,30,31.5s0.76758-0.14648,1.06055-0.43945c0.58594-0.58545,0.58594-1.53564,0-2.12109L18.12109,16z"/></svg>
                            </button>
                        </div>
                    </div>
                    <div>
                        <ul className={styles.menu_list_one}>
                            <Link href='/instructors'><a>INSTRUCTORS</a></Link>
                            <Link href='/categories'><a>CATEGORIES</a></Link>
                            <Link href='/events'><a>EVENTS</a></Link>
                            <Link href='/about'><a>ABOUT</a></Link>
                        </ul>
                        <div className={styles.menu_list_two} >
                            <div><input></input></div>
                            <div><button>SIGN IN</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav