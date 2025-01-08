import { useState } from "react";
import { View, StyleSheet } from "react-native";
import FavBooksList from "./tasks/FavBooksList";
import FilterUsers from "./tasks/FilterUsers";
import ShoppingList from "./tasks/ShoppingList";
import Translator from "./tasks/Translator";
import TaskList from "./tasks/TaskList";
import Hello from "./tasks/Hello";
import AvarageGrade from "./tasks/AvarageGrade";
import ContactManager from "./tasks/ContactManager";
import SortData from "./tasks/SortData";
import Quiz from "./tasks/Quiz";

const books = [
  "1984",
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Moby-Dick",
  "War and Peace",
  "The Lord of the Rings",
  "Crime and Punishment",
];

const taskStudy=[
  {
    "task": "Зробити домашнє завдання",
    "category": "Навчання"
  },
  {
    "task": "Вивчити вірш",
    "category": "Навчання"
  },
  {
    "task": "Виконати домашнє завдання з React Native",
    "category": "Начання"
  },
]
const taskWork=[
  {
    "task": "Підготувати презентацію для наради",
    "category": "Робота"
  },
  {
    "task": "Завершити звіт про проект",
    "category": "Робота"
  },
]

const taskHouse=[
  {
    "task": "Купити продукти",
    "category": "Дім"
  },
  {
    "task": "Зробити генеральне прибирання в кімнаті",
    "category": "Дім"
  },
]

const taskOther=[
  {
    "task": "Записатися до стоматолога",
    "category": "Інше"
  },
  {
    "task": "Скласти список книг для читання",
    "category": "Інше"
  },
]

const contactData=[
  {
    "usrName": "Людмила",
    "phone" : "+380663163177"
  },
  {
    "usrName": "Тетяна",
    "phone" : "+380501234567"
  },
  {
    "usrName": "Микола",
    "phone" : "+380995679811"
  },
]

const numbers=[-34, 82, -15, 67, -93, 41, -8, 125, -52, 19, -74, 95, -27, 60];

const questions = [
  {
    id: 1, 
    question: "Ваш улюблений колір?"
  },
  {
    id: 2,
    question: "Яка ваша улюблена пора року?"
  },
  {
    id: 3,
    question: "Який ваш улюблений жанр музики?"
  },
  {
    id: 4,
    question: "Яке ваше улюблене хобі?"
  },
  {
    id: 5,
    question: "Яка ваша улюблена страва?"
  }

]
export default function App() {
  return (
    <View>
      {/* <FavBooksList books={books} /> */}
      {/* <FilterUsers/> */}
      {/* <ShoppingList/> */}
      {/* <Translator/> */}
      {/* <TaskList taskHouse={taskHouse} taskOther={taskOther} taskStudy={taskStudy} taskWork={taskWork}/> */}
      {/* <Hello/> */}
      {/* <AvarageGrade/> */}
      {/* <ContactManager contactData={contactData}/> */}
      {/* <SortData numbers={numbers}/> */}
      <Quiz questions={questions}/>
    </View>
  );
}

const styles = StyleSheet.create({});
