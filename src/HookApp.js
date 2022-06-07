import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './index.css';

import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook.js';
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook.js';
import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks.js';
import { Layout } from './components/05-useLayoutEffect/Layout.js';
import { CallbackHook } from './components/07-useCallback/CallbackHook.js';
import { Padre } from './components/08-Tarea-memorize/Padre.js';
import { TasksApp } from './components/09-useReducer/TasksApp';

export const HookApp = () => {
  return (
    <div className='row'>
      <div id='menu' className='col-3'>
        <ul>
          <li><a href='/counter-app'>CounterApp</a></li>
          <li><a href='/form-with-custom-hook'>Form</a></li>
          <li><a href='/breaking-bad-quotes'>Breaking Bad Quotes</a></li>
          <li><a href='/use-layout-effect'>useLayoutEffect</a></li>
          <li><a href='/use-callback'>useCallback</a></li>
          <li><a href='/memorize'>Memorize</a></li>
          {/* <li><a href='/task-app'>TaskApp</a></li> */}
          <li><a href='/'>TaskApp</a></li>
        </ul>
      </div>
      <div id='component' className='col-9'>
        <Router>
            <Routes>
              <Route exact path="/counter-app" element={ <CounterWithCustomHook/> } />
              <Route exact path="/form-with-custom-hook" element={ <FormWithCustomHook/> } />
              <Route exact path="/breaking-bad-quotes" element={ <MultipleCustomHooks/> } />
              <Route exact path="/use-layout-effect" element={ <Layout/> } />
              <Route exact path="/use-callback" element={ <CallbackHook/> } />
              <Route exact path="/memorize" element={ <Padre/> } />
              <Route exact path="/" element={ <TasksApp/> } />
            </Routes>
        </Router>
      </div>
    </div>
  )
}
