import React from "react";

import Home from "../pages/index";

describe("Tests for Page", () => {
  it("Shoul click services from navbar", async () => {
    // renderizar o componente
    const { getByTestId } = render(<Home />);
    //const fieldItem = await waitForElement(() => getByTestId(""));
    const fieldItem = await screen.getByAttribute(
      "xpath",
      "[@id='header-style']/div[3]/nav/ul/li[1]/a"
    );
    console.log("fieldItem", fieldItem);
    // buscar opção service na navbar

    // clicar em service da navbar

    // verificar se a navegação está correta
  });
});

