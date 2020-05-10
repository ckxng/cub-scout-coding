/**
 * @description display a message by adding a paragraph to the body
 * @param {String} message the text to display
 */
function say(message) {
  node = document.createElement("p");
  node.appendChild(document.createTextNode(message));
  document.getElementsByTagName("body")[0].appendChild(node);
}
