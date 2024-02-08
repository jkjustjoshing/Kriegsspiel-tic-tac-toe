/** @typedef {{ piece: 'X' | 'O' | null, visibleTo: Set<'X' | 'O'> }} CellState */

const makeCell = () => ({
  piece: null,
  visibleTo: new Set(),
});

export class GameBoard extends HTMLElement {
  // component attributes
  static get observedAttributes() {
    return ["game-id", "role"];
  }

  constructor() {
    super();

    /** @type {'X' | 'O'} */
    this.role = null;

    /** @type {Array<CellState>} */
    this.gameState = [
      makeCell(),
      makeCell(),
      makeCell(),
      makeCell(),
      makeCell(),
      makeCell(),
      makeCell(),
      makeCell(),
      makeCell(),
    ];
  }

  // attribute change
  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[property] = newValue;
    this.render();
  }

  render() {
    this.innerHTML = this.gameState
      .map(
        (cell, cellIndex) =>
          `<button data-cell-id="${cellIndex}">${
            cell.visibleTo.has(this.role) ? cell.piece : "?"
          }</button>`
      )
      .join("");
  }

  // connect component
  connectedCallback() {
    this.render();

    this.addEventListener("click", (event) => {
      if (!(event.target instanceof HTMLButtonElement)) {
        return;
      }
      const cellIndex = event.target.getAttribute("data-cell-id");
      console.log(cellIndex);
    });
  }
}
