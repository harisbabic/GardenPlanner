import { UPDATE_THEME } from '../actions/themeActions';
import defaultTheme from '../../theme/themeConfig';

const initialState = defaultTheme;

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return {
        ...state,
        colors: {
          ...state.colors,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default themeReducer;
