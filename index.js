const paths = {}

exports.get = key => paths[ key ] || null

exports.set = ( key, value ) =>
{
    paths[ key ] = value
}

exports.remove = key =>
{
    paths[ key ] = null
    delete paths[ key ]
}
