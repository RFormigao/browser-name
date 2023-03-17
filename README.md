# getBrowserInfo

O `getBrowserInfo` é uma função JavaScript que permite obter informações do navegador em que o seu aplicativo está sendo executado. Ele retorna um objeto contendo o nome do navegador e a sua versão.

## Como usar

1. Adicione o arquivo `getBrowserInfo.js` ao seu projeto.

2. Importe a função `getBrowserInfo` no seu arquivo JavaScript.

```javascript
   import { getBrowserInfo } from './getBrowserInfo.js';
```

3. Chame a função `getBrowserInfo` para obter as informações do navegador.

```javascript
   const browser = getBrowserInfo();
   console.log(`Browser: ${browser.name} ${browser.version}`);
```

## Exemplo de retorno

```javascript
{
  name: "chrome",
  version: 89
}
```

## Dependências

O `getBrowserInfo` depende da propriedade `navigator.userAgent`, que é suportada pela maioria dos navegadores modernos.

## Contribuindo

Se você encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.
