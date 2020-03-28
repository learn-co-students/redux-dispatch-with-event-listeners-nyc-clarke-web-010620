let state = {count: 0}

function reducer(state={count: 0}, action) {
    switch (action.type) {
        case 'INCREASE_COUNT':
            return {count: state.count + 1};

        default:
            return state;
    }
}


function render(){
    let container = document.getElementById('container')
    container.textContent = state.count
}

function dispatch(action){
    state = reducer(state, action)
    render()
}

render()
let button = document.getElementById('button')

document.addEventListener('click', ()=> {
    dispatch({type: 'INCREASE_COUNT'})
})