
import log from './data/icons/log_name.png';
import { Tooltip } from 'antd';
import * as style from './style/HeaderStyle';
import { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { openWindowSignIn } from "../store/userSlice";
import { openWindow } from '../store/searchSlice';



export default function Navigation(){
  const userAuthorization = useSelector((state: RootState) => state.user.authorization);
  const dispatch = useDispatch();
    return (
        <style.Nav>
            <style.DLeft>
                <Tooltip title="Search books">
                    <style.ButtonSearch 
                    onClick={()=>dispatch(openWindow())}/>
                </Tooltip>  
              </style.DLeft>

              <style.DLogo>  
                <style.Logo src={log} alt="log"></style.Logo>
              </style.DLogo>

              <style.DRight
              style={{gridTemplateColumns: userAuthorization?'55px 55px':'50px'}}
              >

                {userAuthorization && 
               <Tooltip title="My books">
                    <style.ButtonMyBook/>
                </Tooltip>}
            
                <Tooltip title="Sign in">
                    <style.ButtonSignIn
                    onClick={()=>dispatch(openWindowSignIn())}/>
                </Tooltip></style.DRight>
        </style.Nav>
    );
}