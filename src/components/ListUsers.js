import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUsersAction } from "../redux/actions";
import { DeleteOutlined,SettingOutlined ,EllipsisOutlined} from '@ant-design/icons';
import{Card, Avatar} from 'antd'

const { Meta } = Card;
const ListUsers =({ getUsers, users, loading }) => {
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="column"  style={{ position:"absolute" }}>
        {users.map((user, key) => (
             <Card
             className="card-1"
             style={{ width: "300px",margin:"10px" }}
           cover={
             <img
             style={{ width: "140px" ,height:"140px",borderRadius :"50%", border:"solid 2px #637ddb",margin:"auto",marginTop:"20px"} }
               className="image-detail"
               alt="example"
               src={`${user.avatar}`}
               hoverable
            /> 
           }
           actions={[
             <SettingOutlined key="setting" />,
             <DeleteOutlined/>,
             <EllipsisOutlined key="ellipsis" />,
           ]}
         >
           <Meta
            title={` ${user.fullName} `}
            description={`${user.email}`}
           />
         </Card>
       ))}
    </div>  
  )
}

const mapStateToProps = state => ({
  users: state.users,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsersAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListUsers)
