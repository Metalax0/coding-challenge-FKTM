import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../StateManagement/Slices/uiSlice";
import { RootState } from "../../StateManagement/Store";

const ModalCollection = () => {
    const dispatch = useDispatch();
    const { modal } = useSelector((state: RootState) => state.ui);

    // Method : closes / hides notification model and resets data
    const handleCancelClick = () => {
        dispatch(
            setModal({
                isOpen: false,
                content: "",
                type: "",
            })
        );
    };

    // Method : provides style to modal element according to message type (error, warning, etc)
    const getModalClass = () => {
        switch (modal.type) {
            case "error":
                return "text-red-700";

            default:
                break;
        }
    };

    return (
        <Modal title="ERROR" open={modal.isOpen} onCancel={handleCancelClick}>
            <p className={getModalClass()}>{modal.content}</p>
        </Modal>
    );
};

export default ModalCollection;
