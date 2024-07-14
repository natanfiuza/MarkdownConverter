// import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

class MarkdownConverter {
  constructor() {
    // Inicializador, se necessário
  }

  /**
   * Converte uma string em Markdown para html e injeta em um elemento pelo seu id
   * @param string markdown_string
   * @param string element_id
   */
  convert(markdown_string, element_id) {
    // Converte a string markdown em HTML
    const html_string = marked.parse(markdown_string);

    // Injeta o HTML no elemento especificado pelo ID
    $(`#${element_id}`).html(html_string);
  }
}
