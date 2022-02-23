import Head from 'next/head'
import Link from "next/link";

import styles from '../styles/Home.module.css'
import { useEffect, useState } from "react";
import { Auth } from "aws-amplify";

export default function Home() {
  const [user, setUser] = useState()
  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser()
        setUser(user)
      } catch (e) {
        console.log(e)
      }
    }
    getUser()
  })
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {user ? <button onClick={async () => {
        await Auth.signOut()
        setUser(null)
      } }>Sign out</button> : <Link href="/sign-in">Sign in</Link> }
    </div>
  )
}
