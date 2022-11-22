import * as C from './App.styles'
import { Character } from './components/Character';
import { useCharacter } from './hooks/useCharacter';
import { useEffect } from 'react';

const App= () =>{
  const char = useCharacter('Betim');

  useEffect(()=>{
    window.addEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) =>{
    switch(e.code) {
      case 'KeyA':
      case 'ArrowLeft':
        char.moveLeft();
      break;

      case 'KeyD':
      case 'ArrowRight':
        char.moveRight();
      break;

      case 'KeyW':
      case 'ArrowUp':
        char.moveUp();
      break;

      case 'KeyS':
      case 'ArrowDown':
        char.moveDown();
      break;
    }
  }

  return(
    <C.Container>
      <C.Map>
        <Character x={char.x} y={char.y} side={char.side}/>
      </C.Map>
    </C.Container>
  )
}

export default App;