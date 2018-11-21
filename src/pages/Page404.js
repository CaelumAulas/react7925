import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = (props) => {
    console.log(props)
    return (
        <div>
            Você caiu na página 404!
            <Link to="/">
                va pra home
            </Link>
        </div>
    )
}

// const Link = (props) => {
//     return (
//         <a href={props.to} onClick={(event) => {
//             event.preventDefault()
//             props.push('/')
//         }}>Volte alguns passos para a home</a>
//     )
// }

export default Page404