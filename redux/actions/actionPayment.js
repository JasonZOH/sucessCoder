import { ADDPAYMENT } from "../constants";

export const addPayment = (cartCourses, total) => {
  return {
    type: ADDPAYMENT,
    orderInfos: {
      courses: cartCourses,
      total: total
    }
  }
}