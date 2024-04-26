import { useState } from 'react'
import Button from './components/Button'
import Menu from './components/Menu'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(count)

  return (
    <>
      <Header>
        <h1>Проект веб-разработки</h1>
      </Header>

      <div className='Posnew'>
        <Menu>
            <ul>
              <li>Лабораторная работа 1</li>
              <li>Лабораторная работа 2</li>
            </ul>
        </Menu>

        <Content>
          <h1>count = {count}</h1>
          <Button onclick={() => setCount((count) => count + 1)} label={'инкримент '}/> 
          <Button onclick={() => setCount((count) => count - 1)} label={'дикремент '}/>
        </Content>
      </div>
      <Footer>
        <h6>Все права защищены!</h6>
      </Footer>
    </>
  )
}

export default App
