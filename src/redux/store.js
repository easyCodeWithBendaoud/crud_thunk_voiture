import { legacy_createStore as createStore } from "redux";
import { applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import {thunk} from 'redux-thunk'
import { voitureReducer } from "./voitureReducer";
export const store=createStore(voitureReducer,composeWithDevTools(applyMiddleware(thunk)))