const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }

  const Content = () => {
    const content = [
      { part: part1, exercises: exercises1 },
      { part: part2, exercises: exercises2 },
      { part: part3, exercises: exercises3 }
    ]

    return (
      <div>
        <p>{content[0].part} {content[0].exercises}</p>
        <p>{content[1].part} {content[1].exercises}</p>
        <p>{content[2].part} {content[2].exercises}</p>
      </div>
    )
  }

  const Total = () => {
    return (
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  )
}

export default App
