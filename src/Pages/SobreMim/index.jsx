import styles from './SobreMim.module.css'
import PostModelo from "Components/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.jpg"

export default function SobreMim() {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre mim"
    >
      <h3 className={styles.subtitulo}>
        Olá, eu sou o Samuel!
      </h3>
      <img 
        src={fotoSobreMim} 
        alt="Foto do Samuel programando"
        className={styles.fotoSobreMim}
        />
      <p className={styles.paragrafo}>Oi, tudo bem? Eu sou desenvolvedor full-stack em desenvolvimento e estou feliz de te ver por aqui.</p>
      <p className={styles.paragrafo}>Minha história com programação começou nos sites da khan academy e da sololearn, que oferecem cursos básicos de programação e me apresentaram a este universo do desenvolvimento. Lá eu conheci a tríade de tecnologias que sustentam o front-end da web: HTML, CSS e Javascript. Mas senti que precisava aprofundar mais meus conhecimentos.</p>
      <p className={styles.paragrafo}>Assim, iniciei um curso de análise e desenvolvimento de sistema (ADS) na Faculdade Educacional da Lapa (FAEL), o qual conclui em 2021. Lá eu aprendi bastante coisas novas e fui apresentado a matérias como algoritmos, banco de dados, arquitetura de computadores e análise de sistemas.</p>
      <p className={styles.paragrafo}>Após finalizar o curso senti a nescessidade de buscar cursos online para aprender a desenvolver de fato, já que a faculdade me trouxe mais conhecimentos teóricos gerais da área do que conhecimentos práticos em si. Uma amiga minha me apresentou a plataforma alura, a qual já tinha ouvido falar no jovem nerd, que possuia centenas de cursos de diversas áreas, o que era bem interessante, mas na época achava o preço salgado, porém decidir fazer. E tem sido um dos melhores investimentos que eu já fiz.</p>
      <p className={styles.paragrafo}>Na Alura venho estudado e aprendido diversas ferramentas e tecnicas úteis para a realidade do desenvolvimento, como reactJS, SASS e outros. E tenho feitos projetos muito massinhas durante os cursos. Você pode vê-los aqui: <a href="https://cursos.alura.com.br/vitrinedev/samurai-samuka" target="_blank">Vitrine.dev do Samuel</a></p>
      <p className={styles.paragrafo}>A alura também conta com um projeto muito interessante chamado challenges, onde são propostos desafios específicos por área e como a minha área atualmente é o front-end é desse tipo que vou falar. O desafio fornece um design e requisitos de um projeto modelo, deixando a responsabilidade do desenvolvimento para o Aluno. E isso eu achei incrível pois me fez enxergar do quanto eu já era capaz eu quanto eu ainda preciso aprender. Pôr em prática é sem dúvidas uma das melhores formas de aprender.</p>
      <p className={styles.paragrafo}>Aqui está o projeto que eu desenvolvi durante o 5º challenge front-end: <a target="blank" href="https://alura-geek-reactjs.vercel.app/">Alura Geek</a></p>
      <p className={styles.paragrafo}>Recentemente eu conheci também outro projeto incrível o SouJunior Lab, onde desenvolvedores júniores podem adiquirir experiência participando de projetos voluntários e estou realmente achando fenomenal esta iniciativa. <a href="https://discord.gg/soujunior-community-759176734460346423" target="_blank">Discord do SouJunior Lab.</a></p>
    </PostModelo>
  )
}