<div className="container-fluid py-2 bg-dark import">
  <div className="row g-3">
        {/* Left Box */}
        <div className="col-md-6">
        <div className="card left-box h-100">
            <div className="card-body bodi rounded-1 py-5 px-3">
            <h5 className="card-title textu text-right">Big Lorem ipsum dolor sit amet.</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, laborum!</p>
            </div>
        </div>
        </div>

        {/* Right Boxes */}
        <div className="col-md-3">
        <div className="d-flex flex-column h-100 justify-content-between ms-0">
            {/* Top Small Box */}
            <div className="card right-top mb-1">
            <div className="card-body bg-light rounded-1 py-3 px-3 bodi2">
                <h5 className="card-title textu2 text-right ">Lorem ipsum dolor sit.</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            </div>

            {/* Bottom Small Box */}
            <div className="card right-bottom">
            <div className="card-body  rounded-1 py-3 px-3 bodi2">
                <h5 className="card-title textu2 text-right">Another small box content at side.</h5>
                <p className="card-text">Lorem ipsum dolor sit amet.</p>
            </div>
            </div>
        </div>
        </div>
  </div>
</div>











.container-fluid .fonte{
    font-size: 8em;
    background-color: #efebeb;
    font-weight: 700;
}

.search:focus{
    outline:none;
    border: solid 1px #000 ;
}

.import{
    background-color: #efebeb;
}

.bodi{
    background-image: url( "../assets/dom.jpg");
    background-repeat: no-repeat;
    background-size:cover ;
    overflow: hidden;
    height: 300px;
    color: #fff;
    outline: 1px solid #1b1919de ;
    border: none;
    position: relative;
}

.bodi h5,p:hover{
    background-color: #000;
    color: white;
    opacity: 3;
    padding: .3em;
    border-radius: 5px;
}

.bodi2 h5,p:hover{
    background-color: #000;
    color: white;
    opacity: 3;
    padding: .3em;
    border-radius: 5px;
}


.bodi2{
    background-image: url( "../assets/dom.jpg");
    background-repeat: no-repeat;
    background-size:cover ;
    overflow: hidden;
    /* height: 300px; */
    color: #fff;
    outline: 1px solid #1b1919de ;
    border: none;
    position: relative;
    height: fit-content;
}








.bodi .textu::before{
    content: "Hot";
    display: block;
    text-decoration: underline;
    background-color: red;
    width: 75px;
    text-align: center;
    border-radius: 2px;
    color: #000;
    font-weight: 700;
    padding: 1px 5px;
}

.bodi2 .textu2::before{
    content: "Hot";
    display: block;
    text-decoration: underline;
    background-color: red;
    width: 75px;
    text-align: center;
    border-radius: 2px;
    color: #000;
    font-weight: 700;
    padding: 1px 5px;
}









/* imported css */

/* General card styling */
.card {
    border: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  
  /* Left box styling */
  .left-box {
    background-color: #f8f9fa;
  }
  
  /* Right boxes styling */
  .right-top {
    background-color: #e9ecef;
  }
  
  .right-bottom {
    background-color: #dee2e6;
  }
  
  /* Card body styling */
  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    text-align: center;
  }
  
  /* Title styling */
  .card-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  


