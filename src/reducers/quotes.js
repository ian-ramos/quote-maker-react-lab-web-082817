export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      const arr = [...state]
      for (const el of arr) {
        if (el.id === action.quoteId) {
          ++el.votes
        }
      }
      return arr
    case 'DOWNVOTE_QUOTE':
      const another = [...state]
      for (const el of another) {
        if (el.id === action.quoteId && el.votes > 0) {
          --el.votes
        }
      }
      return another
    default:
      return state;
  }
}
