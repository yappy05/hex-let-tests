import { strict as assert, strict } from "node:assert";
import capitalise from "../src/capitalise.js";

strict.equal(capitalise(""), "");
strict.equal(capitalise("hello"), "Hello");
