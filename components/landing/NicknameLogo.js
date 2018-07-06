const scrollToAvatar = () => {
  window.scroll({
    top: window.innerHeight,
    behavior: 'smooth'
  })
}

export default () => (
  <div>
    <img src='/griko-nibras-stylized.svg' id='nickname' onClick={scrollToAvatar} />
    <style jsx>{`
      #nickname {
        cursor: pointer;
        filter: drop-shadow(0 10px 8px rgba(0, 0, 0, .3));
        margin: 0 auto 4rem;
        max-width: 24rem;
        transform: scale(1.125);
        transition: 250ms ease;
        width: 80%;
      }

      #nickname:hover {
        filter: drop-shadow(0 10px 16px rgba(0, 0, 0, .3));
        transform: scale(1.2) rotate(1deg);
      }

      #nickname:active {
        filter: drop-shadow(0 10px 12px rgba(0, 0, 0, .3));
        transform: scale(1.15) rotate(.5deg);
      }
    `}</style>
  </div>
)
