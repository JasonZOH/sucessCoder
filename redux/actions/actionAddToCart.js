import { ADDTOCART } from "../constants";

export const addToCart = (course) => {
  return {
    type: ADDTOCART,
    course: course
  }
}