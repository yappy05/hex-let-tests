import capitalise from "../src/capitalise.js";
if (capitalise("") !== "") throw new Error("пустая строка");
if (capitalise("hello" !== "Hello"))
  throw new Error("код работает не правильно");
