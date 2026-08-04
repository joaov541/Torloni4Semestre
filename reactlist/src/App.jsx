import editIcon from "./assets/Vector (1).svg"
import trashIcon from "./assets/Vector.svg"
import './App.css'
import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  // states e variáveis
  //funções e effects

  ///////////////////////////////////////////////
  //criar um state chamado
  //tasklist como iniciando com um array de 
  //objetos [{xpto: abc, iii: uuu}]
  //ja preenchido com 4 tarefas

  //em seguida fazer um map e gerar os cards
  //com todas as tarefas
  //////////////////////////////////////////////


  //representa a lista de tarefas em array de objetos
  const [tasklist, setTaskList] = useState([])

  //representa os dados digitados no input
  const [taskValue, setTaskValue] = useState("")

  //state delete
  const [taskDel, setTaskDel] = useState("")

  //modo de edição true / false
  const [editMode, setEditMode] = useState(false)//modo de edição

  //id do cadastro a ser editado
  const [idToEdit, setIdToEdit] = useState(0)


  //CRUD 

  ///////////////////////////////Read (Get)/////////////////////////////////////
  const getTasks = async () => {
    //chamar a api
    try {
      const APIreturn = await axios.get("http://localhost:3000/taskpoin")
      const bodyAPI = await APIreturn.data

      //e armazenar os dados no state
      setTaskList(bodyAPI)
    } catch (error) {
      alert("Erro ao chamar a API")
    }
  }
  /////////////////////////////////////////////////////////////////////////////


  /////////////////////////////////Create (Post)///////////////////////////////
  const createTask = async (e) => {
    e.preventDefault()//Parar/capturar o evento de submit do formulário

    if (taskValue.trim().length == 0) {
      alert("Preencha o texto da tarefa")
    }

    //validar o formulário
    try {
      const ReturnAPI = await axios.post("http://localhost:3000/taskpoin", { descricao: taskValue })
      const bodyAPI = await ReturnAPI.data
      alert("Tarefa cadastrada")
      setTaskValue("")
      getTasks()
    } catch (error) {
      alert("Erro ao chamar a API")
    }

    //cadastrar os dados (try/catch)
    //recarregar os dados na tela (getTasks)
  }
  /////////////////////////////////////////////////////////////////////////////


  //////////////////////////EDIT//////////////////////////////

  //Uptade (Put/Patch)
  //Vizualizar edição (ver os dados no formulário)
  const putTask = (taskItem) => {
    //pegar os dados para o formulário (setTaskValue)
    setTaskValue(taskItem.descricao)
    //sinalizar o formulário que é pra editar e ao invés de cadastrar(set)
    setEditMode(true)
    //preencher o id para edição (true)
    setIdToEdit(taskItem.id)
  }

  //Confirmar o cadastro na API
  const confirmPutTask = async (e) => {
    e.preventDefault()
    if (taskValue.trim().length == 0) {
      alert("Preencha a tarefa corretamente")
      return false
    }

    try {
      axios.put(`http://localhost:3000/taskpoin/${idToEdit}`, { descricao: taskValue })
      alert("A tarefa foi editada")
      //atualiza o cadastro na tela
      getTasks()
      //reseta os dados da edição e formulário
      setEditMode(false)
      setIdToEdit(0)
      setTaskValue("")

    } catch (error) {
      alert("Erro ao editar a tarefa")
    }

  }
  //////////////////////////////////////////////////////////////////


  ///////////////////////Delete (Delete)///////////////////////////////////
  const deleteTask = async (taskItem) => {

    const querApagar = confirm(`Quer realmente apagar a tarefa: ${taskItem.descricao}`)

    if (!querApagar) {
      return false
    }

    try {
      const DeletAPI = await axios.delete(`http://localhost:3000/taskpoin/${taskItem.id}`);
      const bodyAPI = await DeletAPI.data
      alert("Tarefa deletada")
      setTaskDel("")
      getTasks()
    } catch (error) {
      alert("Erro ao chamar a API")
    }

  }
  //////////////////////////////////////////////////////////////////////////////

  //roda na montagem do componente - ciclo de vida dos componentes react
  useEffect(() => {
    getTasks()
  }, [])

  return (
    <>

      <header className='header-section'>
        <h1 className='header-section__title'>React List</h1>
      </header>

      <main className='body-section'>


        <form className='cad-task' onSubmit={editMode ? confirmPutTask : createTask}>
          <input className='cad-task__entry'
            type="text" placeholder='Adicione uma tarefa'
            value={taskValue}
            onChange={(e) => setTaskValue(e.target.value)} />
          <p>State: {taskValue}</p>
          <p>Id pra editar: {idToEdit}</p>
          <button className='cad-task__btn-confirm'>Adicionar</button>

          {editMode && (
            <button
              type="button"
              className='cad-task__btn-calcel'
              onClick={() => {
                setEditMode(false)
                setIdToEdit(0)
                setTaskValue("")
              }}
            >
              Cancelar
            </button>
          )
          }
        </form>


        <section className='cardlist'>

          {
            tasklist.map(task => {
              return (
                <article className="cardtask" key={task.id}>
                  <p className="cardtask__task-text">{task.descricao}</p>

                  <div className="cardtask__icon-box">
                    <div className="cardlist__icon">
                      <img src={editIcon} alt="" onClick={() => {
                        putTask(task)
                      }} />
                    </div>
                    <div className="cardlist__icon">
                      <img src={trashIcon} alt="" onClick={() => {
                        deleteTask(task)
                      }} />
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
