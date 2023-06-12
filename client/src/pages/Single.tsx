import axios from "axios";
import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Delete from "../assets/delete.png";
import Edit from "../assets/edit.png";
import Menu from "../components/Menu";
import { AuthContext } from "../context/authContext";

type postType = {
  id: number;
  title: string;
  desc: string;
  img: string;
  date: Date;
  cat: string;
  username: string;
  userImg: string;
};

const Single = () => {
  const [post, setPost] = useState<Partial<postType>>({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} alt="" />
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <img src={Edit} alt="" />
              </Link>
              <img onClick={handleDelete} src={Delete} alt="" />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        {post.desc}
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quam. Vel in magnam dolorem, delectus, quasi expedita eveniet distinctio architecto, laboriosam blanditis aliquid. Enim, itaque mollitia. Vero, sunt. Exercitationem, autem?
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quam. Vel in magnam dolorem, delectus, quasi expedita eveniet distinctio architecto, laboriosam blanditis aliquid. Enim, itaque mollitia. Vero, sunt. Exercitationem, autem?
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quam. Vel in magnam dolorem, delectus, quasi expedita eveniet distinctio architecto, laboriosam blanditis aliquid. Enim, itaque mollitia. Vero, sunt. Exercitationem, autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quam. Vel in magnam dolorem, delectus, quasi expedita eveniet distinctio architecto, laboriosam blanditis aliquid. Enim, itaque mollitia. Vero, sunt. Exercitationem, autem?
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quam. Vel in magnam dolorem, delectus, quasi expedita eveniet distinctio architecto, laboriosam blanditis aliquid. Enim, itaque mollitia. Vero, sunt. Exercitationem, autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quam. Vel in magnam dolorem, delectus, quasi expedita eveniet distinctio architecto, laboriosam blanditis aliquid. Enim, itaque mollitia. Vero, sunt. Exercitationem, autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quam. Vel in magnam dolorem, delectus, quasi expedita eveniet distinctio architecto, laboriosam blanditis aliquid. Enim, itaque mollitia. Vero, sunt. Exercitationem, autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quam. Vel in magnam dolorem, delectus, quasi expedita eveniet distinctio architecto, laboriosam blanditis aliquid. Enim, itaque mollitia. Vero, sunt. Exercitationem, autem?
        </p> */}
      </div>
      <Menu />
    </div>
  );
};

export default Single;
