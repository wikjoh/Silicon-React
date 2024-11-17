import styles from './ImageDescriptions.module.css'

const ImageDescriptions = ({ imgOrder }) => {

  if (1===1) {
    return (
      <div className={`image-description ${styles.imageDescription}`} data-currentimage={imgOrder[1]} key={imgOrder[1]}>
        {imgOrder[1] === 1 && (
          <>
            <h3>Transfers to people from your contact list</h3>
            <p>Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
          </>
        )}
        {imgOrder[1] === 2 && (
          <>
            <h3>Latest transaction history</h3>
            <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum.</p>
          </>
        )}
        {imgOrder[1] === 3 && (
          <>
            <h3>Budget and spendings history</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptatum magni sed alias at non, quia explicabo sint pariatur ducimus.</p>
          </>
        )}
      </div>
    )
  } else {
      return (
        <>
        <div className="image-description mobile">
          <h3>Transfers to people from your contact list</h3>
          <p>Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
        </div>

        <div className="image-description tablet">
          <h3>Step 3. Transfers to people from your contact list</h3>
          <p>Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
        </div>

        <div className="image-description desktop">
          <h3>Latest transaction history</h3>
          <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum.</p>
        </div>
      </>
    )
  }
}
export default ImageDescriptions