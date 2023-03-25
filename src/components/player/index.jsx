import React, { createContext, useContext, useState } from "react";
import ReactDOM from "react-dom";
import {Container, Button, Overlay, Inner} from "./playerStyles"

const PlayerContext = createContext();

const Player = ({children, ...restProps}) => {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{showPlayer, setShowPlayer}}>
      <Container {...restProps}>
        {children}
      </Container>
    </PlayerContext.Provider>
  )
}

Player.Video = function PlayerVideo ({children, src, ...restProps}) {
  const {showPlayer, setShowPlayer} = useContext(PlayerContext);


  return showPlayer && ReactDOM.createPortal(
    <Overlay data-testid="player" {...restProps} onClick={() => setShowPlayer(false)}>
      <Inner>
        <video id="netflix-player" controls>
          <source src={src} type="video/mp4" />
        </video>
      </Inner>
    </Overlay>,
    document.body
  )

}

Player.Button = function PlayerButton({children, ...restProps}) {
  const {setShowPlayer}  = useContext(PlayerContext);

  return <Button {...restProps} onClick={() => setShowPlayer(prev => !prev)}>{children}</Button>
}


export default Player