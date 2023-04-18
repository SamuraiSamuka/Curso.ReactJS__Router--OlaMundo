import { Link } from 'react-router-dom'
import styles from './Post.module.css'
import BotaoPrincipal from 'Components/BotaoPrincipal'

export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
          <img 
              src={`/assets/posts/${post.id}/capa.png`} 
              className={styles.capa} 
              alt="Imagem capa do post" />
          <h2
              className={styles.titulo}>
              {post.titulo}</h2>
              
          <BotaoPrincipal>Ler</BotaoPrincipal>

      </div>
    </Link>
  )
}
