import tokenAction from '../../actions/token'

exports.getToken2 = (ctx)=>{
    const id = ctx.params.id
    const secret = ctx.params.secret
    const key = ctx.params.key
    const response = tokenAction.ObtenerToken(id, secret, key)
    ctx.body = {
        token : response
    }
    return ctx
}

exports.getUsers = (ctx) => {
    const token = ctx.params.token
    const response = tokenAction.BuscarUsuario(token)
    console.log(response)
    ctx.body = response
    return ctx
}