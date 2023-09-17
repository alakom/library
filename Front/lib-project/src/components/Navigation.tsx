
import log from './data/icons/log_name.png';
import { Tooltip } from 'antd';
import * as style from './style/HeaderStyle';
import { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { openWindowSignIn } from "../store/userSlice";
import { openWindow } from '../store/searchSlice';
import { useEffect, useState } from 'react';
import { searchBook, updateCatalog, filterGenre, aSortingCatalog, dSortingCatalog } from '../store/bookSlice';



export default function Navigation(){
  const userAuthorization = useSelector((state: RootState) => state.user.authorization);
  const isSearch=useSelector((state:RootState)=>state.search.visibleWindowSearch);
  const dispatch = useDispatch();
  const [searchString, setSearchString]=useState('');
  const active = useSelector((state:RootState)=>state.book.saveParametrs.activeFilter);
  const aSort =useSelector((state:RootState)=>state.book.saveParametrs.aSort);
  const dSort =useSelector((state:RootState)=>state.book.saveParametrs.dSort);
  useEffect(()=>{
    dispatch(searchBook({searchString}));
    dispatch(filterGenre({active}));
    if (aSort){
      dispatch(aSortingCatalog());
    }
    if (dSort){
      dispatch(dSortingCatalog());
    }
  },[searchString]);
  
  useEffect(()=>{
    dispatch(updateCatalog());
    
    dispatch(filterGenre({active}));
    if (aSort){
      dispatch(aSortingCatalog());
    }
    if (dSort){
      dispatch(dSortingCatalog());
    }
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