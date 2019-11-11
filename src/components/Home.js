import React from 'react';
import './Home.css';
class Home extends React.Component  {
  render(){
      return (
        <div>
          <nav className="navbar navbar-default" style={{backgroundColor:"#FF0000"}}>
            <div className="container-fluid">
              
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a href="#">
                  <span><img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p280x280/71349133_3056265401113121_3287106288885956608_n.png?_nc_cat=106&_nc_oc=AQluGAS4bArsG2SpKEq8qYJLJlgbncurTFnufqBVw7KL5kNt9w3A7073gjosCTyFr44&_nc_ad=z-m&_nc_cid=0&_nc_zor=9&_nc_ht=scontent.xx&oh=a2041acbcc18bc4ceef6cfa1370b6f4f&oe=5E4BAF55"
                  style={{width:"150px",height:"50px",marginLeft:"80px",marginTop:"0px"}}
                  /></span>
                </a>
              </div>

              
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                      <span><i className="fas fa-bars" style={{fontSize:25}}></i></span>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" className="divider"></li>
                      <li><a href="#">Separated link</a></li>
                      <li role="separator" className="divider"></li>
                      <li><a href="#">One more separated link</a></li>
                    </ul>
                  </li>
                </ul>

                
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group" style={{marginTop:"10px"}}>
                  <input type="text" className="form-control" placeholder="Tìm kiếm tại đây..."/>
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button" style={{backgroundColor:"#424242"}}><span>
                        <i className="fas fa-search" style={{color:"#FBEFEF"}}></i>
                      </span></button>
                  </span>
                </div>
                </div>
                


                <ul className="nav navbar-nav navbar-right" style={{marginRight:"80px"}}>
                  <li><a href="#">
                      <span>
                        <i className="fas fa-shopping-cart" style={{fontSize:"25px",marginRight:"50px"}}></i>
                      </span>
                    </a>
                  </li>
                  <li className="btn btn-default" style={{marginTop:"10px",color:"red"}}>
                    ĐĂNG NHẬP
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">  
            <ol className="carousel-indicators">
              <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
              <li data-target="#carousel-example-generic" data-slide-to="1"></li>
              <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            </ol>            
            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1vXQ0mbj1gK0jSZFuXXcrHpXa.jpg_1200x1200.jpg" alt="..."/>
              </div>
              <div className="item">
                <img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1kucVmbj1gK0jSZFuXXcrHpXa.jpg_1200x1200Q100.jpg_.webp" alt="..."/>
              </div>
              <div className="item active">
                <img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1LBA4mi_1gK0jSZFqXXcpaXXa.jpg_1200x1200Q100.jpg_.webp" alt="..."/>
              </div>
            </div>
          </div>
    </div>
  );
}
}
export default Home;
