
const Course = (props) => {
  const course = props.course
  let exercises = []

  const parts = course.parts.map((part) => {
    exercises.push(part.exercises)
    return <li key={part.id}>{part.name} {part.exercises}</li>
  })

  const sumExercises = exercises.reduce((previousValue, currentValue) => {
    return previousValue + currentValue
  })

  return (
    <div>
    <h1>{course.name}</h1>
    <p>{parts}</p>
    <p>There are {sumExercises} exercises in total</p>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App