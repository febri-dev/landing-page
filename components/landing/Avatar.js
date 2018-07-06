export default () => (
  <div>
    <div id='avatar' />
    <style jsx>{`
      #avatar {
        position: relative;
        z-index: 100;

        margin: 0 auto -108px;
        width: 192px;
        height: 192px;

        background-image: url('https://www.gravatar.com/avatar/c0f719f012e74ffaec3a8e4f7b854689?s=1024');
        background-size: cover;
        border: 3px white solid;
        border-radius: 100%;
      }
    `}</style>
  </div>
)
