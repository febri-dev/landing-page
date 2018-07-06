export default (props) => (
  <div>
    <img {...props} className='card-image-img' />
    <style jsx>{`
      .card-image-img {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }
    `}</style>
  </div>
)
