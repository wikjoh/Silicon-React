import styles from './Map.module.css'

const Map = () => {
  return (
    <div className={styles.mapContainer}>
      <iframe className={styles.mapIframe} src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3155.4305629028495!2d-122.405595!3d37.733042000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDQzJzU5LjAiTiAxMjLCsDI0JzIwLjEiVw!5e0!3m2!1sen!2sse!4v1731708581024!5m2!1sen!2sse" width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}
export default Map