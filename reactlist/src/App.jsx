import editIcon from "./assets/Vector (1).svg"
import trashIcon from "./assets/Vector.svg"
import './App.css'
import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  // states e variáveis
  //funções e effects

  //criar um state chamado
  //tasklist como iniciando com um array de 
  //objetos [{xpto: abc, iii: uuu}]
  //ja preenchido com 4 tarefas

  //em seguida fazer um map e gerar os cards
  //com todas as tarefas

  const [tasklist, setTaskList] = useState([])

  //CRUD 

  //Read (Get)
  const getTask = async () => {
    //chamar a api
    try {
      const APIreturn = await axios.get("http://localhost:3000/taskpoin")
      const bodyAPI = await APIreturn.data 

      //e armazenar os dados no state
      setTaskList(bodyAPI)
    } catch (error) {
      
    }
  }

  //Create (Post)
  const createTask = () => {}

  //Uptade (Put/Patch)
  const putTask = () => {}

  //Delete (Delete)
  const deleteTask = () => {}

  //roda na montagem do componente - ciclo de vida dos componentes react
  useEffect(() => {
    getTask()
  }, [])

  return (
    <>

      <header className='header-section'>
        <h1 className='header-section__title'>React List</h1>
      </header>

      <main className='body-section'>

        <form className='cad-task'>
          <input className='cad-task__entry' type="text" placeholder='Adicione uma tarefa' />
          <button className='cad-task__btn-confirm'>Adicionar</button>
        </form>

        <section className='cardlist'>

          {
            tasklist.map(task => {
              return (
          <article className="cardtask" key={task.id}>
            <p className="cardtask__task-text">{task.descricao}</p>

            <div className="cardtask__icon-box">
              <div className="cardlist__icon">
                <img src={editIcon} alt="" />
              </div>
              <div className="cardlist__icon">
                <img src={trashIcon} alt="" />
              </div>
            </div>

          </article>
              )
            })
          }


        </section>

      </main>

      <footer className='footer-section'>
        <p className='footer-section__right-text'>2026 React List - Todos os direitos reservados</p>
      </footer>

    </>
  )
}

export default App
