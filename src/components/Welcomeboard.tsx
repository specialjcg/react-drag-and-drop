import * as React from "react";
import { makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
import DeleteIcon from '@material-ui/icons/Delete';
import {useStoreBoard} from "../useStoreBoard";



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
    FiberRed:{color:'red'},
    FiberBlue:{color:'blue'}

});



type PieceProps = {

id:number;

}



const Welcome:React.FC<PieceProps> = ({id}) =>{

     const {state, dispatch} =useStoreBoard();





     const classes = useStyles();



    return(
<div>

            <Button variant="contained"  onClick={(e) => dispatch({type:'changeLigth', id:id})} className={classes.button}>
                {state.states[id].name} <FiberManualRecordRoundedIcon style={{color:state.states[id].color}}/>
                <DeleteIcon onClick={(e) => {e.stopPropagation();dispatch({type:'deleteLight', id:id})}}/>
            </Button>

</div>



);};


export default Welcome;