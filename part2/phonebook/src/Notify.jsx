const Notify = ({ msg }) => {
    if (msg != null && msg !== '') {
        return (
            <div style={{color: 'green', borderColor: 'green' }}>
                {msg}
            </div>
        )
    } else {
        return null;
    }
}

export default Notify;