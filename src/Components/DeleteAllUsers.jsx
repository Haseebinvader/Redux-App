import styled from "styled-components";
import { deleteUsers } from '../Store/Slices/UserSlice'
import { useDispatch } from "react-redux";
const DeleteAllUsers = () => {
    const dispatch = useDispatch();
    const deleteallusers = () => {
        dispatch(deleteUsers());
    }
    return (
        <Wrapper>
            <button className="btn clear-btn" onClick={deleteallusers}>DeleteAllUsers</button>
        </Wrapper>
    )
}
const Wrapper = styled.section`
  .clear-btn{
    text-transform:  capitalize;
    background-color: #db338a;
    margin-top: 2rem
  }
`;


export default DeleteAllUsers