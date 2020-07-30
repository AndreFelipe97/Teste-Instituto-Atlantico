import capitalize from '../../../util/capitalize';

export default function breadcrumb(state=['Teste', 'Listagem'], action) {
  switch (action.type) {
    case 'ADD_TO_BREADCRUMB':
      let b = []
      b.push(capitalize(action.breadcrumb[0]))
      b.push(capitalize(action.breadcrumb[1]))
      return b
    default:
      return state
  }
}