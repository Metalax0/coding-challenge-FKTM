import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../StateManagement/Store";
import { setModal } from "../StateManagement/Slices/uiSlice";

const ModalCollection = () => {
    const dispatch = useDispatch();
    const { modal } = useSelector((state: RootState) => state.ui);

    const handleCancelClick = () => {
        dispatch(
            setModal({
                isOpen: false,
                content: "",
                type: "",
            })
        );
    };

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
