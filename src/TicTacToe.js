export class TicTacToe extends HTMLElement {
  // component attributes
  static get observedAttributes() {
    return ["game-id", "role"];
  }

  constructor() {
    super();
    this["game-id"] = null;
    this["role"] = null;
  }

  // attribute change
  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[property] = newValue;
    this.render();
  }

  render() {
    this.textContent = "Game ID " + this["game-id"];
    this.gameBoard = document.createElement("game-board");
    this.gameBoard.setAttribute("game-id", this["game-id"]);
    this.gameBoard.setAttribute("role", this.role);
    this.appendChild(this.gameBoard);
  }

  // connect component
  connectedCallback() {
    this.render();
  }
}
