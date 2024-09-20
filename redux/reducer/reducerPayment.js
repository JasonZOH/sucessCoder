import moment from "moment";
import { ADDPAYMENT } from "../constants";

const initialState = {
  payments : []
}

const reducerPayment = (state = initialState, action) => {
  switch (action.type){
    case ADDPAYMENT:
      const orderInfo = action.orderInfos;
      const newPayment = {
        id: Date.now().toString(),
        courses: orderInfo.courses,
        total: orderInfo.total,
        date: moment(new Date()).format('DD MM YYYY hh:mm')
      }
      return { ...state, payments: state.payments.concat(newPayment)}

    default:
      return state;
  }
}

export default reducerPayment;