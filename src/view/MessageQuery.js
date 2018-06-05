//信息查询
import React from 'react';
import ReactDOM from 'react-dom';
import {NoticeBar, Icon ,WingBlank, WhiteSpace,Grid, Button } from 'antd-mobile';
import {FooterRight} from './FooterRight';
import {IMAGE_URL} from '../util/UtilUrl';

import '../style.css';
import index from  '../weixinimg/index.png';
import lkcx from  '../weixinimg/lkcx.png';
import fjzd from  '../weixinimg/fjzd.png';
import cldacx from  '../weixinimg/cldacx.png';
import jsrdacx from  '../weixinimg/jsrdacx.png';
import sgdfld from  '../weixinimg/sgdfld.png';
import ydld from  '../weixinimg/ydld.png';

const imageslist1 = [lkcx,fjzd,cldacx,jsrdacx];

const imageslist2 = [{icon:'./weixinimg/sgdfld.png',text:'事故多发路段'},{icon:'./weixinimg/ydld.png',text:'易堵路段'}];

const GridExample = (props) =>{
  const openid = props.weixinId;
  const imageslist3 = [
    {imgsrc:'./weixinimg/lkcx.png',url:`/roadcondpoi.jspx`},
    {imgsrc:'./weixinimg/fjzd.png',url:`/policenearby.jspx?weixinId=${openid}`},
    // {imgsrc:'./weixinimg/cldacx.png',url:`/carArchives.jspx?weixinId=${openid}`},
    // {imgsrc:'./weixinimg/jsrdacx.png',url:`/driverArchives.jspx?weixinId=${openid}`},
    
  ];

  const imageslist4 = [
    {imgsrc:'./weixinimg/sgdfld.png',text:'事故多发路段',url:`/shiguduofa.jspx`},
    {imgsrc:'./weixinimg/ydld.png',text:'易堵路段',url:`/flowStatus.jspx`},
  ];
  // console.log(process.env.NODE_ENV);
  return (
  <div>
    <Grid data={imageslist3}  onClick={(el,index) => window.location.href=el.url} 
    columnNum={2} activeStyle={false} hasLine={false} itemStyle={{height:'100px'}}
     renderItem={dataItem => (
        <div style={{ padding: '12.5px' }}>
          <img src={IMAGE_URL+dataItem.imgsrc} style={{width:'95%'}} alt=""  />
           
        </div>
      )}
    />
    <WhiteSpace size="sm" style={{backgroundColor:'#fff'}} />
    <Grid data={imageslist4}  onClick={(el,index) => window.location.href=el.url} 
    columnNum={2} activeStyle={false} hasLine={false}
     renderItem={dataItem => (
        <div style={{ paddingTop: '12.5px',borderRight:'1PX solid #ddd' }}>
          <img src={IMAGE_URL+dataItem.imgsrc} style={{width:'30%'}} alt="" />
          <div style={{ color: '#666', fontSize: '14px', marginTop: '12px' }}>
            <span>{dataItem.text}</span>
          </div>
        </div>
      )}
    />
    
  </div>
);
};

export class MessageQuery extends React.Component{
    render(){
      //console.log(this.props.weixinId);
        return (
            <div>
                <img  src={IMAGE_URL+'./weixinimg/index.png'}  alt="" style={{ width: '100%', verticalAlign: 'top' }}  /> 
                <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                    牡丹江交警，竭诚为您服务！&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </NoticeBar>
                <GridExample weixinId={this.props.weixinId} />
                <FooterRight />
            </div>
        )
    }
}


