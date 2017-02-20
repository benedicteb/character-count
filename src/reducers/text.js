const defaultState = '';

export default function text(state = defaultState, action) {
  switch (action.type) {
    case 'TEXT_FIELD_CHANGED':
      return action.value;
    default:
      return state;
  }
}
