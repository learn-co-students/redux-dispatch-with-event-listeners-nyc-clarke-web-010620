let state;

function reducer(state = { count: 0 }, action) {
    switch (action.type) {
        case 'INCREASE_COUNT':
            return { count: state.count + 1 }
        case 'DECREASE_COUNT':
            return { count: state.count - 1 }
        default:
            return state;
    }
}

function dispatch(action) {
    state = reducer(state, action)
    render()
}

function render() {
    let div = document.getElementById('container')
    div.innerText = state.count
}

let button = document.getElementById('button');
button.addEventListener('click', () => {
    dispatch({ type: 'INCREASE_COUNT' })
})

let button1 = document.getElementById('button-dec');
button1.addEventListener('click', () => {
    dispatch({ type: 'DECREASE_COUNT' })
})


// Functions to Execute //

dispatch({ type: '@@INIT' })