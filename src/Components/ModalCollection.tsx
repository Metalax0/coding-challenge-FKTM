import { Modal } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../StateManagement/Store";

const ModalCollection = () => {
    const { modal } = useSelector((state: RootState) => state.ui);

    const getModalClass = () => {
        console.log(modal.type);
        switch (modal.type) {
            case "error":
                return "text-red-700";

            default:
                break;
        }
    };

    return (
        <Modal title="ERROR" open={modal.isOpen}>
            <p className={getModalClass()}>{modal.content}</p>
        </Modal>
    );
};

export default ModalCollection;
