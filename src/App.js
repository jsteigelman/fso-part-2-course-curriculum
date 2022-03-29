
const Course = (props) => {
  const course = props.course
  let exercises = []

  const parts = course.parts.map((part) => {
    exercises.push(part.exercises)
    console.log('parts is running!')
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

const Courses = (props) => {
  return props.courses.map((course) => <Course course={course} />)
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

    return <Courses courses={courses} />

}

export default App