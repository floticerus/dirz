const dirz = require( './index' )


test( 'get with default value', () =>
  {
    expect( dirz.get( 'default value', 'value' ) ).toBe( 'value' )
  }
)


test( 'set and get default type', () =>
  {
    dirz.set( 'default type', 'value' )

    expect( dirz.get( 'default type' ) ).toBe( 'value' )
  }
)


test( 'set and get string', () =>
  {
    dirz.set( 'string value', 2, 'string' )

    expect( dirz.get( 'string value' ) ).toBe( '2' )
  }
)


test( 'set and get invalid string', () =>
  {
    dirz.set( 'invalid string value', null, 'string' )

    expect( dirz.get( 'invalid string value' ) ).toBe( null )
  }
)


test( 'set and get int', () =>
  {
    dirz.set( 'int value', 2.1, 'int' )

    expect( dirz.get( 'int value' ) ).toBe( 2 )
  }
)


test( 'set and get float', () =>
  {
    dirz.set( 'float value', '2.1', 'float' )

    expect( dirz.get( 'float value' ) ).toBe( 2.1 )
  }
)


test( 'set and get bool', () =>
  {
    dirz.set( 'bool value', 'false', 'bool' )

    expect( dirz.get( 'bool value' ) ).toBe( false )
  }
)


test( 'remove key', () =>
  {
    dirz.set( 'remove key', 'value' )

    dirz.remove( 'remove key' )

    expect( dirz.get( 'remove key' ) ).toBe( null )
  }
)
