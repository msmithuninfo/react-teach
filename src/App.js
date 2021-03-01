import React from 'react';
import './App.css';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent'
import PropsFuncComp from './components/PropsFuncComp'
import PropsClassComp from './components/PropsClassComp'
import ButtonClickEventFunc from './components/ButtonClickEventFunc';
import ButtonClickEventClass from './components/ButtonClickEventClass';
import FuncPassingArgumentsToEventHandlers from './components/FuncPassingArgumentsToEventHandlers';
import ClassPassingArgumentsToEventHandlers from './components/ClassPassingArgumentsToEventHandlers';
import BootsrapTeach from './components/BootstrapTeach';
import ArrowFunction from './components/ArrowFunction';
import StateTeach from './components/StateTeach';
import StateTeach1 from './components/StateTeach1';
import StateTeachArray from './components/StateTeachArray';
import SetStateChangeStateValue from './components/SetStateChangeStateValue';
import Condition1 from './components/Condition1';
import ConditionalReturnVariableElements from './components/ConditionalReturnVariableElements';
import ForceUpdateToUpdateReactComponent from './components/ForceUpdateToUpdateReactComponent';
import ReactRender from './ReactDOM/ReactRender';




function App() {
  return (
    <div className="App">
	   {/* start components */}
      <FunctionalComponent />
	  <ClassComponent />
	  
	  <PropsFuncComp name="Mithun" />
	  <PropsFuncComp name="Sarker" />

	  <PropsClassComp name="Mou" age="25" />
	  <PropsClassComp name="Sarker" />

	  <ButtonClickEventFunc />

	  <ButtonClickEventClass />

	  <FuncPassingArgumentsToEventHandlers />
	  <ClassPassingArgumentsToEventHandlers />

	  <BootsrapTeach />

	  <ArrowFunction />

	  <StateTeach />
	  <StateTeach1 />
	  <StateTeachArray />
	  <SetStateChangeStateValue />

	  <Condition1 />
	  <ConditionalReturnVariableElements />
	  <ForceUpdateToUpdateReactComponent />
	  {/* end componets */}
	  {/* Start DOM */}
	<ReactRender />



	  {/* End DOM */}
    </div>
  );
}

export default App;
