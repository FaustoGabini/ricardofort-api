# Ricardo Fort API

[ricardofortapi](https://ricardofort-api.onrender.com/quotes) es una API JSON gratuita para obtener frases de Ricardo Fort seleccionados a mano.

## Uso

```shell
# Recupera una frase aleatoria del comandante en formato JSON.
GET https://ricardofort-api.onrender.com/quotes

# Recupera todas las frases del comandante
GET https://ricardofort-api.onrender.com/quotes/all

# Buscar por texto
GET https://ricardofort-api.onrender.com/quotes/search?query={query}
```
Respuesta de ejemplo
```json
{
    "id": "b526b60c-57e3-4425-b6ac-95e87836097e",
    "value": "MAMÁ, ¡CORTASTE TODA LA LOOZ!"
}
```