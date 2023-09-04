const Notify = ({ msg }) => {
    if (msg != null && msg !== '') {
        return (
            <div style={{color: 'green', borderColor: 'green', borderStyle: 'solid', borderWidth: 2, padding: 5 }}>
                {msg}
            </div>
        )
    } else {
        return null;
    }
}

export default Notify;