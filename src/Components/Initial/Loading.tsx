import { Spin } from "antd";

const Loading = () => {
    return (
        <div className="fixed inset-0 flex flex-col gap-5 items-center justify-center bg-gray-100 z-50">
            <Spin size="large" />
            <h1 className="text-xl">Loading</h1>
        </div>
    );
};

export default Loading;
