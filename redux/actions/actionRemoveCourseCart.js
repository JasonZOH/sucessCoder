import { REMOVECOURSECART } from "../constants"


export const removeCourseCart = (courseId) => {
  return {
    type: REMOVECOURSECART,
    productId: courseId
  }
}