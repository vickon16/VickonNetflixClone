import React from "react"

import {render, fireEvent, screen} from "@testing-library/react";
import {Player} from "../../components";

describe("<Player />", () => {
  it("renders the <Player /> with a bunny video", () => {
    const {container} = render(
      <Player>
        <Player.Button /><Player.Video src="/videos/bunny.mp4" />
      </Player>
    )

    const playerElement = screen.getByTestId("player");
    const playerText = screen.getByText("Play");



    expect(playerElement).toBeFalsy();
    fireEvent.click(playerText);

    expect(playerElement).toBeTruthy();
    fireEvent.click(playerText);

    expect(playerElement).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  })
})