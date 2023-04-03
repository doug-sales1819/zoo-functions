
# Recomendação de Extensão: Better Comments

Se você está procurando uma maneira melhor de gerenciar seus comentários no `Visual Studio Code`, a extensão `Better Comments` pode ser uma ótima escolha para você!

Aqui está uma configuração sugerida que eu uso para adicionar ao seu arquivo `settings.json` do `Visual Studio Code`:



## configurações

para adicionar ao seu arquivo `settings.json`

```json
 "better-comments.tags": [
  {
    "tag": "!",
    "color": "#FF2D00",
    "strikethrough": false,
    "underline": false,
    "backgroundColor": "transparent",
    "bold": false,
    "italic": false
  },
  {
      "tag": "return",
      "color": "#ba01ff",
      "strikethrough": false,
      "underline": false,
      "backgroundColor": "transparent",
      "bold": true,
      "italic": false
  },
  {
    "tag": "?",
    "color": "#3498DB",
    "strikethrough": false,
    "underline": false,
    "backgroundColor": "transparent",
    "bold": false,
    "italic": false
  },
  {
      "tag": "@param",
      "color": "#00a8c6",
      "strikethrough": false,
      "underline": false,
      "backgroundColor": "transparent",
      "bold": true,
      "italic": true
  },
  {
      "tag": "-",
      "color": "#0a837f",
      "strikethrough": false,
      "underline": false,
      "backgroundColor": "transparent",
      "bold": true,
      "italic": true
  },
  {
    "tag": "//",
    "color": "#8870ff",
    "strikethrough": true,
    "underline": false,
    "backgroundColor": "transparent",
    "bold": false,
    "italic": false
  },
  {
    "tag": "todo",
    "color": "#FF8C00",
    "strikethrough": false,
    "underline": false,
    "backgroundColor": "transparent",
    "bold": false,
    "italic": false
  },
  {
    "tag": "*",
    "color": "#98C379",
    "strikethrough": false,
    "underline": false,
    "backgroundColor": "transparent",
    "bold": false,
    "italic": false
  }
]
```