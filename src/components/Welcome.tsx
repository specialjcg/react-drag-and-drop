import * as React from "react";
import { makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
import {useStore} from "../useStore";



const useStyles = makeStyles({
    button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        margin: 8,
    },
    colorred:{color:'red'},
    colorblue:{color:'blue'},
    colorgreen:{color:'green'}


});
const onDragStart = (ev: React.DragEvent<HTMLButtonElement>, id: { name: any; id?: number; color?: string; show?: boolean; path?: any; }) => {


    ev.dataTransfer.setData("id", id.id!.toString());
    ev.dataTransfer.setData("name", id.name);
    ev.dataTransfer.setData("color", id.color!);
    ev.dataTransfer.setData("show", id.show!.toString());
    ev.dataTransfer.effectAllowed = "copy";
};



type PieceProps = {

id:number;

}



const Welcome:React.FC<PieceProps> = ({id}) =>{

     const {state, dispatch} =useStore();





     const classes = useStyles();



    return(
<div>

            <Button variant="contained" draggable={true} onDragStart={(ev: React.DragEvent<HTMLButtonElement>) => onDragStart(ev,state.states[id])} onClick={() => dispatch({type:'changeLigth', id:id})} className={classes.button}>
                {state.states[id].name} <FiberManualRecordRoundedIcon style={{color:state.states[id].color}}/>
            </Button>

</div>



);};


export default Welcome;