const tasks = [
    {
        text: "Task1"
    },
    {
        text: "Task2"
    },
    {
        text: "Task3"
    }
]

const Tasks = () => {
    return (
        <>
          {
              tasks.map((task) => (
                  <h3>{task.text}</h3>
              ))
          }  
        </>
    )
}

export default Tasks
