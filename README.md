# jQuery Markdown Converter

Este projeto teste utiliza uma classe em jQuery para converter uma string formatada em Markdown para o formato HTML e injeta o resultado em um elemento passado para o seu metodo por um `id`


## Detalhes

Criar uma classe em jQuery chamada `MarkdownConverter` com um método `convert`. Esse método receberá uma string no formato Markdown, a converterá para HTML e injetará o resultado em um elemento especificado pelo seu ID.

Para converter a string Markdown em HTML, utilutilizaremos a biblioteca `marked`, que é uma popular biblioteca JavaScript para conversão de Markdown.

### **Descrição do código**

   - Incluí as bibliotecas jQuery e `marked` na seção `<head>` do documento HTML.
   - Criar a classe `MarkdownConverter` com um método `convert`.
   - O método `convert` recebe uma string no formato Markdown e um ID de elemento.
   - A string Markdown é convertida para HTML usando `marked`.
   - O HTML resultante é injetado no elemento com o ID especificado usando jQuery.

### **Como utilizar**

   - Defina a string Markdown e o ID do elemento onde o HTML convertido será injetado.
   - Chame o método `convert` da instância da classe `MarkdownConverter`.
