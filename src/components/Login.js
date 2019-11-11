import React from 'react';
import './Login.css';

class Login extends React.Component  {
  render(){
      return (
          <div>
             
             <div className="container">
                 
                 <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                     <div className="bgLogin">
                        <h2 className="TextLogin">ĐĂNG NHẬP</h2>
                        <input type="text" className="form-control login" placeholder="Tên, email hoặc số điện thoại" />
                        <input type="password" className="form-control pass" placeholder="Password" />
                        
                        <div className="checkbox check">
                            <label>
                                <input type="checkbox" />
                                Ghi nhớ đăng nhập
                            </label>
                        </div>
                        
                        <button type="button" className="btn btn-default btnlogin">ĐĂNG NHẬP</button>
                        <h6 >
                            <a href="#" className="href" >   Quên mật khẩu ?</a>
                        </h6>
                        
                        <div className="row">
                            
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-lg-offset-5" style={{marginTop: "18px"}}>
                                <strong style={{float:"left",fontFamily:"'Times New Roman', Times, serif",color:" aliceblue",marginLeft:"100px",fontSize:"20px"}}>Đăng ký khác</strong>
                                <i className="fab fa-google-plus iconGG" style={{color:"aliceblue" ,fontSize:"25px",marginLeft:"10px"}}></i>
                                <i className="fab fa-facebook" style={{color:"aliceblue" ,fontSize:"25px",marginLeft:"10px"}}></i>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-lg-offset-5" style={{marginTop: "18px"}}>
                                <i style={{color:"aliceblue",marginLeft:"75px"}}>Bạn có tài khoản chưa?</i>
                                <a style={{color:"aliceblue",marginLeft:"10px"}}>Đăng kí ngay</a>
                            </div>
                        </div>

                     </div>
                 </div>
                 
             </div>
             
          </div>
    
  );
}
}
export default Login;
