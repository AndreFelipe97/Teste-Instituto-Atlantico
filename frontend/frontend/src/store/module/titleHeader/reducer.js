import capitalize from '../../../util/capitalize';

export default function titleHeader(state='Listagem', action) {
  switch (action.type) {
    case 'ADD_TO_TITLE':
      console.log(action)
      return [state = capitalize(action.path)];
    default:
      return state;
  }
  
}