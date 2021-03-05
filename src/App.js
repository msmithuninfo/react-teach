import React, { Fragment } from 'react';
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
import FragmentTutorial from './components/FragmentTutorial';
import ReactRender from './ReactDOM/ReactRender';
import FindDOMNode from './ReactDOM/FindDOMNode';
import SingleInputField from './inputFields/SingleInputField';
import EventHandlerInTheOnChange from './inputFields/EventHandlerInTheOnChange';
import EventHandlerInTheOnChangeUsingNameAttribute from './inputFields/EventHandlerInTheOnChangeUsingNameAttribute';
import OnSubmitHandler from './inputFields/OnSubmitHandler';
import MultipleInputFields from './inputFields/MultipleInputFields';
import FormValidation from './inputFields/FormValidation';
import TextArea from './inputFields/TextArea';
import SelectOptionDropdownList from './inputFields/SelectOptionDropdownList';
import ReactLists from './inputFields/ReactLists';
import ReactListFromJSONArray from './inputFields/ReactListFromJSONArray';
import CountryList from './httpRequestServer/CountryList';
import Post from './httpRequestServer/Post';
import MyTable from './reactTable/MyTable';
import HelloWorld from './reactBootstrap/HelloWorld';
import Son from './componentTree/Son';
import Son1 from './ReactContext/Son1';
import {DadaProvider} from './ReactContext/MyContext';







function App() {
  return (
    <div className="App">
	   {/* start components */}
      {/* <FunctionalComponent />
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
	  <ForceUpdateToUpdateReactComponent /> */}
	  {/* <FragmentTutorial /> */}
	  {/* end componets */}
	  {/* Start DOM */}
	{/* <ReactRender />
	<FindDOMNode /> */}



	  {/* End DOM */}
	  {/* Start Input Fields */}
		{/* <SingleInputField />
		<EventHandlerInTheOnChange />
		<EventHandlerInTheOnChangeUsingNameAttribute />
		<OnSubmitHandler />
		<MultipleInputFields />
		<FormValidation />
		<TextArea />
		<SelectOptionDropdownList />
		<ReactLists />
		<ReactListFromJSONArray /> */}
		{/* End Input Fields */}

		{/* HTTP REQUEST SERVER */}
		{/* <CountryList /> */}
		{/* <Post /> */}

		{/* React table */}
		{/* <MyTable />  Not work version 7*/}
		{/* ReactBootstrap */}
		{/* <HelloWorld /> */}

		{/* Component Tree */}
		{/* <Son name="Puti Name is Salam" /> */}

		{/* React context */}
		{/* <DadaProvider value="Dada Send sms to Puti">
		<Son1 />
		</DadaProvider> */}
		
    </div>
  );
}

export default App;
