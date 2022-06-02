const input = document.getElementById('input')
const addedOL = document.getElementById('added')

const added = JSON.parse(localStorage.getItem('added'))

if (added) {
    added.forEach(todo => todoAdd(todo))
}

function todoAdd(todo) {
    let textTodo = input.value

    if (todo) {
        textTodo = todo.text
    }

    if (textTodo) {
        const ele = document.createElement('li')
        if (todo && todo.checked) {
            ele.classList.add('checked')
        }

        ele.innerText = textTodo
        ele.addEventListener('click', () => {
            ele.classList.toggle('checked')
            updateTodo()
        })

        ele.addEventListener('contextmenu', (e) => {
            e.preventDefault()

            ele.remove()
            updateTodo()
        })

        addedOL.appendChild(ele)

        input.value = ''

        updateTodo()
    }
}

function updateTodo() {
    addedEl = document.querySelectorAll('li')

    const added = []

    addedEl.forEach(ele => {
        added.push({
            text: ele.innerText,
            checked: ele.classList.contains('checked')
        })
    })

    localStorage.setItem('added', JSON.stringify(added))
}