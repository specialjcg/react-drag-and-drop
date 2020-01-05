import * as React from "react";


import {makeStyles} from "@material-ui/core";

import {useStoreBoard} from "../useStoreBoard";
import Welcomeboard from "./Welcomeboard";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles({
    div: {

        background: 'linear-gradient(to right, #4286f4, #373B44)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        height: '100vh',



}

});

const onDragOver = (ev:React.DragEvent<HTMLDivElement>) => {


    ev.preventDefault();
    ev.dataTransfer.dropEffect = "copy";
};


const Containeur:React.FC = () =>{
    const classes = useStyles();
    const {state, dispatch} =useStoreBoard();

    return(




                <div  onDragOver={(e) => onDragOver(e)} className={classes.div} onDrop={(e)=> dispatch({type:'onDrop', ev:e})}
                    >
                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                    {state.states.map((choix)=><Welcomeboard  key={choix.id}  id={choix.id}/>)}
                    </Grid>


                </div>



    );};


export default Containeur;