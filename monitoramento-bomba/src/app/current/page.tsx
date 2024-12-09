import SensorData from "@/components/sensor/SensorData";
import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";

export default function Data() {
    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Header title="Corrente" username="Username" />
                <main className="flex-1 overflow-auto p-4">
                    <div className="flex space-x-4">
                        <div className="flex-1">
                            <SensorData type="Corrente" />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}