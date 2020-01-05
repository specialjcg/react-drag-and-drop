import React, {createContext, useReducer, useContext} from "react";
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

type ActionType=|{type:'changeLigth',id:number};


 const userInitialState:IState={states:[{name:"Jean charles",id:0,color:'red',show:true},{name:"Bertrand",id:1,color:'blue',show:true}]};





const reducer = (state:IState=userInitialState, action:ActionType) => {
    switch (action.type) {
        case 'changeLigth':
            let stateitem:IState=userInitialState;
            stateitem.states.map(user => {
                if (user.id === action.id) {
                    user.color==='red' ? user.color='blue' : (user.color==='blue' ? user.color='green':user.color='red') ;
                    return {...user};
                } else {
                    return {...user};
                }
            });

            ReactDOM.render( <App />, document.getElementById('root'));
            return stateitem;

        default:
            throw new Error();
    }
};
const StoreContext = createContext<{state:typeof userInitialState;dispatch:(action:ActionType)=>void ;}>({state:userInitialState,dispatch:()=>{}});

export  const StoreProvider =(props: { children: React.ReactNode; })=>{

        const [state, dispatch] = useReducer(reducer,userInitialState);
        const value = {state, dispatch};

        return (
            <StoreContext.Provider value={value}>
                {props.children}
            </StoreContext.Provider>
        );

};

export const useStore = () => useContext(StoreContext);