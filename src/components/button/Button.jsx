import styles from './Button.module.css'

const Button = ({ bgColor, textColor, buttonText, onClick }) => {
  return (
    <button onClick={onClick} type="button" style={{ backgroundColor: `${bgColor}`}} className={styles.button}>
      <span style={{ color: `${textColor}`}}>{buttonText}</span>
    </button>
  )
}
export default Button