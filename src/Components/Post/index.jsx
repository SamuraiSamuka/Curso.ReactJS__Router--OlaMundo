import styles from './Post.module.css'

export default function Post({ post }) {
  return (
    <div className={styles.post}>
        <img 
            src={`/assets/posts/${post.id}/capa.png`} 
            className={styles.capa} 
            alt="Imagem capa do post" />
        <h2
            className={styles.titulo}>
            {post.titulo}</h2>
        <button
            className={styles.botaoLer}>
            Ler</button>

    </div>
  )
}
