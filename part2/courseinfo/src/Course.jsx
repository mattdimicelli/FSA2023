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
            <p>total of {parts.reduce((p, c) => {
                console.log('p', p);
                console.log('c', c);
                return c.exercises + p.exercises
            }, 0)}</p>
        </figure>
    )
}

export default Course;