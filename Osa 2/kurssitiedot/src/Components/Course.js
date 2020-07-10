import React from "react";

const Header = (course) => (
    <div>
        <h1>{course.name}</h1>
    </div>
);

const Content = ({ parts }) => {

    const total = parts.reduce((previousValue, currentValue) => previousValue + currentValue.exercises, 0);

    const listItems = parts.map((part) =>
        <div key={part.id}>
            {part.name} {part.exercises}
        </div>
    );
    return (
        <div>
            {listItems}
            <p><strong>total of {total} exercises</strong></p>
        </div>

    )

}

const Course = ({ course }) => {
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />

        </div>
    )
}
export default Course;