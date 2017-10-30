import { connect } from "react-redux"
import Offer from "../../components/dashboard/Offer"
import { createClaimAndNavigateToChat } from "../../services/Insurance"
import { insuranceActions, chatActions } from "hedvig-redux"

const mapStateToProps = state => {
  return {
    insurance: state.insurance,
    currentTotalPrice: state.insurance.currentTotalPrice,
    newTotalPrice: state.insurance.newTotalPrice
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getInsurance: () => dispatch(insuranceActions.getInsurance()),
    checkout: () =>
      dispatch(
        chatActions.apiAndNavigateToChat({
          method: "POST",
          url: "/hedvig/quoteAccepted",
          body: null,
          SUCCESS: "INITIATE_CHECKOUT"
        })
      ),
    dispatch
  }
}

const OfferContainer = connect(mapStateToProps, mapDispatchToProps)(Offer)

export default OfferContainer