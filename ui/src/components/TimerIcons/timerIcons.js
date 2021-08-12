import SkipNextIcon from "@material-ui/icons/SkipNext";
import RestoreIcon from "@material-ui/icons/Restore";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import IconButton from '@material-ui/core/IconButton';
import "./timerIcons.css";
import useSound from 'use-sound';



export default function TimerIcons(props) {



  return (
    <div className="icons">
      <IconButton>
        <RestoreIcon
          style={{ fontSize: "50px", color: "E3ECFF" }}
          onClick={() => props.setKey((prevKey) => prevKey + 1)}
        />
      </IconButton>

      {/* changes icon from paused to unpaused */}
      <IconButton>
        {props.isPlaying ? (
         <PauseIcon
          onClick={props.handleClick}

          style={{ fontSize: "50px", color: "E3ECFF" }}
        />
        ) : (
        <PlayArrowIcon
          onClick={props.handleClick}
          style={{ fontSize: "50px", color: "E3ECFF" }}
          />
        )}
      </IconButton>
    
      <IconButton>
       <SkipNextIcon
         style={{ fontSize: "50px", color: "E3ECFF" }}
          onClick={props.nextRound}
        />
      </IconButton>
    
    </div>
  );
}
