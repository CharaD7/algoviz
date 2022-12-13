import { style } from '@mui/system';
import React, { useCallback } from 'react'
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particlesConfig from '../../config/configParticles';
import styles from '../../styles/Home.module.css';
import Cards from '../../components/cards';

const Learn = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);
  const listOfAllALgos = ["Binary Search", "Bubble Sort", "Insertion Sort", "Merge Sort", "Dynamic Programming", "Linked List Traversal", "Depth First Search", "Breadth First Search", "Bit Manipulation", "Quick Sort", "HashMap", "Sliding Window", "Backtracking", "Topological Sort", "Knuth-Morris-Pratt"]
  return (
    <div className="homeBackGround">
      <Particles id="tsparticles" params={particlesConfig} init={particlesInit} loaded={particlesLoaded}/>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 classname={styles.title}>
            Learn Algorithms
          </h1>
          <p className={styles.description}>
            Learn the intuition behind different algorithms
          </p>
            <ul className={styles.cardgrid}>
              {
                listOfAllALgos.map(function (algo, idx) {
                  return (
                        <li key={idx} class={styles.cardgrid.item}>
                          <Cards data={algo}></Cards>
                        </li>
                          )
                })
              }
            </ul>
        </main>
    </div>
    </div>
  )
}

export default Learn
