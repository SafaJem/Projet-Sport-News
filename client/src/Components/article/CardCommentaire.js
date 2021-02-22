import React, { Fragment ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect ,useDispatch} from 'react-redux';
import { deleteComment } from '../../Redux/actions/articleAction';

const CommentItem = ({
  comment: {_id, commentaire, name , user, date },idArticle
 
}) => {
 
  const dispatch = useDispatch();
  const deletComm = () => {

    dispatch(deleteComment(idArticle , _id));
  };
  return (
    <Fragment>
      <div class="post bg-white p-1 my-1">
        <div>
          <Link to={`/profile/${user}`}>
            <img class="round-img" alt="" />
            <h4>{name}</h4>
          </Link>
        </div>
        <div>
          <p class="my-1">{commentaire}</p>
          <p class="post-date">
 {date.slice(0, 10)} ---{" "}
          {date.slice(11, 19)}          </p>
          
            <button
            onClick={deletComm}
              type="button"
              className="btn btn-danger"
            >
              <i className="fas fa-times" />
            </button>
          
        </div>
      </div>
    </Fragment>
  );
};
// onClick={(e) => deleteComment(postId, _id)}
CommentItem.propTypes = {
  idArticle: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem); 