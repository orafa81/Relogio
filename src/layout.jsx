import './App.css'


function Layout(props) {

  
    return (
      <div className='bg-blue p-3 flex-container'>
            <h2 className='white'>{props.horas} : {props.minutos} : {props.segundos}</h2>
      </div>
    )
  }
  
  export default Layout
  