const BackendErrorMessages = ({backendErrors}) => {
    const errorMessages = Object.keys(backendErrors).map(name => {
        const messages = backendErrors[name].join(' ')
        return `${name} ${messages}`
    })
    return (
        <ul className='error-messages'>
            {errorMessages.map(msg =>(
                <li key={msg}>
                    {msg}
                </li>
            ))}
        </ul>
    )
}

export default BackendErrorMessages