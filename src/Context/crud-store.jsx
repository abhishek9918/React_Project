import {createContext} from "react";

export const TodoContext = createContext({
  list: [],
  onSubmitForm: () => {},
  onDeleteList: () => {},
});
