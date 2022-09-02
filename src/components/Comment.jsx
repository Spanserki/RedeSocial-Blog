import styles from './Comment.module.css'
import {Trash} from 'phosphor-react'
import {ThumbsUp} from 'phosphor-react'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://avatars.githubusercontent.com/u/97187822?v=4" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Guilherme Spanserki</strong>

                            <time className={styles.time} title='02 de Setembro as 10h58' dateTime='2022-05-08 08:13:26'>Publicado a 1h</time>
                        </div>

                        <button title='Deletar comentario'>
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>Muito bom, parabens!!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20}/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
    }