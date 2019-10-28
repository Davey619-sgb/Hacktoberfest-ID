const initialState = {
    isLoading: true,
    contributor: [
        {
            name: 'Daffa ABdul Farras',
            name: 'Daffa Ganteng'
        },
        {
            name: 'Dina Maretta',
            name: 'MaretDN'
        },
    ],
    error: null
}

const user = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_USER':
            return {
                ...state,
                contributor: state.contributor
            }

        default:
            return state
    }
}

export default user
