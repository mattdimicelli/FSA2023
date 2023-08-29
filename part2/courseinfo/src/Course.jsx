const Course = ({courses}) => {
    return courses.map(course => {
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
                <p>total of {parts.reduce((p, c) => c.exercises + p, 0)} exercises</p>
            </figure>
        )
    });
}

export default Course;