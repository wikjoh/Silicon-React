import styles from './Button.module.css'

const Button = ({ bgColor, textColor, buttonText }) => {
  return (
    <button style={{ backgroundColor: `${bgColor}`}} className={styles.button}>
      <span style={{ color: `${textColor}`}}>{buttonText}</span>
    </button>
  )
}
export default Button