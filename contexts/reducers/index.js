import { SET_FONT_SIZE_TRANSFORM, SET_TOUCH } from "../types";

export const generalState = {
  touch: false,
  fontSizeTransform: null,
};

export default function generalReducer(S /* state */, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_TOUCH: {
      return {
        ...S,
        touch: true,
      };
    }
    case SET_FONT_SIZE_TRANSFORM: {
      return {
        ...S,
        fontSizeTransform: payload.value,
      };
    }
    default: {
      return S;
    }
  }
}
