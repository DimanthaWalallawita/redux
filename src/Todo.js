import React from 'react'

export default function Todo({ todo }) {
    return (
        <div>
            <span style={{ color: todo.complete ? '#AAAF' : '#000' }}>
                {todo.name}
            </span>

            <button>Toggle</button>
            <button>Delete</button>
        </div>
    )
}
