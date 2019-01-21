### Пример использования

``` javascript
const createClient = require('ads-catalogue-client')
const catalogue = createClient(projectId, projectStarageName)

catalogue.listProducts()
  .then(console.log)
```

### Методы

- `#listProducts: () -> Promise<Array<Product>>`
- `#listPads: () -> Promise<Array<Pad>>`
- `#listBusinessGoals: () -> Promise<Array<BusinessGoal>>`
- `#listArticles: () -> Promise<Array<Article>>`

### Локализация

Списки, возвращаемые клиентом имеют метод `#localize (lang:String) -> <Array<...>>`, локализующий объекты списка.

Пример:

``` javascript
const createClient = require('ads-catalogue-client')
const catalogue = createClient(projectId, projectStarageName)

;(async () => {
  const pads = await catalogue.listPads()
  console.log('Original:', pads)
  console.log('Localized:', pads.localize('ru'))
})()
```

Результат:

```
Original: [ { id: '1a6a5596-ea72-43e5-8a9f-c52a48510a47',
    title:
     { _type: 'localeString',
       en: 'Mediaprojects',
       ru: 'Медиапроекты' } },
  { id: '4daf8673-8441-463c-8b51-e198a1c4a3cc',
    parent: '1a6a5596-ea72-43e5-8a9f-c52a48510a47',
    title: { _type: 'localeString', en: 'Lady', ru: 'Леди' } },
  { id: 'a039fbbb-ae94-4dea-938e-715ac6fc5337',
    title: { _type: 'localeString', en: 'Cloud', ru: 'Облако' } },
  localize: [Function: localize] ]
Localized: [ { id: '1a6a5596-ea72-43e5-8a9f-c52a48510a47',
    title: 'Медиапроекты' },
  { id: '4daf8673-8441-463c-8b51-e198a1c4a3cc',
    parent: '1a6a5596-ea72-43e5-8a9f-c52a48510a47',
    title: 'Леди' },
  { id: 'a039fbbb-ae94-4dea-938e-715ac6fc5337', title: 'Облако' } ]
```