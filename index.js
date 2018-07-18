const queryString = require('query-string')

module.exports = {
  middleware: (ctx, next) => {
    let text = undefined
    if(ctx.update.message && ctx.update.message.text.startsWith('/')) {
      text = ctx.update.message.text
    }
    if(ctx.update.callback_query) {
      text = ctx.update.callback_query.data
    }
    if(!text) {
      return next(ctx)
    }
    text = text.slice(text.includes('?') && text.indexOf('?'))
    const parsed = queryString.parse(text)

    ctx.query = parsed;
    return next(ctx)
  }
}