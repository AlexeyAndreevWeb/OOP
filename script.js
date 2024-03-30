// Задание 1: ""Управление библиотекой книг""

// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {
  constructor(options) {
    this.title = options.title;
    this.author = options.author;
    this.pages = options.pages;
  }

  displayInfo() {
    console.log(`    название: ${this.title}
    автор: ${this.author}
    кол-во страниц: ${this.pages}`);
  }
}

const book1 = new Book({
  title: "Вся королевская рать",
  author: "Роберт Пэнн Уоррен",
  pages: 540,
});

// Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).

class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  displayInfo() {
    console.log(`    Name: ${this.name}
    Age: ${this.age} лет
    Grade: ${this.grade}`);
  }
}

const students = []

const addButton = document.querySelector('.button')
addButton.addEventListener('click', (e) => {
  e.preventDefault()
  createStudentList();
})

const createStudentList = () => {
  let $element = document.querySelector('.students-list')
  let student = []
  const inputs = document.querySelectorAll('.form > input')
  inputs.forEach(item => {
    student.push(item.value)
    item.value = ''
  })
  students.push(new Student(...student))
  $element.textContent = ''
  render($element)
};

const render = (el) => {
  students.forEach((item,i) => {
    el.innerHTML += `
      <li class="student">
        <h3>Student: №${i+1}</h3>
        <p class="student__name">Name: ${item.name}</p>
        <p class="student__age">Age: ${item.age}</p>
        <p class="student__grade">Grade: ${item.grade}</p>
      </li>
    `
  })
}


