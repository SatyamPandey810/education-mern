import summaryApi from "../../../common"

const initiatePaymentHandller = async (transactionDetails) => {
    try {
        const response = await fetch(summaryApi.paymentHandler.url, {
            method: summaryApi.paymentHandler.method,
            body: transactionDetails
        })
        const responseData = await response.json()
        console.log(responseData);

        return responseData

    } catch (error) {
        console.log(error.message);

    }
}
export default initiatePaymentHandller