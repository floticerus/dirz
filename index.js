const { boolean: toBoolean } = require( 'boolean' )

const store = {}

/**
 * @typedef {Dirz}
 */
class Dirz
{
  /**
   * gets value for the key.
   * 
   * @param {string} key 
   * @param {number|string|boolean} [defaultValue] - optional. returns this value if the key has not been set.
   * 
   * @returns {*}
   */
  static get( key, defaultValue = null )
  {
    return store.hasOwnProperty( key )
      ? store[ key ]
      : defaultValue
  }


  /**
   * sets the value with the desired type, if specified.
   * `bool` type is converted to bool so that passing `"false"` will equal `false`
   * 
   * @param {string} key 
   * @param {number|string|boolean} value 
   * @param {string} [type] - allowed types are `string` `int`/`integer` `float` `bool`/`boolean`
   */
  static set( key, value, type )
  {
    switch ( type )
    {
      case 'int':
      case 'integer':
        store[ key ] = parseInt( value )
        break
      case 'float':
        store[ key ] = parseFloat( value )
        break
      case 'string':
        store[ key ] = value && value.toString ? value.toString() : value
        break
      case 'bool':
      case 'boolean':
        store[ key ] = toBoolean( value )
        break
      default:
        store[ key ] = value
        break
    }
  }


  /**
   * removes the key from the store
   * 
   * @param {string} key 
   */
  static remove( key )
  {
    store[ key ] = null
    delete store[ key ]
  }
}


module.exports = Dirz
