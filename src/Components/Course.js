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
      <h2>{course.name}</h2>
      <p>{parts}</p>
      <p>There are {sumExercises} exercises in total</p>
      </div>
    )
  }

export default Course