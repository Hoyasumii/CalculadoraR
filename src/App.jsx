// Components
import Container from './components/Container';
import Button from './components/Button';
import Icon from './components/Icon';
import Display from './components/Display';

export default function App() {

	return (
	<Container>
		<Display>0</Display>
		<Button onclick={ () => console.log('Hello World!') } redText ><Icon name="backspace-fill" /></Button>
		<Button onclick={ () => console.log('Hello World!') }>CE</Button>
		<Button onclick={ () => console.log('Hello World!') }>C</Button>
		<Button onclick={ () => console.log('Hello World!') }>/</Button>
		<Button onclick={ () => console.log('Hello World!') }>7</Button>
		<Button onclick={ () => console.log('Hello World!') }>8</Button>
		<Button onclick={ () => console.log('Hello World!') }>9</Button>
		<Button onclick={ () => console.log('Hello World!') }>x</Button>
		<Button onclick={ () => console.log('Hello World!') }>4</Button>
		<Button onclick={ () => console.log('Hello World!') }>5</Button>
		<Button onclick={ () => console.log('Hello World!') }>6</Button>
		<Button onclick={ () => console.log('Hello World!') }>-</Button>
		<Button onclick={ () => console.log('Hello World!') }>1</Button>
		<Button onclick={ () => console.log('Hello World!') }>2</Button>
		<Button onclick={ () => console.log('Hello World!') }>3</Button>
		<Button onclick={ () => console.log('Hello World!') }>+</Button>
		<Button onclick={ () => console.log('Hello World!') }>-/+</Button>
		<Button onclick={ () => console.log('Hello World!') }>0</Button>
		<Button onclick={ () => console.log('Hello World!') }>,</Button>
		<Button onclick={ () => console.log('Hello World!') } fullBlue>=</Button>
	</Container>
	)
}