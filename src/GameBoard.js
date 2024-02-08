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

    /** @type {Array<Array<CellState>>} */
    this.gameState = [
      [makeCell(), makeCell(), makeCell()],
      [makeCell(), makeCell(), makeCell()],
      [makeCell(), makeCell(), makeCell()],
    ];
  }

  // attribute change
  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[property] = newValue;
    this.render();
  }

  render() {
    this.innerHTML =
      '<div class="game-board">' +
      this.gameState
        .map((row) =>
          row
            .map((cell) => {
              return `<span>${
                cell.visibleTo.has(this.role) ? cell.piece : "?"
              }</span>`;
            })
            .join("")
        )
        .join("") +
      `</div>`;
  }

  // connect component
  connectedCallback() {
    this.render();
  }
}
