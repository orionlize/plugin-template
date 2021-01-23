import ReactDOM from "react-dom"

export {}

function Index() {
  return <div style={{position: 'fixed', bottom: '50px', right: '50px', zIndex: 1000}}>
    Insert Demo
  </div>
}

const app = document.createElement('div')
app.id = 'insert'
document.body.appendChild(app)
ReactDOM.render(<Index />, app)