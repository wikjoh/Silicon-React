import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const DiscoverMore = () => {
  return (
    <div className="discover-more-container">
      <a className="discover-more" href="#features">
        <label className="btn-chevron chevron-discovermore"> <FontAwesomeIcon icon="fa-chevron-down" /> </label>
        <span>Discover more</span>
      </a>
    </div>
  )
}
export default DiscoverMore