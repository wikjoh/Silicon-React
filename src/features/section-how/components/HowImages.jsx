import styles from './HowImages.module.css'

const HowImages = ({ imgOrder }) => {

  if (1===1) {
    return (
      <div className={styles.images} aria-label="A set of images showcasing some features of the app.">
        <div className={`${styles.imgBgContainer} desktop`}>
          <img src="/images/desktop/howdoesitwork-bg.png" alt="Budget and spending." />
        </div>
        <div className={`${styles.imgContainer} desktop`} data-imgorder={imgOrder[0]}>
          <img src="/images/desktop/howdoesitwork-left.png" alt="Budget and spending." />
        </div>
        <div className={`${styles.imgContainer} desktop`} data-imgorder={imgOrder[1]}>
          <img src="/images/desktop/howdoesitwork-center.png" alt="Card transactions." />
        </div>
        <div className={`${styles.imgContainer} desktop`} data-imgorder={imgOrder[2]}>
          <img src="/images/desktop/howdoesitwork-right.png" alt="Money transfers." />
        </div>
      </div>
    )
  } else {
      return (
        <div className="images-container" aria-label="A set of images showcasing some features of the app.">
        <div className="img tablet left">
          <img src="/images/tablet/howdoesitwork-left.png" alt="Card transactions." />
        </div>
        <div className="img desktop left">
          <img src="/images/desktop/howdoesitwork-left.png" alt="Budget and spending." />
        </div>
        <div className="img mobile center">
          <img src="/images/mobile/howdoesitwork.png" alt="Money transfers." />
        </div>
        <div className="img tablet center">
          <img src="/images/tablet/howdoesitwork-center.png" alt="Money tranfers." />
        </div>
        <div className="img desktop center">
          <img src="/images/desktop/howdoesitwork-center.png" alt="Card transactions." />
        </div>
        <div className="img tablet right">
          <img src="/images/tablet/howdoesitwork-right.png" alt="Money transfer interface." />
        </div>
        <div className="img desktop right">
          <img src="/images/desktop/howdoesitwork-right.png" alt="Money transfers." />
        </div>
      </div>
    )
  }
}
export default HowImages