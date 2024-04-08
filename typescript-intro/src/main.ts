import { setupCounter } from './counter.ts'
import './style.css'
// import './topics/01-basic-types.ts'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
Hola Mundo!
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
