
import log from './data/icons/log_name.png';
import { Tooltip } from 'antd';
import * as style from './style/HeaderStyle';
import { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { openWindowSignIn } from "../store/userSlice";
import { openWindow } from '../store/searchSlice';
import { useEffect, useState } from 'react';
import { searchBook, updateCatalog } from '../store/bookSlice';



export default function Navigation(){
  const userAuthorization = useSelector((state: RootState) => state.user.authorization);
  const isSearch=useSelector((state:RootState)=>state.search.visibleWindowSearch);
  const dispatch = useDispatch();
  const [searchString, setSearchString]=useState('');
  useEffect(()=>{
    dispatch(searchBook({searchString}));
  },[searchString]);
  
  useEffect(()=>{
    dispatch(updateCatalog());
  },[isSearch]);
    return (
        <style.Nav>
            <style.DLeft
              style={{gridTemplateColumns: '35px 200px'}}
              >
                <Tooltip title="Search books">
                    <style.ButtonSearch 
                    onClick={()=>dispatch(openWindow())}/>
                </Tooltip>
                {isSearch &&
                <style.SearchInput
                  placeholder='Введите запрос'
                  onChange={(e)=>setSearchString(e.target.value)}
                />
                }  
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
                </Tooltip>
              </style.DRight>
        </style.Nav>
    );
}