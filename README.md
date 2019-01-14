### Пример использования

``` javascript
const createClient = require('ads-catalogue-client')
const catalogue = createClient(projectId, projectStarageName)
catalogue.listProducts()
  .then(console.log)
```

### Методы

- `#listProducts`: () -> Promise<Array<Product>>
- `#listPads`: () -> Promise<Array<Pad>>
- `#listBusinessGoals`: () -> Promise<Array<BusinessGoal>>

### Локализация

Списки, возвращаемые клиентом имеют метод `#localize` (lang:String) -> <Array<...>>, локализующий объекты списка.