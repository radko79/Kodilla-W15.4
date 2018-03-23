// bubel

// zadanie 1
// Połączenie dwóch stringów przy użyciu operatora + jest bardzo łatwym zadaniem. Innym sposobem jest użycie metody concat albo join, ale co jeśli nie moglibyśmy skorzystać z żadnej z tych opcji? Twoim zadaniem będzie stworzenie dwóch zmiennych z wartościami Hello oraz World, a następnie połączenie ich metodą inną niż wymienione powyżej.

	// ES5
	// (1)

function join2strings() {
	var strings = ['str1', 'str2'];
	var joined = strings.join();
	console.log(concatenated);
}
// join2strings();

	// (2)
function concat2strings() {
	var string1 = 'str1',
		string2 = 'str2',
		concatenated = string1.concat(string2);
	console.log(concatenated);
}
// concat2strings();

	// (3) ES6
const one = ['Hello'],
	two = [...one, 'World'];
//console.log(two);

	// (4)
const hello = 'Hello';
//console.log(`${hello} World`)

	// (5)
const hello1 = 'Hello';
const world1 = 'World';
//console.log(`${hello1} ${world1}`)

	// (6)
const sayHello = (str1 = 'Hello', str2 = 'World') => console.log(`${str1},${str2}`);
//sayHello('man','woman');

	// zadanie 2
// Stwórz funkcję multiply, która ma zwracać wynik działania operacji mnożenia dwóch wartości a i b. Przykładowo:
// multiply(2, 5) // 10
// multiply(6, 6) // 36
// Zadanie wydaje się być proste, ale co jeśli użytkownik poda na wejściu tylko jedną wartość? Przykładowo:
// multiply(5) // ?
// Chcemy, aby wynik takiego wywołania był również prawidłowy - możesz założyć, że jeśli użytkownik nie poda któregoś z parametrów, ma on zostać zastąpiony 1. Nie wolno korzystać z instrukcji warunkowych! Funkcję stwórz za pomocą arrow function.

	// (1)
function multiply1() {
	a = (prompt('a')) || 1;
	b = (prompt('b')) || 1;
	console.log(a*b);
}
//multiply1();

	// (2)
	// zadanie nie działa jak powinno

//const aa = (prompt('a')) || 1;
//const bb = (prompt('b')) || 1;
//const result = (aa,bb) => {return aa * bb};
//const cc = result(aa,bb);
//console.log(cc);

// zadanie 3
// Napisz funkcję average, która obliczy średnią arytmetyczną wszystkich argumentów, które zostaną do niej przekazane. Załóż, że argumenty zawsze będą liczbami:
// average(1) // 1
// average(1, 3) // 2
// average(1, 3, 6, 6) // 4
// Skorzystaj z rest parameters! Funkcję stwórz za pomocą arrow function.

	// (1)
const myAverage = (...boxes) => {
	let total = 0;
	boxes.forEach(box => {total += box;});
	console.log(total);
	console.log(boxes.length);
	console.log(total/boxes.length);
}

// myAverage(1) // 1
//myAverage(1, 3) // 2
// myAverage(1, 3, 6, 10) // 5

// zadanie 4
// Stwórz tablicę z ocenami const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1], a następnie w umiejętny sposób przekaż oceny do funkcji average tak, aby otrzymać wynik. Skorzystaj z operatora spread!

	// (1)
	// to zadanie nie działa
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
//myAverage(...grades);

// zadanie 5
// Podczas pracy nad projektem natknąłeś się na bardzo dziwną strukturę danych - [1, 4,'Iwona', false, 'Nowak']. Twoim zadaniem jest skorzystanie z destrukturyzacji w celu wyciągnięcia z tablicy zmiennych firstname oraz lastname.

	// (1)
const arrayDestructuring = [1, 4,'Iwona', false, 'Nowak'];
const [, , firstN, , lastN] = arrayDestructuring;

//console.log(`${firstN} ${lastN}`);
