import React from 'react';

export const FooterRight = () => (
  <footer className='footerRight'>
      <p>牡丹江公安局交通管理局&copy;{(new Date()).toLocaleDateString().substr(0,4)}版权所有</p>
      <p>西安翔迅科技有限责任公司技术支持</p>
  </footer>
)

// export class FooterRight extends React.Component {
//   render() {
//     return (
//     <footer className='footerRight'>
//         <p>牡丹江公安局交通管理局2017-{(new Date()).toLocaleDateString().substr(0,4)}版权所有</p>
//         <p>西安翔迅科技有限责任公司技术支持</p>
//     </footer>
//     );
//   }
// };


