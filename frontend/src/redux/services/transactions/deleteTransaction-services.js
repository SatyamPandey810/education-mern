import summaryApi from "../../../common"

const deleteTransactionService = async (id) => {
    const response = await fetch(summaryApi.deleteTransactions.url, {
        method: summaryApi.deleteTransactions.method,
        credentials: "include",
        headers: {
            "content-type": 'application/json'
        },
        body: JSON.stringify({
            _id: id,
        })
    })
    const responseData = await response.json()
    if (responseData.success) {
        return responseData
    }
}

export default deleteTransactionService