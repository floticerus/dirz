<a name="Dirz"></a>

## Dirz : [<code>Dirz</code>](#Dirz)
**Kind**: global typedef  

* [Dirz](#Dirz) : [<code>Dirz</code>](#Dirz)
    * [.get(key, [defaultValue])](#Dirz.get) ⇒ <code>\*</code>
    * [.set(key, value, [type])](#Dirz.set)
    * [.remove(key)](#Dirz.remove)

<a name="Dirz.get"></a>

### Dirz.get(key, [defaultValue]) ⇒ <code>\*</code>
gets value for the key.

**Kind**: static method of [<code>Dirz</code>](#Dirz)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| key | <code>string</code> |  |  |
| [defaultValue] | <code>number</code> \| <code>string</code> \| <code>boolean</code> | <code></code> | optional. returns this value if the key has not been set. |

<a name="Dirz.set"></a>

### Dirz.set(key, value, [type])
sets the value with the desired type, if specified.
`bool` type is converted to bool so that passing `"false"` will equal `false`

**Kind**: static method of [<code>Dirz</code>](#Dirz)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> |  |
| value | <code>number</code> \| <code>string</code> \| <code>boolean</code> |  |
| [type] | <code>string</code> | allowed types are `string` `int`/`integer` `float` `bool`/`boolean` |

<a name="Dirz.remove"></a>

### Dirz.remove(key)
removed the key from the store

**Kind**: static method of [<code>Dirz</code>](#Dirz)  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 

