// 警民互动界面展示效果
import React from 'react';
import ReactDOM from 'react-dom';
import {NoticeBar, Icon ,WingBlank, WhiteSpace,Grid, Button } from 'antd-mobile';
import {FooterRight} from './FooterRight';
import {IMAGE_URL} from '../util/UtilUrl';

import '../style.css';
import ic_ppi_float from  '../weixinimg/ic_ppi_float.png';

import ic_ppi_sinse from  '../weixinimg/ic_ppi_sinse.png';
import ic_ppi_security from  '../weixinimg/ic_ppi_security.png';

const ppi = [{icon:ic_ppi_sinse,text:'违法随手拍'},{icon:ic_ppi_security,text:'安全宣传'}];

const GridPPI = (props) => {
    const openid = props.weixinId;
    const imageslist3 = [
        {imgsrc:'./weixinimg/ic_ppi_sinse.png?v='+Date.parse(new Date()),url:`/sspxz.jspx?weixinId=${openid}`},
        {imgsrc:'./weixinimg/ic_ppi_security.png?v='+Date.parse(new Date()),url:`/channelanquanQueryact.jspx?weixinId=${openid}`},
    ];
    return (
  <div style={{ paddingTop: '48px',backgroundColor:'#fff'}}>
    <Grid data={imageslist3} columnNum={2} activeStyle={false} hasLine={false} 
     onClick={(el,index) => window.location.href=el.url} 
     renderItem={dataItem => (
        <div>
          <img src={IMAGE_URL+dataItem.imgsrc} style={{width:'80%'}} alt="" />
        </div>
      )}
    />
    
  </div>
);
}

function onItemClickFirst(dataItem,num){
}


export class InteractionPolicePeople extends React.Component{
    
    

    render(){
        return (
            <div className='feeder'>
                <img  src={IMAGE_URL+'./weixinimg/ic_ppi_float.png?v='+Date.parse(new Date())}  alt="" style={{ width: '100%', verticalAlign: 'top' }}  /> 
                <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                    牡丹江交警，竭诚为您服务！&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;牡丹江交警，竭诚为您服务！
                </NoticeBar>
                <GridPPI weixinId={this.props.weixinId}/>
                <FooterRight />
            </div>
        )
    }
}


