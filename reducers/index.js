export default (state = 10, action) => {

    switch (action.type) {
        case 'ADD':
            return state + 1

        case 'SUBTRACT':
            return state - 1

        case 'RESET':
            return state = 0

        default:
            return state
    }

}