const Course = ({course}) => {
    const {name, parts} = course;
    return (
        <figure>
            <figcaption>{name}</figcaption>
            <table>
                <tbody>
                {parts.map(({exercises, name, id}) => (
                    <tr key={id}>
                        <td>{name}</td><td>{exercises}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </figure>
    )
}

export default Course;