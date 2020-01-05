import React, {createContext, useReducer, useContext,useState} from "react";
import ReactDOM from "react-dom";
import App from "./App";



interface IState {
    states:{
    name:string;
    id: number;
    color:string;
    show:boolean;
    }[]
}

type ActionType=|{type:'onDrop',ev: React.DragEvent<HTMLDivElement>}|{type:'changeLigth',id:number}|{type:'deleteLight',id:number};


 const userInitialState:IState={states:[]};





const reducer = (state:IState=userInitialState, action:ActionType) => {

    switch (action.type) {
        case 'onDrop':
            let stateitem:IState=userInitialState;

               let name: string=action.ev.dataTransfer.getData("name");

            let color:string=action.ev.dataTransfer.getData("color");
            let show:boolean=action.ev.dataTransfer.getData("show")==="true";




            let id=stateitem.states.length;
            stateitem.states.push({name,id,color,show});

            ReactDOM.render( <App />, document.getElementById('root'));
            return stateitem;
        case 'changeLigth':
            let stateitem2:IState=userInitialState;
            stateitem2.states.map(user => {
                if (user.id === action.id) {
                    user.color==="red" ? user.color="blue" : (user.color==="blue" ? user.color="green":user.color="red") ;
                    return {...user};
                } else {
                    return {...user};
                }
            });

            ReactDOM.render( <App />, document.getElementById('root'));
            return stateitem2;
        case 'deleteLight':
           let deleteLight:IState=userInitialState;
            deleteLight.states=deleteLight.states.filter(j=>action.id!==j.id);
            deleteLight.states.map((user,i)=>{user.id=i;i++;});
           ReactDOM.render( <App />, document.getElementById('root'));
            return deleteLight;
        default:
            throw new Error();
    }
};
const StoreContext = createContext<{state:typeof userInitialState;dispatch:(action:ActionType)=>void ;}>({state:userInitialState,dispatch:()=>{}});

export  const StoreProviderBoard =(props: { children: React.ReactNode; })=>{

        const [state, dispatch] = useReducer(reducer,userInitialState);
        const value = {state, dispatch};

        return (
            <StoreContext.Provider value={value}>
                {props.children}
            </StoreContext.Provider>
        );

};

export const useStoreBoard = () => useContext(StoreContext);