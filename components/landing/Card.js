export default (props) => (
  <div>
    <div className='card'>
      {props.children}
    </div>
    <style jsx>{`
      .card {
        border-radius: 4px;
      }
    `}</style>
  </div>
)
