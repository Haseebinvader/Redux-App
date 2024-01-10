import { useSelector, useDispatch } from "react-redux"
import { MdDelete } from "react-icons/md";
import { removeUser } from '../Store/Slices/UserSlice'
import styled from "styled-components";

const DisplayUsers = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => {
        return state.users
    });

    const deleteUser = (id) => {
        dispatch(removeUser(id))
    }
    return (
        <Wrapper>
            <div>
                {data.map((user, id) => {
                    return <li key={id}>
                        {user}
                        <button className="btn-delete" onClick={() => deleteUser(id)}>
                            <MdDelete className="delete-icon" />
                        </button>
                    </li>
                })}
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
  
`;
export default DisplayUsers