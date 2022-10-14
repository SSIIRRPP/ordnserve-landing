import { SET_FONT_SIZE_TRANSFORM, SET_TOUCH } from "../types";

export const toggleTouch = () => ({ type: SET_TOUCH });

export const setFontSizeTransform = (value) => ({
  type: SET_FONT_SIZE_TRANSFORM,
  payload: { value },
});
