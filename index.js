const { boolean: toBoolean } = require( 'boolean' )

const { v1: uuid } = require( 'uuid' )


const stores = {}

/**
 * @typedef {Dirz}
 */
class Dirz
{
  constructor( options = {} )
  {
    this.options = Object.assign(
      {

      },

      options
    )

    /** @type {string} */
    this.id = this.options.id || uuid()

    this.store = {}

    stores[ this.id ] = this
  }

  static getStore( id )
  {
    return stores[ id ]
  }

  /**
   * gets value for the key.
   * 
   * @param {string} key 
   * @param {number|string|boolean} [defaultValue] - optional. returns this value if the key has not been set.
   * 
   * @returns {*}
   */
  get( key, defaultValue = null )
  {
    return this.store.hasOwnProperty( key )
      ? this.store[ key ]
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
  set( key, value, type )
  {
    switch ( type )
    {
      case 'int':
      case 'integer':
        this.store[ key ] = parseInt( value )
        break
      case 'float':
        this.store[ key ] = parseFloat( value )
        break
      case 'string':
        this.store[ key ] = value && value.toString ? value.toString() : value
        break
      case 'bool':
      case 'boolean':
        this.store[ key ] = toBoolean( value )
        break
      default:
        this.store[ key ] = value
        break
    }
  }


  /**
   * removes the key from the store
   * 
   * @param {string} key 
   */
  remove( key )
  {
    this.store[ key ] = null
    delete this.store[ key ]
  }
}


module.exports = new Dirz()
