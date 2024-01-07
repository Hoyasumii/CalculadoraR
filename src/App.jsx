// React Imports
import { useState } from 'react';

// Components
import Container from './components/Container';
import Button from './components/Button';
import Icon from './components/Icon';
import Display from './components/Display';

// JS Scripts

export default function App() {

	const [ expression, setExpression ] = useState('');
	
	const handleNumber = (number) => setExpression(expression + number);
	const handleClear = () => setExpression('');
	const backspace = () => setExpression(expression.slice(0, -1));

	return (
	<Container>
		<Display>{ expression }</Display>
		<Button onclick={ backspace } redText ><Icon name="backspace-fill" /></Button>
		<Button onclick={ () => console.log('Hello World!') }><Icon name="clock-history" /></Button>
		<Button onclick={ handleClear }>C</Button>
		<Button onclick={ () => console.log('Hello World!') }>/</Button>
		<Button onclick={ () => handleNumber(7) }>7</Button>
		<Button onclick={ () => handleNumber(8) }>8</Button>
		<Button onclick={ () => handleNumber(9) }>9</Button>
		<Button onclick={ () => console.log('Hello World!') }>x</Button>
		<Button onclick={ () => handleNumber(4) }>4</Button>
		<Button onclick={ () => handleNumber(5) }>5</Button>
		<Button onclick={ () => handleNumber(6) }>6</Button>
		<Button onclick={ () => console.log('Hello World!') }>-</Button>
		<Button onclick={ () => handleNumber(1) }>1</Button>
		<Button onclick={ () => handleNumber(2) }>2</Button>
		<Button onclick={ () => handleNumber(3) }>3</Button>
		<Button onclick={ () => console.log('Hello World!') }>+</Button>
		<Button onclick={ () => console.log('Hello World!') }>-/+</Button>
		<Button onclick={ () => handleNumber(0) }>0</Button>
		<Button onclick={ () => console.log('Hello World!') }>,</Button>
		<Button onclick={ () => console.log('Hello World!') } fullBlue>=</Button>
	</Container>
	)
}