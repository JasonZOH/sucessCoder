import COURSES from "../../data/testData";
import { ADDTOCART } from "../constants";

const initialState = {
  existingCourses: COURSES
}

const reducerCourses = (state = initialState, action) => {
  switch (action.type){
    case ADDTOCART:
      const indexCourseModify = state.existingCourses.findIndex(course => course.id === action.course.id);

      // Créer une copie de l'objet course à modifier et le mettre à jour
      const courseToModify = {
        ...state.existingCourses[indexCourseModify],
        selected: true // Mettre à jour la propriété selected
      };

      // Créer une copie du tableau des cours avec l'objet modifié
      const copyExistingCourses = [
        ...state.existingCourses.slice(0, indexCourseModify),
        courseToModify,
        ...state.existingCourses.slice(indexCourseModify + 1)
      ];

      return {
        ...state,
        existingCourses: copyExistingCourses
      }

    default:
      return state;
  }
}

export default reducerCourses;