// 业务办理界面展示效果
import React from 'react';
import ReactDOM from 'react-dom';
import {NoticeBar, Icon ,WingBlank, WhiteSpace,Grid, Button } from 'antd-mobile';
import {FooterRight} from './FooterRight';
import {IMAGE_URL} from '../util/UtilUrl';

import '../style.css';
import ic_ppi_float from  '../weixinimg/ic_ppi_float2.png';
import ic_bsp_sinsepross from  '../weixinimg/ic_bsp_sinsepross.png';
import ic_bsp_acsearch from  '../weixinimg/ic_bsp_acsearch.png';
import ic_bsp_guide from  '../weixinimg/ic_bsp_guide.png';
import ic_bsp_point from  '../weixinimg/ic_bsp_point.png';

const bsp = [ic_bsp_sinsepross,ic_bsp_acsearch,ic_bsp_guide,ic_bsp_point];

const GridBSP =  (props) => {
    const openid = props.weixinId;
    const imageslist3 = [
        {imgsrc:'./weixinimg/ic_bsp_sinsepross.png',url:`/vioQueryact.jspx?weixinId=${openid}`},
        {imgsrc:'./weixinimg/ic_bsp_acsearch.png',url:`/accidentquery.jspx?weixinId=${openid}`},
        {imgsrc:'./weixinimg/ic_bsp_guide.png',url:`/channelQueryact.jspx?weixinId=${openid}`},
        {imgsrc:'./weixinimg/ic_bsp_point.png',url:`/roadcondpoilist.jspx?weixinId=${openid}`},
        
    ];
    return (
  <div>
        <Grid data={imageslist3} columnNum={2} onClick={handleClick} activeStyle={false} hasLine={false} itemStyle={{height:'140px'}}
        renderItem={dataItem => (
            <div style={{ padding: '12.5px' }}>
            <img src={IMAGE_URL+dataItem.imgsrc} style={{width:'95%'}} alt="" />
            </div>
        )}
        />
  </div>
);
}

const handleClick = (el,index) => window.location.href=el.url;


export class BusinessProcessing extends React.Component{
    render(){
        return (
            <div className='feeder'>
                <img  src={IMAGE_URL+'./weixinimg/ic_ppi_float2.png'}  alt="" style={{ width: '100%', verticalAlign: 'top' }}  onTouchEnd={this.handleClick}/> 
                <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                    牡丹江交警，竭诚为您服务！&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;牡丹江交警，竭诚为您服务！
                </NoticeBar>
                <GridBSP weixinId={this.props.weixinId}/>
                <FooterRight />
            </div>
        )
    }
}


