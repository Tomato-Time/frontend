import SkipNextIcon from '@material-ui/icons/SkipNext';
import RestoreIcon from '@material-ui/icons/Restore';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import './timerIcons.css'

export default function TimerIcons(props){
    return(
        <div className="icons">
        <RestoreIcon style={{fontSize: '50px', color: "E3ECFF"}}/>
        {/* changes icon from paused to unpaused */}
        {props.isPlaying? (<PauseIcon onClick={props.handleClick} style={{fontSize: '50px', color: "E3ECFF"}}/>) : (<PlayArrowIcon onClick={props.handleClick} style={{fontSize: '50px', color: "E3ECFF"}}/>)} 
        <SkipNextIcon style={{fontSize: '50px', color: "E3ECFF"}}/>
      </div>           
    )
}