const Error = ({ msg }) => {
    if (msg != null && msg !== '') {
        return (
            <div style={{color: 'red', borderColor: 'red', borderStyle: 'solid', borderWidth: 2, padding: 5 }}>
                {msg}
            </div>
        )
    } else {
        return null;
    }
}

export default Error;