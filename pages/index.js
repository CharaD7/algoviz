import React, { useCallback, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Learn from './Learn/learn';
import Visuals from './Visuals/visuals';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particlesConfig from '../config/configParticles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { withTheme } from '@emotion/react';

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#0000FF',
    boxShadow: 24,
    p: 4,
    opacity: .7,
    color: 'white',
  };

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <div className="homeBackGround">
      <Particles id="tsparticles" params={particlesConfig} init={particlesInit} loaded={particlesLoaded} className={openModal ? styles.blurred : null}/>
      <div className={styles.container}>
        <Head>
          <title>AlgoViz</title>
          <meta name="description" content="Build an intuitive understanding of different algorithms through visualizations" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
            AlgoViz
          </h1>
          <p className={styles.description}>
            Build an intuitive understanding of different algorithms through visualizations
          </p>
          <div className={styles.grid}>
            <Link href="/Learn/learn" className={styles.card}>
              <center>
                <h2 className={styles.blurred}>Learn</h2>
              </center>
              <p>Learn algorithms through visualizations.</p>
            </Link>
            <Link href="/Visuals/visuals" className={styles.card}>
              <center>
                <h2 className={openModal ? styles.blurred : null}>Practice</h2>
              </center>
              <p>Practice your understanding of algorithms and data structures</p>
            </Link>
          </div>
          <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Big O Notation Primer
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Text will be here
              </Typography>
            </Box>
          </Modal>
          <Button variant="outlined" onClick={handleOpen}>Big O Primer</Button>
        </main>
       <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
      </div>
  )
}
