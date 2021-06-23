import { atom, useRecoilState, useRecoilValue } from "recoil"

// Name convention for atoms "somethingAtom"
const darkModeAtom = atom({
  key: 'darkMode', // Keep caution with keys name, this is like a unique id for each atom
  default: false
})

const CheckBox = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeAtom)
  
  console.log(darkMode)
  
  return (
    <input type="checkbox"  checked={darkMode} onChange={(event) => {
      setDarkMode(event.currentTarget.checked)
    }} />
  )
}

const Button = () => {
  const darkMode = useRecoilValue(darkModeAtom) // This gets only the value from atom, to avoid "sets"

  return <button style={{backgroundColor: darkMode ? 'red' : 'white'}}>My UI Button</button>
}

export const Atoms = () => {
  return(
    <div>
      <div>Atoms!</div>
      <div>
        <CheckBox />
      </div>
      <div>
        <Button />
      </div>
    </div>
  )
}
