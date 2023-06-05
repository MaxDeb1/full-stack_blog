import Edit from "../assets/edit.png";
import Delete from "../assets/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";


const Single = () => {

  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/403571/pexels-photo-403571.jpeg" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt=""/>
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
            <div className="edit">
              <Link to={`/write?edit=2`} >
                <img src={Edit} alt="" />
              </Link>
              <img src={Delete} alt="" />
            </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quam. Vel in magnam dolorem, delectus, quasi expedita eveniet distinctio architecto, laboriosam blanditis aliquid. Enim, itaque mollitia. Vero, sunt. Exercitationem, autem?
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quam. Vel in magnam dolorem, delectus, quasi expedita eveniet distinctio architecto, laboriosam blanditis aliquid. Enim, itaque mollitia. Vero, sunt. Exercitationem, autem?
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quam. Vel in magnam dolorem, delectus, quasi expedita eveniet distinctio architecto, laboriosam blanditis aliquid. Enim, itaque mollitia. Vero, sunt. Exercitationem, autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quam. Vel in magnam dolorem, delectus, quasi expedita eveniet distinctio architecto, laboriosam blanditis aliquid. Enim, itaque mollitia. Vero, sunt. Exercitationem, autem?
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quam. Vel in magnam dolorem, delectus, quasi expedita eveniet distinctio architecto, laboriosam blanditis aliquid. Enim, itaque mollitia. Vero, sunt. Exercitationem, autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quam. Vel in magnam dolorem, delectus, quasi expedita eveniet distinctio architecto, laboriosam blanditis aliquid. Enim, itaque mollitia. Vero, sunt. Exercitationem, autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quam. Vel in magnam dolorem, delectus, quasi expedita eveniet distinctio architecto, laboriosam blanditis aliquid. Enim, itaque mollitia. Vero, sunt. Exercitationem, autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quam. Vel in magnam dolorem, delectus, quasi expedita eveniet distinctio architecto, laboriosam blanditis aliquid. Enim, itaque mollitia. Vero, sunt. Exercitationem, autem?
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;