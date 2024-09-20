import { ADDPAYMENT, ADDTOCART, REMOVECOURSECART } from "../constants";

const initialState = {
  cartCourses: [],
  total: 0
}

const reducerCart = (state = initialState, action) => {
  switch (action.type){
    case ADDTOCART:
      const course = action.course;
      const newCourse = {
        id: course.id,
        price: course.price,
        title: course.title
      }
      return { ...state, cartCourses: state.cartCourses.concat(newCourse), total: state.total + course.price}

    case REMOVECOURSECART:
      const indexResult = state.cartCourses.findIndex(course => course.id === action.productId);

      const newCartCoursesArray = state.cartCourses.filter(course => course.id !== action.productId);
      const courseDelete = state.cartCourses.find(course => course.id === action.productId);

      return { ...state, cartCourses: newCartCoursesArray, total: state.total - courseDelete.price}

    case ADDPAYMENT:
      return initialState;
      
    default:
      return state;
  }
}

export default reducerCart;